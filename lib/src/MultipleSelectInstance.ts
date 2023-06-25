/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */
import Constants from './constants';
import { compareObjects, deepCopy, findByParam, removeDiacritics, removeUndefined, setDataKeys, stripScripts } from './utils';
import {
  calculateAvailableSpace,
  createDomElement,
  findParent,
  getElementOffset,
  getElementSize,
  insertAfter,
  toggleElement,
} from './utils/domUtils';
import type { HtmlElementPosition } from './utils/domUtils';
import type { MultipleSelectOption } from './interfaces/multipleSelectOption.interface';
import type { MultipleSelectLocales, OptGroupRowData, OptionDataObject, OptionRowData } from './interfaces';
import { BindingEventService, VirtualScroll } from './services';

export class MultipleSelectInstance {
  protected _bindEventService: BindingEventService;
  protected allSelected = false;
  protected fromHtml = false;
  protected choiceElm!: HTMLButtonElement;
  protected closeElm?: HTMLElement | null;
  protected filterText = '';
  protected updateData: any[] = [];
  protected data?: Array<OptionRowData | OptGroupRowData> = [];
  protected dataTotal?: any;
  protected dropElm!: HTMLDivElement;
  protected okButtonElm?: HTMLButtonElement;
  protected filterParentElm?: HTMLDivElement | null;
  protected ulElm?: HTMLUListElement | null;
  protected parentElm!: HTMLDivElement;
  protected labelElm?: HTMLLabelElement | null;
  protected selectAllParentElm?: HTMLDivElement | null;
  protected selectAllElm?: HTMLInputElement | null;
  protected searchInputElm?: HTMLInputElement | null;
  protected selectGroupElms?: NodeListOf<HTMLInputElement>;
  protected selectItemElms?: NodeListOf<HTMLInputElement>;
  protected disableItemElms?: NodeListOf<HTMLInputElement>;
  protected noResultsElm?: HTMLDivElement | null;
  protected options: MultipleSelectOption;
  protected selectAllName = '';
  protected selectGroupName = '';
  protected selectItemName = '';
  protected tabIndex?: string | null;
  protected updateDataStart?: number;
  protected updateDataEnd?: number;
  protected virtualScroll?: VirtualScroll | null;
  locales: MultipleSelectLocales = {};

  constructor(
    protected elm: HTMLSelectElement,
    options?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>
  ) {
    this.options = Object.assign({}, Constants.DEFAULTS, this.elm.dataset, options) as MultipleSelectOption;
    this._bindEventService = new BindingEventService({ distinctEvent: true });
  }

  init() {
    this.initLocale();
    this.initContainer();
    this.initData();
    this.initSelected(true);
    this.initFilter();
    this.initDrop();
    this.initView();
    this.options.onAfterCreate();
  }

  /**
   * destroy the element, if a hard destroy is enabled then we'll also nullify it on the multipleSelect instance array.
   * When a soft destroy is called, we'll only remove it from the DOM but we'll keep all multipleSelect instances
   */
  destroy(hardDestroy = true) {
    if (this.parentElm) {
      this.options.onDestroy({ hardDestroy });
      if (hardDestroy) {
        this.options.onHardDestroy();
      }
      this.elm.before(this.parentElm);
      this.elm.classList.remove('ms-offscreen');
      this._bindEventService.unbindAll();

      if (this.tabIndex) {
        this.elm.tabIndex = +this.tabIndex;
      }

      this.virtualScroll?.destroy();
      this.dropElm?.remove();
      this.parentElm.parentNode?.removeChild(this.parentElm);

      if (this.fromHtml) {
        delete this.options.data;
        this.fromHtml = false;
      }
      this.options.onAfterDestroy({ hardDestroy });

      // on a hard destroy, we will also nullify all variables & call event so that _multipleSelect can also nullify its own instance
      if (hardDestroy) {
        this.options.onAfterHardDestroy?.();
        Object.keys(this.options).forEach((o) => delete (this as any)[o]);
      }
    }
  }

