import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from '@playwright/test';

const libraryBundle = readFileSync(resolve(__dirname, '../../packages/multiple-select-vanilla/dist/index.js'), 'utf8');
const libraryCss = readFileSync(resolve(__dirname, '../../packages/multiple-select-vanilla/dist/styles/css/multiple-select.css'), 'utf8');

test.beforeEach(async ({ page }) => {
  await page.route('**/__playwright__/multiple-select-vanilla.js', route =>
    route.fulfill({ contentType: 'text/javascript', body: libraryBundle }),
  );
  await page.goto('/');
  await page.setContent('<!doctype html><html><body></body></html>');
  await page.addStyleTag({ content: libraryCss });
  await page.evaluate(async (moduleUrl: string) => {
    (window as any).auditLibrary = await import(moduleUrl);
  }, '/__playwright__/multiple-select-vanilla.js');
});

test('selection preserves numeric coercion, strict native values, false, zero, and NaN', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    select.multiple = true;
    select.append(new Option('one', '1'), new Option('two', '2'));
    document.body.append(select);
    const instance = multipleSelect(select, {
      data: [
        { text: 'number', value: 1 },
        { text: 'string', value: '1' },
        { text: 'padded', value: '01' },
        { text: 'zero', value: 0 },
        { text: 'false', value: false },
        { text: 'nan', value: NaN },
      ],
    });
    instance.setSelects([1, 0, false, NaN]);
    const labels = instance.getSelects('text');
    const native = Array.from(select.selectedOptions, option => option.value);
    instance.setSelects(['01']);
    return { labels, native, padded: instance.getSelects() };
  });
  expect(result).toEqual({ labels: ['number', 'string', 'zero', 'false', 'nan'], native: ['1'], padded: ['01'] });
});

test('virtual setData, refresh, and filtering retain the active list and scroll listeners', async ({ page }) => {
  const result = await page.evaluate(async () => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    select.multiple = true;
    document.body.append(select);
    const data = (prefix: string) => Array.from({ length: 1000 }, (_, i) => ({ text: `${prefix} ${i}`, value: String(i) }));
    const instance = multipleSelect(select, { data: data('Old'), filter: true, width: 250 });
    instance.setData(data('New'));
    instance.refresh();
    await instance.open(null);
    const drop = instance.getDropElement();
    const list = drop.querySelector('ul');
    const initial = list.querySelector('li[data-key] span').textContent;
    const input = drop.querySelector('.ms-search input');
    input.value = 'New 999';
    input.dispatchEvent(new KeyboardEvent('keyup', { key: '9' }));
    const filtered = list.querySelector('li[data-key] span').textContent;
    input.value = '';
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Backspace' }));
    list.scrollTop = list.scrollHeight;
    list.dispatchEvent(new Event('scroll'));
    const last = list.querySelector('li[data-key="option_999"] span')?.textContent;
    instance.check('999');
    const checked = list.querySelector('input[data-key="option_999"]')?.checked;
    list.scrollTop = 0;
    list.dispatchEvent(new Event('scroll'));
    list.scrollTop = list.scrollHeight;
    list.dispatchEvent(new Event('scroll'));
    return { initial, filtered, last, checked, restored: list.querySelector('input[data-key="option_999"]')?.checked };
  });
  expect(result).toEqual({ initial: 'New 0', filtered: 'New 999', last: 'New 999', checked: true, restored: true });
});

test('cached text rows reflect mutable labels and selection without decoding the entire list again', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    select.multiple = true;
    document.body.append(select);
    const data = Array.from({ length: 10000 }, (_, i) => ({ text: `Item &amp; ${i}`, value: String(i) }));
    const instance = multipleSelect(select, { data, width: 250, filter: true });
    const original = document.createElement;
    let textareas = 0;
    document.createElement = ((tag: string, ...args: any[]) => {
      if (tag === 'textarea') {
        textareas++;
      }
      return original.call(document, tag, ...args);
    }) as typeof document.createElement;
    try {
      data[1].text = 'Changed &amp; label';
      instance.check('1');
    } finally {
      document.createElement = original;
    }
    const drop = instance.getDropElement();
    const values = instance.getSelects();
    const input = drop.querySelector('.ms-search input');
    input.value = 'Changed';
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'd' }));
    return { textareas, values, text: drop.querySelector('li[data-key="option_1"] span').textContent };
  });
  expect(result.values).toEqual(['1']);
  expect(result.text).toBe('Changed & label');
  expect(result.textareas).toBeLessThan(5);
});

