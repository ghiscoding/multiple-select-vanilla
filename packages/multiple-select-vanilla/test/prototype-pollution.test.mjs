import assert from 'node:assert/strict';
import { after, test } from 'node:test';

import { MultipleSelectInstance, VirtualScroll, convertItemRowToHtml, createDomElement } from '../dist/index.js';

const originalDocument = globalThis.document;

after(() => {
  globalThis.document = originalDocument;
});

test('createDomElement rejects prototype and inherited built-in property names', () => {
  const elementPrototype = {};
  globalThis.document = {
    createElement: () => Object.create(elementPrototype),
  };

  for (const propertyName of ['__proto__', 'prototype', 'constructor', 'toString', 'valueOf', 'hasOwnProperty']) {
    const properties = { [propertyName]: { polluted: propertyName } };
    assert.throws(() => createDomElement('div', properties), /unsafe DOM property name/);
  }

  assert.equal(elementPrototype.polluted, undefined);
  assert.equal(Object.polluted, undefined);
  assert.equal(Object.prototype.toString.polluted, undefined);
  assert.equal(Object.prototype.valueOf.polluted, undefined);
  assert.equal(Object.prototype.hasOwnProperty.polluted, undefined);
});

test('createDomElement still assigns ordinary and nested DOM properties', () => {
  const style = {};
  const dataset = {};
  globalThis.document = {
    createElement: () => ({ style, dataset }),
  };

  const element = createDomElement('div', {
    className: 'safe-class',
    dataset: { key: 'safe-key' },
    style: { display: 'none' },
  });

  assert.equal(element.className, 'safe-class');
  assert.deepEqual(element.dataset, { key: 'safe-key' });
  assert.deepEqual(element.style, { display: 'none' });
});

test('createDomElement does not merge objects into inherited functions', () => {
  const addEventListener = () => {};
  const elementPrototype = { addEventListener };
  globalThis.document = {
    createElement: () => Object.create(elementPrototype),
  };

  const payload = { polluted: true };
  const element = createDomElement('div', { addEventListener: payload });

  assert.equal(addEventListener.polluted, undefined);
  assert.equal(Object.hasOwn(element, 'addEventListener'), true);
  assert.equal(element.addEventListener, payload);
});

test('convertItemRowToHtml supports prototype-free and overridden input objects', () => {
  globalThis.document = {
    createElement: tagName => ({ tagName, appendChild: () => {}, setAttribute: () => {} }),
  };

  const prototypeFreeItem = Object.assign(Object.create(null), { tagName: 'div', props: {} });
  const overriddenItem = { tagName: 'span', props: {}, hasOwnProperty: null };

  assert.equal(convertItemRowToHtml(prototypeFreeItem).tagName, 'div');
  assert.equal(convertItemRowToHtml(overriddenItem).tagName, 'span');
});

test('VirtualScroll uses a prototype-free cache across resets', () => {
  const createElement = tagName => ({ tagName, appendChild: () => {}, setAttribute: () => {}, offsetHeight: 10 });
  globalThis.document = { createElement };

  const children = [];
  const contentElement = {
    children,
    parentElement: null,
    appendChild: child => children.push(child),
    removeChild: child => children.splice(children.indexOf(child), 1),
    get firstChild() {
      return children[0];
    },
    get lastChild() {
      return children.at(-1);
    },
  };
  const scrollElement = {
    scrollTop: 0,
    addEventListener: () => {},
    removeEventListener: () => {},
  };
  const rows = [{ tagName: 'li', props: { className: 'row' } }];

  const virtualScroll = new VirtualScroll({ rows, scrollEl: scrollElement, contentEl: contentElement, callback: () => {} });
  assert.equal(Object.getPrototypeOf(virtualScroll.cache), null);

  virtualScroll.reset(rows);
  assert.equal(Object.getPrototypeOf(virtualScroll.cache), null);
});

test('options treat special names as own data without changing their prototype', () => {
  const maliciousOptions = JSON.parse('{"__proto__":{"polluted":true},"constructor":{"polluted":true},"toString":{"polluted":true}}');
  const instance = new MultipleSelectInstance({ dataset: {} }, maliciousOptions);
  const options = instance.getOptions(false);

  assert.equal(Object.getPrototypeOf(options), Object.prototype);
  assert.equal(
    Object.getOwnPropertyDescriptor(options, '__proto__')?.value,
    Object.getOwnPropertyDescriptor(maliciousOptions, '__proto__')?.value,
  );
  assert.equal(Object.prototype.polluted, undefined);
  assert.equal(Object.polluted, undefined);
  assert.equal(Object.prototype.toString.polluted, undefined);
});

test('refreshOptions cannot replace the options prototype', () => {
  const instance = new MultipleSelectInstance({ dataset: {} });
  instance.destroy = () => {};
  instance.init = () => {};

  const maliciousOptions = JSON.parse('{"__proto__":{"polluted":true}}');
  instance.refreshOptions(maliciousOptions);
  const options = instance.getOptions(false);

  assert.equal(Object.getPrototypeOf(options), Object.prototype);
  assert.equal(
    Object.getOwnPropertyDescriptor(options, '__proto__')?.value,
    Object.getOwnPropertyDescriptor(maliciousOptions, '__proto__')?.value,
  );
  assert.equal(Object.prototype.polluted, undefined);
});

test('locale lookup ignores inherited option and registry properties', () => {
  const localeName = 'polluted-locale';
  const pollutedLocale = {
    formatSelectAll: () => 'polluted',
  };
  Object.prototype.locales = { [localeName]: pollutedLocale };

  try {
    const instance = new MultipleSelectInstance({ dataset: {} }, { locale: localeName });
    assert.throws(() => instance.initLocale(), /invalid locales/);
  } finally {
    delete Object.prototype.locales;
  }

  const instance = new MultipleSelectInstance({ dataset: {} }, { locale: localeName });
  instance.locales = Object.create({ [localeName]: pollutedLocale });
  assert.throws(() => instance.initLocale(), /invalid locales/);
});