  protected initLocale() {
    if (this.options.locale) {
      const locales = window.multipleSelect.locales;
      const parts = this.options.locale.split(/-|_/);

      parts[0] = parts[0].toLowerCase();
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase();
      }

      if (locales[this.options.locale]) {
        Object.assign(this.options, locales[this.options.locale]);
      } else if (locales[parts.join('-')]) {
        Object.assign(this.options, locales[parts.join('-')]);
      } else if (locales[parts[0]]) {
        Object.assign(this.options, locales[parts[0]]);
      } else {
        throw new Error(
          `[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`
        );
      }
    }
  }

  protected initContainer() {
    const name = this.elm.getAttribute('name') || this.options.name || '';

    if (this.options.classes) {
      this.elm.classList.add(this.options.classes);
    }
    if (this.options.classPrefix) {
      this.elm.classList.add(this.options.classPrefix);

      if (this.options.size) {
        this.elm.classList.add(`${this.options.classPrefix}-${this.options.size}`);
      }
    }

    // hide select element
    this.elm.style.display = 'none';

    // label element
    this.labelElm = this.elm.closest('label');
    if (!this.labelElm && this.elm.id) {
      this.labelElm = document.createElement('label');
      this.labelElm.htmlFor = this.elm.id;
    }
    if (this.labelElm?.querySelector('input')) {
      this.labelElm = null;
    }

    // single or multiple
    if (typeof this.options.single === 'undefined') {
      this.options.single = !this.elm.multiple;
    }

    // restore class and title from select element
    this.parentElm = createDomElement('div', {
      className: `ms-parent ${this.elm.className || ''} ${this.options.classes}`,
      dataset: { test: 'sel' },
    });

    // add tooltip title only when provided
    const parentTitle = this.elm.getAttribute('title') || '';
    if (parentTitle) {
      this.parentElm.title = parentTitle;
    }

    // add placeholder to choice button
    this.options.placeholder = this.options.placeholder || this.elm.getAttribute('placeholder') || '';

    this.tabIndex = this.elm.getAttribute('tabindex');
    let tabIndex = '';
    if (this.tabIndex !== null) {
      this.elm.tabIndex = -1;
      tabIndex = this.tabIndex && `tabindex="${this.tabIndex}"`;
    }

    this.choiceElm = createDomElement('button', { className: 'ms-choice', type: 'button' }, this.parentElm);

    if (isNaN(tabIndex as any)) {
      this.choiceElm.tabIndex = +tabIndex;
    }

    this.choiceElm.appendChild(createDomElement('span', { className: 'ms-placeholder', textContent: this.options.placeholder }));

    if (this.options.showClear) {
      this.choiceElm.appendChild(createDomElement('div', { className: 'icon-close' }));
    }

    this.choiceElm.appendChild(createDomElement('div', { className: 'icon-caret' }));

    // default position is bottom
    this.dropElm = createDomElement('div', { className: `ms-drop ${this.options.position}` }, this.parentElm);

    // add data-name attribute when name option is defined
    if (name) {
      this.dropElm.dataset.name = name;
    }

    // add [data-test="name"] attribute to both ms-parent & ms-drop
    const dataTest = this.elm.getAttribute('data-test') || this.options.dataTest;
    if (dataTest) {
      this.parentElm.dataset.test = dataTest;
      this.dropElm.dataset.test = dataTest;
    }

    this.closeElm = this.choiceElm.querySelector('.icon-close');

    if (this.options.dropWidth) {
      this.dropElm.style.width =
        typeof this.options.dropWidth === 'string' ? this.options.dropWidth : `${this.options.dropWidth}px`;
    }

    insertAfter(this.elm, this.parentElm);

    if (this.elm.disabled) {
      this.choiceElm.classList.add('disabled');
    }

    this.selectAllName = `data-name="selectAll${name}"`;
    this.selectGroupName = `data-name="selectGroup${name}"`;
    this.selectItemName = `data-name="selectItem${name}"`;

    if (!this.options.keepOpen) {
      this._bindEventService.unbind(document.body, 'click');
      this._bindEventService.bind(document.body, 'click', ((e: MouseEvent & { target: HTMLElement }) => {
        if (e.target === this.choiceElm || findParent(e.target, '.ms-choice') === this.choiceElm) {
          return;
        }

        if (
          (e.target === this.dropElm || (findParent(e.target, '.ms-drop') !== this.dropElm && e.target !== this.elm)) &&
          this.options.isOpen
        ) {
          this.close();
        }
      }) as EventListener);
    }
  }

  protected initData() {
    const data: Array<OptionRowData> = [];

    if (this.options.data) {
      if (Array.isArray(this.options.data)) {
        this.data = this.options.data.map((it: any) => {
          if (typeof it === 'string' || typeof it === 'number') {
            return {
              text: it,
              value: it,
            };
          }
          return it;
        });
      } else if (typeof this.options.data === 'object') {
        for (const [value, text] of Object.entries(this.options.data as OptionDataObject)) {
          data.push({
            value,
            text: `${text}`,
          });
        }
        this.data = data;
      }
    } else {
      this.elm.childNodes.forEach((elm) => {
        const row = this.initRow(elm as HTMLOptionElement);
        if (row) {
          data.push(this.initRow(elm as HTMLOptionElement));
        }
      });

      this.options.data = data;
      this.data = data;
      this.fromHtml = true;
    }

    this.dataTotal = setDataKeys(this.data || []);
  }

  protected initRow(elm: HTMLOptionElement, groupDisabled?: boolean) {
    const row: any = {};
    if (elm.tagName?.toLowerCase() === 'option') {
      row.type = 'option';
      row.text = this.options.textTemplate(elm);
      row.value = elm.value;
      row.visible = true;
      row.selected = !!elm.selected;
      row.disabled = groupDisabled || elm.disabled;
      row.classes = elm.getAttribute('class') || '';
      row.title = elm.getAttribute('title') || '';

      if (elm.dataset.value) {
        row._value = elm.dataset.value; // value for object
      }
      if (Object.keys(elm.dataset).length) {
        row._data = elm.dataset;

        if (row._data.divider) {
          row.divider = row._data.divider;
        }
      }

      return row;
    }

    if (elm.tagName?.toLowerCase() === 'optgroup') {
      row.type = 'optgroup';
      row.label = this.options.labelTemplate(elm);
      row.visible = true;
      row.selected = !!elm.selected;
      row.disabled = elm.disabled;
      (row as OptGroupRowData).children = [];
      if (Object.keys(elm.dataset).length) {
        row._data = elm.dataset;
      }

      elm.childNodes.forEach((childNode) => {
        (row as OptGroupRowData).children.push(this.initRow(childNode as HTMLOptionElement, row.disabled));
      });

      return row;
    }

    return null;
  }

  protected initDrop() {
    this.initList();
    this.update(true);

    if (this.options.isOpen) {
      this.open(10);
    }

    if (this.options.openOnHover && this.parentElm) {
      this._bindEventService.bind(this.parentElm, 'mouseover', () => this.open(null));
      this._bindEventService.bind(this.parentElm, 'mouseout', () => this.close());
    }
  }

  protected initFilter() {
    this.filterText = '';

    if (this.options.filter || !this.options.filterByDataLength) {
      return;
    }

    let length = 0;
    for (const option of this.data || []) {
      if ((option as OptGroupRowData).type === 'optgroup') {
        length += (option as OptGroupRowData).children.length;
      } else {
        length += 1;
      }
    }
    this.options.filter = length > this.options.filterByDataLength;
  }

  protected initList() {
    if (this.options.filter) {
      this.filterParentElm = createDomElement('div', { className: 'ms-search' }, this.dropElm);
      this.filterParentElm.appendChild(
        createDomElement('input', {
          autocomplete: 'off',
          autocapitalize: 'off',
          spellcheck: false,
          type: 'text',
          placeholder: this.options.filterPlaceholder || '🔎︎',
        })
      );
    }

    if (this.options.selectAll && !this.options.single) {
      const selectName = this.elm.getAttribute('name') || this.options.name || '';
      this.selectAllParentElm = createDomElement('div', { className: 'ms-select-all' });
      const saLabelElm = document.createElement('label');
      createDomElement(
        'input',
        { type: 'checkbox', checked: this.allSelected, dataset: { name: `selectAll${selectName}` } },
        saLabelElm
      );
      saLabelElm.appendChild(createDomElement('span', { textContent: this.formatSelectAll() }));
      this.selectAllParentElm.appendChild(saLabelElm);
      this.dropElm.appendChild(this.selectAllParentElm);
    }

    this.ulElm = document.createElement('ul');
    this.dropElm.appendChild(this.ulElm);

    if (this.options.showOkButton && !this.options.single) {
      this.okButtonElm = createDomElement(
        'button',
        { className: 'ms-ok-button', type: 'button', textContent: this.formatOkButton() },
        this.dropElm
      );
    }

    this.initListItems();
  }

  protected initListItems() {
    const rows = this.getListRows();
    let offset = 0;

    if (this.options.selectAll && !this.options.single) {
      offset = -1;
    }

    if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
      this.virtualScroll?.destroy();

      const dropVisible = this.dropElm.style.display !== 'none';
      if (!dropVisible) {
        this.dropElm.style.left = '-10000';
        this.dropElm.style.display = 'block';
      }

      const updateDataOffset = () => {
        if (this.virtualScroll) {
          this.updateDataStart = this.virtualScroll.dataStart + offset;
          this.updateDataEnd = this.virtualScroll.dataEnd + offset;
          if (this.updateDataStart < 0) {
            this.updateDataStart = 0;
          }
          if (this.updateDataEnd > (this.data?.length ?? 0)) {
            this.updateDataEnd = this.data?.length ?? 0;
          }
        }
      };

      if (this.ulElm) {
        this.virtualScroll = new VirtualScroll({
          rows,
          scrollEl: this.ulElm,
          contentEl: this.ulElm,
          sanitizer: this.options.sanitizer,
          callback: () => {
            updateDataOffset();
            this.events();
          },
        });
      }

      updateDataOffset();

      if (!dropVisible) {
        this.dropElm.style.left = '0';
        this.dropElm.style.display = 'none';
      }
    } else {
      if (this.ulElm) {
        this.ulElm.innerHTML = this.options.sanitizer ? this.options.sanitizer(rows.join('')) : rows.join('');
      }
      this.updateDataStart = 0;
      this.updateDataEnd = this.updateData.length;
      this.virtualScroll = null;
    }
    this.events();
  }

  protected getListRows() {
    const rows = [];

    this.updateData = [];
    this.data?.forEach((row) => {
      rows.push(...this.initListItem(row));
    });

    rows.push(`<li class="ms-no-results">${this.formatNoMatchesFound()}</li>`);

    return rows;
  }

  protected initListItem(row: any, level = 0) {
    const title = row?.title ? `title="${row.title}"` : '';
    const multiple = this.options.multiple ? 'multiple' : '';
    const type = this.options.single ? 'radio' : 'checkbox';
    let classes = '';

    if (!row?.visible) {
      return [];
    }

    this.updateData.push(row);

    if (this.options.single && !this.options.singleRadio) {
      classes = 'hide-radio ';
    }

    if (row.selected) {
      classes += 'selected ';
    }

    if (row.type === 'optgroup') {
      const customStyle = this.options.styler(row);
      const style = customStyle ? `style="${customStyle}"` : '';
      const html = [];
      const group =
        this.options.hideOptgroupCheckboxes || this.options.single
          ? `<span ${this.selectGroupName} data-key="${row._key}"></span>`
          : `<input type="checkbox"
          ${this.selectGroupName}
          data-key="${row._key}"
          ${row.selected ? ' checked="checked"' : ''}
          ${row.disabled ? ' disabled="disabled"' : ''}
        >`;

      if (!classes.includes('hide-radio') && (this.options.hideOptgroupCheckboxes || this.options.single)) {
        classes += 'hide-radio ';
      }

      html.push(`
        <li class="${`group ${classes}`.trim()}" ${style}>
        <label class="optgroup${this.options.single || row.disabled ? ' disabled' : ''}">
        ${group}${row.label}
        </label>
        </li>
      `);

      (row as OptGroupRowData).children.forEach((child: any) => {
        html.push(...this.initListItem(child, 1));
      });

      return html;
    }

    const customStyle = this.options.styler(row);
    const style = customStyle ? `style="${customStyle}"` : '';
    classes += row.classes || '';

    if (level && this.options.single) {
      classes += `option-level-${level} `;
    }

    if (row.divider) {
      return '<li class="option-divider"/>';
    }

    return [
      `
      <li ${multiple || classes ? `class="${(multiple + classes).trim()}"` : ''} ${title} ${style}>
      <label ${row.disabled ? 'class="disabled"' : ''}>
      <input type="${type}"
        value="${encodeURI(row.value)}"
        data-key="${row._key}"
        ${this.selectItemName}
        ${row.selected ? ' checked="checked"' : ''}
        ${row.disabled ? ' disabled="disabled"' : ''}
      >
      <span>${row.text}</span>
      </label>
      </li>
    `,
    ];
  }

  protected initSelected(ignoreTrigger = false) {
    let selectedTotal = 0;

    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        const selectedCount = (row as OptGroupRowData).children.filter((child) => {
          return child && child.selected && !child.disabled && child.visible;
        }).length;

        if ((row as OptGroupRowData).children.length) {
          row.selected =
            !this.options.single &&
            selectedCount &&
            selectedCount ===
              (row as OptGroupRowData).children.filter(
                (child: any) => child && !child.disabled && child.visible && !child.divider
              ).length;
        }
        selectedTotal += selectedCount;
      } else {
        selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
      }
    }

    this.allSelected =
      this.data?.filter((row: OptionRowData | OptGroupRowData) => {
        return row.selected && !row.disabled && row.visible;
      }).length === this.data?.filter((row) => !row.disabled && row.visible && !row.divider).length;

    if (!ignoreTrigger) {
      if (this.allSelected) {
        this.options.onCheckAll();
      } else if (selectedTotal === 0) {
        this.options.onUncheckAll();
      }
    }
  }

  protected initView() {
    let computedWidth;

    if (window.getComputedStyle) {
      computedWidth = window.getComputedStyle(this.elm).width;

      if (computedWidth === 'auto') {
        computedWidth = getElementSize(this.dropElm, 'outer', 'width') + 20;
      }
    } else {
      computedWidth = getElementSize(this.elm, 'outer', 'width') + 20;
    }

    this.parentElm.style.width = `${this.options.width || computedWidth}px`;
    // this.elm.style.display = 'inline-block';
    this.elm.classList.add('ms-offscreen');
  }

  protected events() {
    this._bindEventService.unbind(this.okButtonElm);
    this._bindEventService.unbind(this.searchInputElm);
    this._bindEventService.unbind(this.selectAllElm);
    this._bindEventService.unbind(this.selectGroupElms);
    this._bindEventService.unbind(this.selectItemElms);
    this._bindEventService.unbind(this.disableItemElms);
    this._bindEventService.unbind(this.noResultsElm);

    this.searchInputElm = this.dropElm.querySelector<HTMLInputElement>('.ms-search input');
    this.selectAllElm = this.dropElm.querySelector<HTMLInputElement>(`input[${this.selectAllName}]`);
    this.selectGroupElms = this.dropElm.querySelectorAll<HTMLInputElement>(
      `input[${this.selectGroupName}],span[${this.selectGroupName}]`
    );
    this.selectItemElms = this.dropElm.querySelectorAll<HTMLInputElement>(`input[${this.selectItemName}]:enabled`);
    this.disableItemElms = this.dropElm.querySelectorAll<HTMLInputElement>(`input[${this.selectItemName}]:disabled`);
    this.noResultsElm = this.dropElm.querySelector<HTMLDivElement>('.ms-no-results');

    const toggleOpen = (e: MouseEvent & { target: HTMLElement }) => {
      e.preventDefault();
      if (e.target.classList.contains('icon-close')) {
        return;
      }
      this[this.options.isOpen ? 'close' : 'open']();
    };

    if (this.labelElm) {
      this._bindEventService.bind(this.labelElm, 'click', ((e: MouseEvent & { target: HTMLElement }) => {
        if (e.target.nodeName.toLowerCase() !== 'label') {
          return;
        }
        toggleOpen(e);
        if (!this.options.filter || !this.options.isOpen) {
          this.focus();
        }
        e.stopPropagation(); // Causes lost focus otherwise
      }) as EventListener);
    }

    this._bindEventService.bind(this.choiceElm, 'click', toggleOpen as EventListener);
    if (this.options.onFocus) {
      this._bindEventService.bind(this.choiceElm, 'focus', this.options.onFocus as EventListener);
    }
    if (this.options.onBlur) {
      this._bindEventService.bind(this.choiceElm, 'blur', this.options.onBlur as EventListener);
    }

    this._bindEventService.bind(this.parentElm, 'keydown', ((e: KeyboardEvent) => {
      // esc key
      if (e.code === 'Escape' && !this.options.keepOpen) {
        this.close();
        this.choiceElm.focus();
      }
    }) as EventListener);

    if (this.closeElm) {
      this._bindEventService.bind(this.closeElm, 'click', ((e: MouseEvent) => {
        e.preventDefault();
        this._checkAll(false, true);
        this.initSelected(false);
        this.updateSelected();
        this.update();
        this.options.onClear();
      }) as EventListener);
    }

    if (this.searchInputElm) {
      this._bindEventService.bind(this.searchInputElm, 'keydown', ((e: KeyboardEvent) => {
        // Ensure shift-tab causes lost focus from filter as with clicking away
        if (e.code === 'Tab' && e.shiftKey) {
          this.close();
        }
      }) as EventListener);

      this._bindEventService.bind(this.searchInputElm, 'keyup', ((e: KeyboardEvent) => {
        // enter or space
        // Avoid selecting/deselecting if no choices made
        if (this.options.filterAcceptOnEnter && ['Enter', 'Space'].includes(e.code) && this.searchInputElm?.value) {
          if (this.options.single) {
            const visibleLiElms: HTMLInputElement[] = [];
            this.selectItemElms?.forEach((selectedElm) => {
              if (selectedElm.closest('li')?.style.display !== 'none') {
                visibleLiElms.push(selectedElm);
              }
            });
            if (visibleLiElms.length) {
              const [selectItemAttrName] = this.selectItemName.split('='); // [data-name="selectItem"], we want "data-name" attribute
              if (visibleLiElms[0].hasAttribute(selectItemAttrName)) {
                this.setSelects([visibleLiElms[0].value]);
              }
            }
          } else {
            this.selectAllElm?.click();
          }
          this.close();
          this.focus();
          return;
        }
        this.filter();
      }) as EventListener);
    }

    if (this.selectAllElm) {
      this._bindEventService.unbind(this.selectAllElm, 'click');
      this._bindEventService.bind(this.selectAllElm, 'click', ((e: MouseEvent & { currentTarget: HTMLInputElement }) => {
        this._checkAll(e.currentTarget?.checked);
      }) as EventListener);
    }

    if (this.okButtonElm) {
      this._bindEventService.unbind(this.okButtonElm, 'click');
      this._bindEventService.bind(this.okButtonElm, 'click', ((e: MouseEvent & { target: HTMLElement }) => {
        toggleOpen(e);
        e.stopPropagation(); // Causes lost focus otherwise
      }) as EventListener);
    }

    this._bindEventService.bind(this.selectGroupElms, 'click', ((e: MouseEvent & { currentTarget: HTMLInputElement }) => {
      const selectElm = e.currentTarget;
      const checked = selectElm.checked;
      const group = findByParam(this.data, '_key', selectElm.dataset.key);

      this._checkGroup(group, checked);
      this.options.onOptgroupClick(
        removeUndefined({
          label: group.label,
          selected: group.selected,
          data: group._data,
          children: group.children.map((child: any) => {
            if (child) {
              return removeUndefined({
                text: child.text,
                value: child.value,
                selected: child.selected,
                disabled: child.disabled,
                data: child._data,
              });
            }
          }),
        })
      );
    }) as EventListener);

    this._bindEventService.bind(this.selectItemElms, 'click', ((e: MouseEvent & { currentTarget: HTMLInputElement }) => {
      const selectElm = e.currentTarget;
      const checked = selectElm.checked;
      const option = findByParam(this.data, '_key', selectElm.dataset.key);

      this._check(option, checked);
      this.options.onClick(
        removeUndefined({
          text: option.text,
          value: option.value,
          selected: option.selected,
          data: option._data,
        })
      );

      if (this.options.single && this.options.isOpen && !this.options.keepOpen) {
        this.close();
      }
    }) as EventListener);
  }

  /**
   * Open the drop method, user could optionally provide a delay in ms to open the drop.
   * The default delay is 0ms (which is 1 CPU cycle) when nothing is provided, to avoid a delay we can pass `-1` or `null`
   * @param {number} [openDelay=0] - provide an optional delay, defaults to 0
   */
  open(openDelay: number | null = 0) {
    if (openDelay !== null && openDelay >= 0) {
      // eslint-disable-next-line prefer-const
      let timer: NodeJS.Timeout | undefined;
      clearTimeout(timer);
      timer = setTimeout(() => this.openDrop(), openDelay);
    } else {
      this.openDrop();
    }
  }

  protected openDrop() {
    if (this.choiceElm?.classList.contains('disabled')) {
      return;
    }
    this.options.isOpen = true;
    this.parentElm.classList.add('ms-parent-open');
    this.choiceElm?.querySelector('div')?.classList.add('open');
    this.dropElm.style.display = 'block';

    if (this.selectAllElm?.parentElement) {
      this.selectAllElm.parentElement.style.display = 'block';
    }

    if (this.noResultsElm) {
      this.noResultsElm.style.display = 'none';
    }

    if (!this.data?.length) {
      if (this.selectAllElm?.parentElement) {
        this.selectAllElm.parentElement.style.display = 'none';
      }
      if (this.noResultsElm) {
        this.noResultsElm.style.display = 'block';
      }
    }

    if (this.options.container) {
      const offset = getElementOffset(this.dropElm);
      let container: HTMLElement;
      if (this.options.container instanceof Node) {
        container = this.options.container as HTMLElement;
      } else if (typeof this.options.container === 'string') {
        // prettier-ignore
        container = this.options.container === 'body'
            ? document.body
            : document.querySelector(this.options.container) as HTMLElement;
      }
      container!.appendChild(this.dropElm);
      this.dropElm.style.top = `${offset?.top ?? 0}px`;
      this.dropElm.style.left = `${offset?.left ?? 0}px`;
      this.dropElm.style.minWidth = 'auto';
      this.dropElm.style.width = `${getElementSize(this.parentElm, 'outer', 'width')}px`;
    }

    const minHeight = this.options.minHeight;
    let maxHeight = this.options.maxHeight;
    if (this.options.maxHeightUnit === 'row') {
      const liElm = this.dropElm.querySelector<HTMLLIElement>('ul>li');
      maxHeight = getElementSize(liElm!, 'outer', 'height') * this.options.maxHeight;
    }
    const ulElm = this.dropElm.querySelector('ul');
    if (ulElm) {
      if (minHeight) {
        ulElm.style.minHeight = `${minHeight}px`;
      }
      ulElm.style.maxHeight = `${maxHeight}px`;
    }
    const multElms = this.dropElm.querySelectorAll<HTMLDivElement>('.multiple');
    multElms.forEach((multElm) => (multElm.style.width = `${this.options.multipleWidth}px`));

    if (this.data?.length && this.options.filter) {
      if (this.searchInputElm) {
        this.searchInputElm.value = '';
        this.searchInputElm.focus();
      }
      this.filter(true);
    }

    if (this.options.autoAdjustDropWidthByTextSize) {
      this.adjustDropWidthByText();
    }

    let newPosition = this.options.position;
    if (this.options.autoAdjustDropHeight) {
      // if autoAdjustDropPosition is enable, we 1st need to see what position the drop will be located
      // without necessary toggling it's position just yet, we just want to know the future position for calculation
      if (this.options.autoAdjustDropPosition) {
        const { bottom: spaceBottom, top: spaceTop } = calculateAvailableSpace(this.dropElm);
        const msDropHeight = this.dropElm.getBoundingClientRect().height;
        newPosition = spaceBottom < msDropHeight && spaceTop > spaceBottom ? 'top' : 'bottom';
      }

      // now that we know which drop position will be used, let's adjust the drop height
      this.adjustDropHeight(newPosition);
    }

    if (this.options.autoAdjustDropPosition) {
      this.adjustDropPosition(true);
    }

    this.options.onOpen();
  }

  close() {
    this.options.isOpen = false;
    this.parentElm.classList.remove('ms-parent-open');
    this.choiceElm?.querySelector('div')?.classList.remove('open');
    this.dropElm.style.display = 'none';

    if (this.options.container) {
      this.parentElm.appendChild(this.dropElm);
      this.dropElm.style.top = 'auto';
      this.dropElm.style.left = 'auto';
    }
    this.options.onClose();
  }

  protected update(ignoreTrigger = false) {
    const valueSelects = this.getSelects();
    let textSelects = this.getSelects('text');

    if (this.options.displayValues) {
      textSelects = valueSelects;
    }

    const spanElm = this.choiceElm?.querySelector<HTMLSpanElement>('span');
    const sl = valueSelects.length;
    let html = null;

    const getSelectOptionHtml = () => {
      if (this.options.useSelectOptionLabel || this.options.useSelectOptionLabelToHtml) {
        const labels = valueSelects.join(this.options.displayDelimiter);
        return this.options.useSelectOptionLabelToHtml ? stripScripts(labels) : labels;
      }
      return textSelects.join(this.options.displayDelimiter);
    };

    if (spanElm) {
      if (sl === 0) {
        const placeholder = this.options.placeholder || '';
        spanElm.classList.add('ms-placeholder');
        spanElm.innerHTML = this.options.sanitizer ? this.options.sanitizer(placeholder) : placeholder;
      } else if (sl < this.options.minimumCountSelected) {
        html = getSelectOptionHtml();
      } else if (this.formatAllSelected() && sl === this.dataTotal) {
        html = this.formatAllSelected();
      } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
        html = `${textSelects.slice(0, this.options.minimumCountSelected).join(this.options.displayDelimiter)}...`;
      } else if (this.formatCountSelected(sl, this.dataTotal) && sl > this.options.minimumCountSelected) {
        html = this.formatCountSelected(sl, this.dataTotal);
      } else {
        html = getSelectOptionHtml();
      }
      if (html !== null) {
        spanElm?.classList.remove('ms-placeholder');
        if (this.options.renderOptionLabelAsHtml || this.options.useSelectOptionLabelToHtml) {
          spanElm.innerHTML = this.options.sanitizer ? this.options.sanitizer(html) : html;
        } else {
          spanElm.textContent = html;
        }
      }

      if (this.options.displayTitle || this.options.addTitle) {
        if (this.options.addTitle) {
          console.warn('[Multiple-Select-Vanilla] Please note that the `addTitle` option was replaced with `displayTitle`.');
        }
        const selectType = this.options.useSelectOptionLabel || this.options.useSelectOptionLabelToHtml ? 'value' : 'text';
        spanElm.title = this.getSelects(selectType).join(this.options.displayDelimiter);
      }
    }

    // set selects to select
    const selectedValues = this.getSelects().join('');
    if (this.options.single) {
      this.elm.value = selectedValues;
    } else {
      // when multiple values could be set, so we need to loop through each
      const selectOptions = this.elm.options;
      for (let i = 0, ln = selectOptions.length; i < ln; i++) {
        const isSelected = selectedValues.indexOf(selectOptions[i].value) >= 0;
        selectOptions[i].selected = isSelected;
      }
    }

    // trigger <select> change event
    if (!ignoreTrigger) {
      this.elm.dispatchEvent(new Event('change'));
    }
  }

  protected updateSelected() {
    for (let i = this.updateDataStart!; i < this.updateDataEnd!; i++) {
      const row = this.updateData[i];
      const inputElm = this.dropElm.querySelector<HTMLInputElement>(`input[data-key=${row._key}]`);
      if (inputElm) {
        inputElm.checked = row.selected;
        const closestLiElm = inputElm.closest('li');
        if (closestLiElm) {
          if (row.selected && !closestLiElm.classList.contains('selected')) {
            closestLiElm.classList.add('selected');
          } else if (!row.selected) {
            closestLiElm.classList.remove('selected');
          }
        }
      }
    }

    const noResult = this.data?.filter((row) => row.visible).length === 0;

    if (this.selectAllElm) {
      this.selectAllElm.checked = this.allSelected;
      toggleElement(this.selectAllElm.closest('li'), !noResult);
    }

    toggleElement(this.noResultsElm, noResult);

    if (this.virtualScroll) {
      this.virtualScroll.rows = this.getListRows();
    }
  }

  getData() {
    return this.options.data;
  }

  /**
   * Get current options, by default we'll return an immutable deep copy of the options to avoid conflicting with the lib
   * but in rare occasion we might want to the return the actual, but mutable, options
   * @param {Boolean} [returnDeepCopy]
   */
  getOptions(returnDeepCopy = true) {
    // deep copy and remove data
    const options = Object.assign({}, this.options);
    delete options.data;

    return returnDeepCopy ? deepCopy(options) : this.options;
  }

  refreshOptions(options: Partial<MultipleSelectOption>) {
    // If the objects are equivalent then avoid the call of destroy / init methods
    if (compareObjects(this.options, options, true)) {
      return;
    }
    this.options = Object.assign(this.options, options);
    this.destroy(false);
    this.init();
  }

  getDropElement() {
    return this.dropElm;
  }

  getParentElement() {
    return this.parentElm;
  }

  // value html, or text, default: 'value'
  getSelects(type = 'value') {
    const values = [];
    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        const selectedChildren = (row as OptGroupRowData).children.filter((child) => child?.selected);
        if (!selectedChildren.length) {
          continue;
        }

        if (type === 'value' || this.options.single) {
          values.push(
            ...selectedChildren.map((child: any) => {
              return type === 'value' ? child._value || child[type] : child[type];
            })
          );
        } else {
          const value = [];
          value.push('[');
          value.push((row as OptGroupRowData).label);
          value.push(`: ${selectedChildren.map((child: any) => child[type]).join(', ')}`);
          value.push(']');
          values.push(value.join(''));
        }
      } else if (row.selected) {
        values.push(type === 'value' ? row._value || (row as OptionRowData)[type] : (row as any)[type]);
      }
    }
    return values;
  }

  setSelects(values: any[], type = 'value', ignoreTrigger = false) {
    console.log('setSelects', values, type);
    let hasChanged = false;
    const _setSelects = (rows: any[]) => {
      for (const row of rows) {
        let selected = false;
        if (type === 'text') {
          const divElm = document.createElement('div');
          divElm.innerHTML = row.text;
          selected = values.includes(divElm.textContent?.trim() ?? '');
        } else {
          selected = values.includes(row._value || row.value);
          if (!selected && row.value === `${+row.value}`) {
            selected = values.includes(+row.value);
          }
        }
        if (row.selected !== selected) {
          hasChanged = true;
        }
        row.selected = selected;
      }
    };

    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        _setSelects((row as OptGroupRowData).children);
      } else {
        _setSelects([row]);
      }
    }

    if (hasChanged) {
      this.initSelected(ignoreTrigger);
      this.updateSelected();
      this.update(ignoreTrigger);
    }
  }

  enable() {
    this.choiceElm?.classList.remove('disabled');
  }

  disable() {
    this.choiceElm?.classList.add('disabled');
  }

  check(value: any) {
    const option = findByParam(this.data, 'value', value);
    if (!option) {
      return;
    }
    this._check(option, true);
  }

  uncheck(value: any) {
    const option = findByParam(this.data, 'value', value);
    if (!option) {
      return;
    }
    this._check(option, false);
  }

  protected _check(option: any, checked: boolean) {
    if (this.options.single) {
      this._checkAll(false, true);
    }
    option.selected = checked;
    this.initSelected();
    this.updateSelected();
    this.update();
  }

  checkAll() {
    this._checkAll(true);
  }

  uncheckAll() {
    this._checkAll(false);
  }

  protected _checkAll(checked: boolean, ignoreUpdate?: boolean) {
    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        this._checkGroup(row, checked, true);
      } else if (!row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
        row.selected = checked;
      }
    }

    if (!ignoreUpdate) {
      this.initSelected();
      this.updateSelected();
      this.update();
    }
  }

  protected _checkGroup(group: any, checked: boolean, ignoreUpdate?: boolean) {
    group.selected = checked;
    group.children.forEach((row: any) => {
      if (row && !row.disabled && !row.divider && (ignoreUpdate || row.visible)) {
        row.selected = checked;
      }
    });

    if (!ignoreUpdate) {
      this.initSelected();
      this.updateSelected();
      this.update();
    }
  }

  checkInvert() {
    if (this.options.single) {
      return;
    }
    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        for (const child of (row as OptGroupRowData).children) {
          if (child) {
            if (!child.divider) {
              child.selected = !child.selected;
            }
          }
        }
      } else if (row && !row.divider) {
        row.selected = !row.selected;
      }
    }
    this.initSelected();
    this.updateSelected();
    this.update();
  }

  focus() {
    this.choiceElm?.focus();
    this.options.onFocus();
  }

  blur() {
    this.choiceElm?.blur();
    this.options.onBlur();
  }

  refresh() {
    this.destroy(false);
    this.init();
  }

  protected filter(ignoreTrigger?: boolean) {
    const originalSearch = this.searchInputElm?.value.trim() ?? '';
    const search = originalSearch.toLowerCase();

    if (this.filterText === search) {
      return;
    }
    this.filterText = search;

    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        if (this.options.filterGroup) {
          const rowLabel = `${(row as OptGroupRowData)?.label ?? ''}`;
          if (row !== undefined && row !== null) {
            const visible = this.options.customFilter({
              label: removeDiacritics(rowLabel.toLowerCase()),
              search: removeDiacritics(search),
              originalLabel: rowLabel,
              originalSearch,
              row,
            });

            row.visible = visible;
            for (const child of (row as OptGroupRowData).children) {
              if (child) {
                child.visible = visible;
              }
            }
          }
        } else {
          for (const child of (row as OptGroupRowData).children) {
            if (child !== undefined && child !== null) {
              const childText = `${(child as OptionRowData)?.text ?? ''}`;
              child.visible = this.options.customFilter({
                text: removeDiacritics(childText.toLowerCase()),
                search: removeDiacritics(search),
                originalText: childText,
                originalSearch,
                row: child,
                parent: row,
              });
            }
          }
          row.visible = (row as OptGroupRowData).children.filter((child: any) => child?.visible).length > 0;
        }
      } else {
        const rowText = `${(row as OptionRowData)?.text ?? ''}`;
        row.visible = this.options.customFilter({
          text: removeDiacritics(rowText.toLowerCase()),
          search: removeDiacritics(search),
          originalText: rowText,
          originalSearch,
          row,
        });
      }
    }

    this.initListItems();
    this.initSelected(ignoreTrigger);
    this.updateSelected();

    if (!ignoreTrigger) {
      this.options.onFilter(search);
    }
  }

  protected adjustDropHeight(position: 'bottom' | 'top') {
    const isDropPositionBottom = position !== 'top';
    const filterHeight = this.filterParentElm?.getBoundingClientRect().height ?? 0;
    const okButtonHeight = this.okButtonElm?.getBoundingClientRect().height ?? 0;
    const selectAllHeight = this.options.single ? 0 : this.selectAllParentElm?.getBoundingClientRect().height ?? 0;
    const msDropMinimalHeight = filterHeight + okButtonHeight + selectAllHeight + 5;

    const { bottom: spaceBottom, top: spaceTop } = calculateAvailableSpace(this.parentElm);

    let newHeight = this.options.maxHeight;
    if (isDropPositionBottom) {
      newHeight = spaceBottom - msDropMinimalHeight - this.options.adjustedHeightPadding;
    } else {
      newHeight = spaceTop - msDropMinimalHeight - this.options.adjustedHeightPadding;
    }

    if (!this.options.maxHeight || (this.options.maxHeight && newHeight < this.options.maxHeight)) {
      const ulElm = this.dropElm?.querySelector('ul');
      if (ulElm) {
        ulElm.style.maxHeight = `${newHeight}px`;
      }
      return true; // return true, since we adjusted the drop height
    }

    // if we reached here, then we can assume that we didn't adjust the drop height
    return false;
  }

  protected adjustDropPosition(forceToggle: boolean) {
    let position = 'bottom';

    if (this.dropElm && this.parentElm) {
      const { bottom: spaceBottom, top: spaceTop } = calculateAvailableSpace(this.dropElm);
      const { top: selectOffsetTop, left: selectOffsetLeft } = getElementOffset(this.parentElm) as HtmlElementPosition;
      const msDropHeight = this.dropElm.getBoundingClientRect().height;
      const msDropWidth = this.dropElm.getBoundingClientRect().width;
      const windowWidth = document.body.offsetWidth || window.innerWidth;
      const selectParentWidth = this.parentElm.getBoundingClientRect().width;

      // find the optimal position of the drop (always choose "bottom" as the default to use)
      if (spaceBottom > msDropHeight) {
        position = 'bottom';
      } else if (msDropHeight > spaceBottom && spaceTop > spaceBottom) {
        if (this.options.container) {
          // when using a container, we need to offset the drop ourself
          // and also make sure there's space available on top before doing so
          let newOffsetTop = selectOffsetTop - msDropHeight;
          if (newOffsetTop < 0) {
            newOffsetTop = 0;
          }

          if (newOffsetTop > 0 || forceToggle) {
            position = 'top';
            this.dropElm.style.top = `${newOffsetTop < 0 ? 0 : newOffsetTop}px`;
          }
        } else {
          // without container, we simply need to add the "top" class to the drop
          position = 'top';
          this.dropElm.classList.add(position);
        }
        this.dropElm.classList.remove('bottom');
      }

      // auto-adjust left/right position
      if (windowWidth - msDropWidth < selectOffsetLeft) {
        const newLeftOffset = selectOffsetLeft - (msDropWidth - selectParentWidth);
        this.dropElm.style.left = `${newLeftOffset}px`;
      }
    }

    return position;
  }

  protected adjustDropWidthByText() {
    const parentWidth = this.parentElm.scrollWidth;

    // keep the dropWidth/width as reference, if our new calculated width is below then we will re-adjust (else do nothing)
    let currentDefinedWidth: number | string = parentWidth;
    if (this.options.dropWidth || this.options.width) {
      currentDefinedWidth = this.options.dropWidth || this.options.width || 0;
    }

    // calculate the "Select All" element width, this text is configurable which is why we recalculate every time
    const selectAllSpanElm = this.dropElm.querySelector<HTMLSpanElement>('.ms-select-all span');
    const dropUlElm = this.dropElm.querySelector('ul') as HTMLUListElement;

    const liPadding = 26; // there are multiple padding involved, let's fix it at 26px

    const selectAllElmWidth = selectAllSpanElm?.clientWidth ?? 0 + liPadding;
    const hasScrollbar = dropUlElm.scrollHeight > dropUlElm.clientHeight;
    const scrollbarWidth = hasScrollbar ? this.getScrollbarWidth() : 0;
    let contentWidth = 0;

    this.dropElm.querySelectorAll('li label').forEach((elm) => {
      if (elm.scrollWidth > contentWidth) {
        contentWidth = elm.scrollWidth;
      }
    });

    // add a padding & include the browser scrollbar width
    contentWidth += liPadding + scrollbarWidth;

    // make sure the new calculated width is wide enough to include the "Select All" text (this text is configurable)
    if (contentWidth < selectAllElmWidth) {
      contentWidth = selectAllElmWidth;
    }

    // if a maxWidth is defined, make sure our new calculate width is not over the maxWidth
    if (this.options.maxWidth && contentWidth > this.options.maxWidth) {
      contentWidth = this.options.maxWidth;
    }

    // if a minWidth is defined, make sure our new calculate width is not below the minWidth
    if (this.options.minWidth && contentWidth < this.options.minWidth) {
      contentWidth = this.options.minWidth;
    }

    // finally re-adjust the drop to the new calculated width when necessary
    if (currentDefinedWidth === '100%' || +currentDefinedWidth < contentWidth) {
      this.dropElm.style.width = `${contentWidth}px`;
      this.dropElm.style.maxWidth = `${contentWidth}px`;
    }
  }

  getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    // outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode?.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  // five text formatters, it could be string patterns or formatter callback functions

  formatAllSelected() {
    return this.options.allSelectedText || this.options.formatAllSelected();
  }

  formatCountSelected(selectedCount: number, totalCount: number) {
    if (this.options.countSelectedText) {
      return this.options.countSelectedText.replace('#', `${selectedCount}`).replace('%', `${totalCount}`);
    }
    return this.options.formatCountSelected(selectedCount, totalCount);
  }

  formatNoMatchesFound() {
    return this.options.noMatchesFoundText || this.options.formatNoMatchesFound();
  }

  formatOkButton() {
    return this.options.okButtonText || this.options.formatOkButton();
  }

  formatSelectAll() {
    return this.options.selectAllText || this.options.formatSelectAll();
  }
}