test('custom rendering callbacks keep running after selection changes', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    select.multiple = true;
    document.body.append(select);
    let styles = 0;
    let sanitizations = 0;
    const instance = multipleSelect(select, {
      data: Array.from({ length: 1000 }, (_, i) => ({ text: `Item ${i}`, value: String(i) })),
      renderOptionLabelAsHtml: true,
      sanitizer: (text: string) => {
        sanitizations++;
        return text;
      },
      cssStyler: () => {
        styles++;
        return null;
      },
    });
    styles = 0;
    sanitizations = 0;
    instance.check('1');
    return { styles, sanitizations };
  });
  expect(result).toEqual({ styles: 1000, sanitizations: 1001 });
});

test('filtering preserves custom parser order and grouped children with whitespace', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    select.multiple = true;
    select.innerHTML =
      '<optgroup label="Group">\n<option value="1">Alpha</option>\n<option value="2">Beta</option>\n</optgroup><option value="3">Gamma</option>';
    document.body.append(select);
    const parsed: string[] = [];
    const parents: boolean[] = [];
    const instance = multipleSelect(select, {
      filter: true,
      diacriticParser: (text: string) => {
        parsed.push(text);
        return text;
      },
      customFilter: (args: any) => {
        parents.push('parent' in args);
        return args.text.includes(args.search);
      },
    });
    const input = instance.getDropElement().querySelector('.ms-search input');
    input.value = 'a';
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }));
    return { parsed, parents };
  });
  expect(result).toEqual({ parsed: ['alpha', 'a', 'beta', 'a', 'gamma', 'a'], parents: [true, true, false] });
});

test('event teardown handles capture, collections, omitted callbacks, and rebinding', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { BindingEventService } = (window as any).auditLibrary;
    const service = new BindingEventService({ distinctEvent: true });
    const parent = document.createElement('div');
    parent.append(document.createElement('button'), document.createElement('button'));
    document.body.append(parent);
    const buttons = parent.querySelectorAll('button');
    let calls = 0;
    const listener = () => calls++;
    service.bind(buttons, ['click', 'focus'], listener, { capture: true }, 'buttons');
    service.unbind(buttons, ['click', 'focus']);
    buttons.forEach(button => {
      button.click();
      button.focus();
    });
    const afterUnbind = calls;
    service.bind(buttons, 'click', listener, true, 'buttons');
    const rebound = service.hasBinding(buttons[0], ['click', 'focus']);
    service.unbindAll('buttons');
    buttons.forEach(button => button.click());
    // The existing getter exposes a live array. Mutations must still affect distinct binding checks.
    const records = service.boundedEvents;
    records.push({ element: buttons[0], eventName: 'click', listener });
    service.bind(buttons[0], 'click', listener);
    return { afterUnbind, afterUnbindAll: calls, rebound, exposedRecords: records.length };
  });
  expect(result).toEqual({ afterUnbind: 0, afterUnbindAll: 0, rebound: true, exposedRecords: 1 });
});

test('virtual reset uses replacement rows and unchanged cache checks preserve mounted elements', async ({ page }) => {
  const result = await page.evaluate(() => {
    const { VirtualScroll } = (window as any).auditLibrary;
    const list = document.createElement('ul');
    list.style.height = '200px';
    list.style.overflow = 'auto';
    document.body.append(list);
    const rows = (prefix: string) =>
      Array.from({ length: 1000 }, (_, i) => ({
        tagName: 'li',
        props: { textContent: `${prefix} ${i}`, style: { height: '20px' } },
      }));
    const scroller = new VirtualScroll({ rows: rows('Old'), scrollEl: list, contentEl: list, callback: () => {} });
    scroller.reset(rows('New'));
    const first = list.firstChild;
    scroller.initDOM(scroller.rows);
    const retained = first === list.firstChild;
    list.scrollTop = 3010;
    list.dispatchEvent(new Event('scroll'));
    const text = list.querySelector('li:not(.virtual-scroll-top)')?.textContent;
    scroller.reset([]);
    return { retained, text, empty: list.children.length, start: scroller.dataStart, end: scroller.dataEnd };
  });
  expect(result).toEqual({ retained: true, text: 'New 150', empty: 0, start: 0, end: 0 });
});

test('unchanged option updates preserve the instance and destroy settles delayed opening', async ({ page }) => {
  const result = await page.evaluate(async () => {
    const { multipleSelect } = (window as any).auditLibrary;
    const select = document.createElement('select');
    document.body.append(select);
    let destroys = 0;
    let opens = 0;
    const instance = multipleSelect(select, { data: ['one'], width: 250, onDestroy: () => destroys++, onOpen: () => opens++ });
    const parent = instance.getParentElement();
    instance.refreshOptions({ width: 250 });
    const unchanged = parent === instance.getParentElement() && destroys === 0;
    const opening = instance.open(10);
    instance.destroy();
    await opening;
    await new Promise(resolve => setTimeout(resolve, 30));
    return { unchanged, opens, destroys };
  });
  expect(result).toEqual({ unchanged: true, opens: 0, destroys: 1 });
});
