/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */
import Constants from './constants.js';
import type { HtmlStruct, OptGroupRowData, OptionDataObject, OptionRowData } from './models/interfaces.js';
import type { MultipleSelectLocales } from './models/locale.interface.js';
import type { CloseReason, MultipleSelectOption } from './models/multipleSelectOption.interface.js';
import { BindingEventService } from './services/binding-event.service.js';
import { VirtualScroll } from './services/virtual-scroll.js';
import { compareObjects, deepCopy, findByParam, removeDiacritics, removeUndefined, setDataKeys, stripScripts } from './utils/utils.js';
import {
  calculateAvailableSpace,
  classNameToList,
  convertItemRowToHtml,
  createDomElement,
  emptyElement,
  findParent,
  getElementOffset,
  getElementSize,
  insertAfter,
  toggleElement,
} from './utils/domUtils.js';
import type { HtmlElementPosition } from './utils/domUtils.js';

const OPTIONS_LIST_SELECTOR = '.ms-select-all, ul li[data-key]';
const OPTIONS_HIGHLIGHT_LIST_SELECTOR = '.ms-select-all.highlighted, ul li[data-key].highlighted';

export class MultipleSelectInstance {
  protected _bindEventService: BindingEventService;
  protected isAllSelected = false;
  protected isPartiallyAllSelected = false;
  protected fromHtml = false;
  protected choiceElm!: HTMLButtonElement;
  protected selectClearElm?: HTMLDivElement | null;
  protected closeElm?: HTMLElement | null;
  protected clearSearchIconElm?: HTMLElement | null;
  protected filterText = '';
  protected updateData: any[] = [];
  protected data?: Array<OptionRowData | OptGroupRowData> = [];
  protected dataTotal?: any;
  protected dropElm?: HTMLDivElement;
  protected okButtonElm?: HTMLButtonElement;
  protected filterParentElm?: HTMLDivElement | null;
  protected lastFocusedItemKey = '';
  protected lastMouseOverPosition = '';
  protected ulElm?: HTMLUListElement | null;
  protected parentElm!: HTMLDivElement;
  protected labelElm?: HTMLLabelElement | null;
  protected selectAllParentElm?: HTMLDivElement | null;
  protected selectAllElm?: HTMLInputElement | null;
  protected searchInputElm?: HTMLInputElement | null;
  protected selectGroupElms?: NodeListOf<HTMLInputElement>;
  protected selectItemElms?: NodeListOf<HTMLInputElement>;
  protected noResultsElm?: HTMLDivElement | null;
  protected options: MultipleSelectOption;
  protected selectAllName = '';
  protected selectGroupName = '';
  protected selectItemName = '';
  protected scrolledByMouse = false;
  protected openDelayTimer?: number;

  protected updateDataStart?: number;
  protected updateDataEnd?: number;
  protected virtualScroll?: VirtualScroll | null;
  protected _currentHighlightIndex = -1;
  protected _currentSelectedElm?: HTMLLIElement | HTMLDivElement;
  protected isMoveUpRecalcRequired = false;
  locales = {} as MultipleSelectLocales;

  get isRenderAsHtml() {
    return this.options.renderOptionLabelAsHtml || this.options.useSelectOptionLabelToHtml;
  }

  constructor(
    protected elm: HTMLSelectElement,
    options?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>,
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
    if (this.elm && this.parentElm) {
      this.options.onDestroy({ hardDestroy });
      if (hardDestroy) {
        this.options.onHardDestroy();
      }
      if (this.elm.parentElement && this.parentElm.parentElement) {
        this.elm.parentElement.insertBefore(this.elm, this.parentElm.parentElement!.firstChild);
      }
      this.elm.classList.remove('ms-offscreen');
      this._bindEventService.unbindAll();

      this.virtualScroll?.destroy();
      this.dropElm?.remove();
      this.dropElm = undefined;
      this.parentElm.parentNode?.removeChild(this.parentElm);

      if (this.fromHtml) {
        delete this.options.data;
        this.fromHtml = false;
      }
      this.options.onAfterDestroy({ hardDestroy });

      // on a hard destroy, we will also nullify all variables & call event so that _multipleSelect can also nullify its own instance
      if (hardDestroy) {
        this.options.onAfterHardDestroy?.();
        Object.keys(this.options).forEach(o => delete (this as any)[o]);
      }
    }
  }

  protected initLocale() {
    if (this.options.locale) {
      if (typeof this.options.locale === 'object') {
        Object.assign(this.options, this.options.locale);
        return;
      }

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
        throw new Error(`[multiple-select-vanilla] invalid locales "${this.options.locale}", make sure to import it before using it`);
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
      className: classNameToList(`ms-parent ${this.elm.className || ''} ${this.options.classes}`).join(' '),
      dataset: { test: 'sel' },
    });

    if (this.options.darkMode) {
      this.parentElm.classList.add('ms-dark-mode');
    }

    // add tooltip title only when provided
    const parentTitle = this.elm.getAttribute('title') || '';
    if (parentTitle) {
      this.parentElm.title = parentTitle;
    }

    // add placeholder to choice button
    this.options.placeholder = this.options.placeholder || this.elm.getAttribute('placeholder') || '';

    this.choiceElm = createDomElement('button', { className: 'ms-choice', type: 'button' }, this.parentElm);

    if (this.options.labelId) {
      this.choiceElm.id = this.options.labelId;
      this.choiceElm.setAttribute('aria-labelledby', this.options.labelId);
    }

    this.choiceElm.appendChild(createDomElement('span', { className: 'ms-placeholder', textContent: this.options.placeholder }));

    if (this.options.showClear) {
      this.selectClearElm = createDomElement('div', { className: 'ms-icon ms-icon-close' });
      this.selectClearElm.style.display = 'none'; // don't show unless filled
      this.choiceElm.appendChild(this.selectClearElm);
    }

    this.choiceElm.appendChild(createDomElement('div', { className: 'ms-icon ms-icon-caret' }));

    // default position is bottom
    this.dropElm = createDomElement('div', { className: `ms-drop ${this.options.position}`, ariaExpanded: 'false' }, this.parentElm);

    if (this.options.darkMode) {
      this.dropElm.classList.add('ms-dark-mode');
    }

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

    this.closeElm = this.choiceElm.querySelector('.ms-icon-close');

    if (this.options.dropWidth) {
      this.dropElm.style.width = typeof this.options.dropWidth === 'string' ? this.options.dropWidth : `${this.options.dropWidth}px`;
    }

    insertAfter(this.elm, this.parentElm);

    if (this.elm.disabled) {
      this.choiceElm.classList.add('disabled');
      this.choiceElm.disabled = true;
    }

    this.selectAllName = `selectAll${name}`;
    this.selectGroupName = `selectGroup${name}`;
    this.selectItemName = `selectItem${name}`;

    if (!this.options.keepOpen) {
      this._bindEventService.unbindAll('body-click');
      this._bindEventService.bind(
        document.body,
        'click',
        ((e: MouseEvent & { target: HTMLElement }) => {
          if (this.getEventTarget(e) === this.choiceElm || findParent(this.getEventTarget(e), '.ms-choice') === this.choiceElm) {
            return;
          }

          if (
            (this.getEventTarget(e) === this.dropElm ||
              (findParent(this.getEventTarget(e), '.ms-drop') !== this.dropElm && this.getEventTarget(e) !== this.elm)) &&
            this.options.isOpen
          ) {
            this.close('body.click');
          }
        }) as EventListener,
        undefined,
        'body-click',
      );
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
      this.elm.childNodes.forEach(elm => {
        const row = this.initRow(elm as HTMLOptionElement);
        if (row) {
          data.push(row as OptionRowData);
        }
      });

      this.options.data = data;
      this.data = data;
      this.fromHtml = true;
    }

    this.dataTotal = setDataKeys(this.data || []);
  }

  protected initRow(elm: HTMLOptionElement, groupDisabled?: boolean) {
    const row = {} as OptionRowData | OptGroupRowData;
    if (elm.tagName?.toLowerCase() === 'option') {
      row.type = 'option';
      (row as OptionRowData).text = this.options.textTemplate(elm);
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
      (row as OptGroupRowData).label = this.options.labelTemplate(elm);
      row.visible = true;
      row.selected = !!elm.selected;
      row.disabled = elm.disabled;
      (row as OptGroupRowData).children = [];
      if (Object.keys(elm.dataset).length) {
        row._data = elm.dataset;
      }

      elm.childNodes.forEach(childNode => {
        (row as OptGroupRowData).children.push(this.initRow(childNode as HTMLOptionElement, row.disabled) as OptionRowData);
      });

      return row;
    }

    return null;
  }

  protected initDrop() {
    this.initList();
    this.update(true);

    if (this.options.isOpen) {
      this.open(0);
    }

    if (this.options.openOnHover && this.parentElm) {
      this._bindEventService.bind(this.parentElm, 'mouseover', () => this.open(null));
      this._bindEventService.bind(this.parentElm, 'mouseout', () => this.close('hover.mouseout'));
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
        }),
      );

      if (this.options.showSearchClear) {
        this.filterParentElm.appendChild(createDomElement('span', { className: 'ms-icon ms-icon-close' }));
      }
    }

    if (this.options.selectAll && !this.options.single) {
      const selectName = this.elm.getAttribute('name') || this.options.name || '';
      this.selectAllParentElm = createDomElement('div', { className: 'ms-select-all', dataset: { key: 'select_all' } });
      const saLabelElm = document.createElement('label');
      const saIconClass = this.isAllSelected ? 'ms-icon-check' : this.isPartiallyAllSelected ? 'ms-icon-minus' : 'ms-icon-uncheck';
      const selectAllIconClass = `ms-icon ${saIconClass}`;
      const saIconContainerElm = createDomElement('div', { className: 'icon-checkbox-container' }, saLabelElm);
      createDomElement(
        'input',
        {
          type: 'checkbox',
          ariaChecked: String(this.isAllSelected),
          checked: this.isAllSelected,
          dataset: { name: `selectAll${selectName}` },
        },
        saIconContainerElm,
      );
      createDomElement('div', { className: selectAllIconClass }, saIconContainerElm);

      saLabelElm.appendChild(createDomElement('span', { textContent: this.formatSelectAll() }));
      this.selectAllParentElm.appendChild(saLabelElm);
      this.dropElm?.appendChild(this.selectAllParentElm);
    }

    this.ulElm = document.createElement('ul');
    this.ulElm.role = 'combobox';
    this.ulElm.ariaExpanded = 'false';
    this.ulElm.ariaMultiSelectable = String(!this.options.single);
    this.dropElm?.appendChild(this.ulElm);

    if (this.options.showOkButton && !this.options.single) {
      this.okButtonElm = createDomElement(
        'button',
        { className: 'ms-ok-button', type: 'button', textContent: this.formatOkButton() },
        this.dropElm,
      );
    }
    this.initListItems();
  }

  protected initListItems(): HtmlStruct[] {
    let offset = 0;
    const rows = this.getListRows();

    if (this.options.selectAll && !this.options.single) {
      offset = -1;
    }

    if (rows.length > Constants.BLOCK_ROWS * Constants.CLUSTER_BLOCKS) {
      const dropVisible = this.dropElm && this.dropElm?.style.display !== 'none';
      if (!dropVisible && this.dropElm) {
        this.dropElm.style.left = '-10000';
        this.dropElm.style.display = 'block';
        this.dropElm.ariaExpanded = 'true';
      }

      const updateDataOffset = () => {
        if (this.virtualScroll) {
          this._currentHighlightIndex = 0;
          this.updateDataStart = this.virtualScroll.dataStart + offset;
          this.updateDataEnd = this.virtualScroll.dataEnd + offset;

          if (this.updateDataStart < 0) {
            this.updateDataStart = 0;
            this._currentHighlightIndex = 0;
          }
          const dataLn = this.getDataLength();
          if (this.updateDataEnd > dataLn) {
            this.updateDataEnd = dataLn;
          }

          if (this.ulElm) {
            if (this.isMoveUpRecalcRequired) {
              this.recalculateArrowMove('up');
            } else if (this.virtualScroll.dataStart > this.updateDataStart) {
              this.recalculateArrowMove('down');
            }
          }
        }
      };

      if (this.ulElm) {
        if (!this.virtualScroll) {
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
        } else {
          this.virtualScroll.reset(rows);
        }
      }
      updateDataOffset();

      if (!dropVisible && this.dropElm) {
        this.dropElm.style.left = '0';
        this.dropElm.style.display = 'none';
        this.dropElm.ariaExpanded = 'false';
      }
    } else {
      if (this.ulElm) {
        emptyElement(this.ulElm);
        rows.forEach(itemRow => this.ulElm!.appendChild(convertItemRowToHtml(itemRow)));
      }
      this.updateDataStart = 0;
      this.updateDataEnd = this.updateData.length;
    }

    this.events();

    return rows;
  }

  protected getEventTarget(e: Event & { target: HTMLElement }): HTMLElement {
    if (e.composedPath) {
      return e.composedPath()[0] as HTMLElement;
    }
    return e.target as HTMLElement;
  }

  protected getListRows(): HtmlStruct[] {
    const rows: HtmlStruct[] = [];
    this.updateData = [];
    this.data?.forEach(dataRow => rows.push(...this.initListItem(dataRow)));

    // when infinite scroll is enabled, we'll add an empty <li> element (that will never be clickable)
    // so that scrolling to the last valid item will NOT automatically scroll back to the top of the list.
    // However scrolling by 1 more item (the last invisible item) will at that time trigger the scroll back to the top of the list
    if (this.options.infiniteScroll) {
      rows.push({
        tagName: 'li',
        props: { className: 'ms-infinite-option', role: 'option' },
      });
    }

    // add a "No Results" option that is hidden by default
    rows.push({ tagName: 'li', props: { className: 'ms-no-results', textContent: this.formatNoMatchesFound() } });

    return rows;
  }

  protected initListItem(dataRow: OptionRowData | OptGroupRowData, level = 0): HtmlStruct[] {
    const title = dataRow?.title || '';
    const multiple = this.options.multiple ? 'multiple' : '';
    const type = this.options.single ? 'radio' : 'checkbox';
    const isChecked = !!dataRow?.selected;
    const isSingleWithoutRadioIcon = this.options.single && !this.options.singleRadio;
    let classes = '';

    if (!dataRow?.visible) {
      return [];
    }

    this.updateData.push(dataRow);

    if (isSingleWithoutRadioIcon) {
      classes = 'hide-radio ';
    }

    if (dataRow.selected) {
      classes += 'selected ';
    }

    if (dataRow.type === 'optgroup') {
      // - group option row -
      const htmlBlocks: HtmlStruct[] = [];

      let itemOrGroupBlock: HtmlStruct;
      if (this.options.hideOptgroupCheckboxes || this.options.single) {
        itemOrGroupBlock = { tagName: 'span', props: { dataset: { name: this.selectGroupName, key: dataRow._key } } };
      } else {
        const inputCheckboxStruct: HtmlStruct = {
          tagName: 'input',
          props: {
            type: 'checkbox',
            dataset: { name: this.selectGroupName, key: dataRow._key },
            checked: isChecked,
            disabled: dataRow.disabled,
          },
        };

        // when creating a block that has multiple selections, we'll add the icon checkbox container
        // otherwise it will be just the input checkbox
        if (isSingleWithoutRadioIcon) {
          itemOrGroupBlock = inputCheckboxStruct;
        } else {
          itemOrGroupBlock = {
            tagName: 'div',
            props: { className: `icon-checkbox-container${type === 'radio' ? ' radio' : ''}` },
            children: [
              inputCheckboxStruct,
              {
                tagName: 'div',
                props: { className: `ms-icon ${isChecked ? (type === 'radio' ? 'ms-icon-radio' : 'ms-icon-check') : 'ms-icon-uncheck'}` },
              },
            ],
          };
        }
      }

      if (!classes.includes('hide-radio') && (this.options.hideOptgroupCheckboxes || this.options.single)) {
        classes += 'hide-radio ';
      }

      const spanLabelBlock: HtmlStruct = { tagName: 'span', props: {} };
      this.applyAsTextOrHtmlWhenEnabled(spanLabelBlock.props, (dataRow as OptGroupRowData).label);
      const liBlock: HtmlStruct = {
        tagName: 'li',
        props: {
          className: classNameToList(`group${this.options.single || dataRow.disabled ? ' disabled' : ''} ${classes}`).join(' '),
          role: 'option',
          ariaSelected: String(isChecked),
          dataset: { key: dataRow._key },
        },
        children: [
          {
            tagName: 'label',
            props: { className: classNameToList(`optgroup${this.options.single || dataRow.disabled ? ' disabled' : ''}`).join(' ') },
            children: [itemOrGroupBlock, spanLabelBlock],
          },
        ],
      };

      const customStyleRules = this.options.cssStyler(dataRow);
      if (customStyleRules) {
        liBlock.props.style = customStyleRules;
      }
      htmlBlocks.push(liBlock);

      (dataRow as OptGroupRowData).children.forEach(child => htmlBlocks.push(...this.initListItem(child, 1)));

      return htmlBlocks;
    }

    // - regular row -
    classes += dataRow.classes || '';

    if (level && this.options.single) {
      classes += `option-level-${level} `;
    }

    if (dataRow.divider) {
      return [{ tagName: 'li', props: { className: 'option-divider' } } as HtmlStruct];
    }

    let liClasses = multiple || classes ? (multiple + classes).trim() : '';
    if (dataRow.disabled) {
      liClasses += ' disabled';
    }
    const labelClasses = `${dataRow.disabled ? 'disabled' : ''}`;
    const spanLabelBlock: HtmlStruct = { tagName: 'span', props: {} };
    this.applyAsTextOrHtmlWhenEnabled(spanLabelBlock.props, (dataRow as OptionRowData).text);
    const inputBlock: HtmlStruct = {
      tagName: 'input',
      props: {
        type,
        value: encodeURI(dataRow.value as string),
        dataset: { key: dataRow._key, name: this.selectItemName },
        checked: isChecked,
        disabled: !!dataRow.disabled,
      },
    };

    if (dataRow.selected) {
      inputBlock.attrs = { checked: 'checked' };
    }

    const iconContainerBlock: HtmlStruct = {
      tagName: 'div',
      props: { className: `icon-checkbox-container${type === 'radio' ? ' radio' : ''}` },
      children: [
        inputBlock,
        {
          tagName: 'div',
          props: {
            className: `ms-icon ${inputBlock.props.checked ? (type === 'radio' ? 'ms-icon-radio' : 'ms-icon-check') : 'ms-icon-uncheck'}`,
          },
        },
      ],
    };

    const liBlock: HtmlStruct = {
      tagName: 'li',
      props: {
        role: 'option',
        title,
        ariaSelected: String(isChecked),
        dataset: { key: dataRow._key },
      },
      children: [
        {
          tagName: 'label',
          props: { className: labelClasses },
          children: [
            // add icon container when showing radio OR using multiple select
            isSingleWithoutRadioIcon ? inputBlock : iconContainerBlock,
            spanLabelBlock,
          ],
        },
      ],
    };

    if (liClasses) {
      liBlock.props.className = liClasses;
    }

    const customStyleRules = this.options.cssStyler(dataRow);
    if (customStyleRules) {
      liBlock.props.style = customStyleRules;
    }

    return [liBlock];
  }

  protected initSelected(ignoreTrigger = false) {
    let selectedTotal = 0;

    for (const row of this.data || []) {
      if ((row as OptGroupRowData).type === 'optgroup') {
        const selectedCount = (row as OptGroupRowData).children.filter(child => child?.selected && !child.disabled && child.visible).length;

        if ((row as OptGroupRowData).children.length) {
          row.selected =
            !this.options.single &&
            selectedCount &&
            selectedCount ===
              (row as OptGroupRowData).children.filter((child: any) => child && !child.disabled && child.visible && !child.divider).length;
        }
        selectedTotal += selectedCount;
      } else {
        selectedTotal += row.selected && !row.disabled && row.visible ? 1 : 0;
      }
    }

    this.isAllSelected =
      this.data?.filter((row: OptionRowData | OptGroupRowData) => {
        return row.selected && !row.disabled && row.visible;
      }).length === this.data?.filter(row => !row.disabled && row.visible && !row.divider).length;
    this.isPartiallyAllSelected = !this.isAllSelected && selectedTotal > 0;

    if (!ignoreTrigger) {
      if (this.isAllSelected) {
        this.options.onCheckAll();
      } else if (selectedTotal === 0) {
        this.options.onUncheckAll();
      }
    }
  }

  protected initView() {
    let computedWidth: number | string;

    if (window.getComputedStyle) {
      computedWidth = window.getComputedStyle(this.elm).width;
      if (computedWidth === 'auto') {
        computedWidth = getElementSize(this.dropElm, 'outer', 'width') + 20;
      }
    } else {
      computedWidth = getElementSize(this.elm, 'outer', 'width') + 20;
    }

    this.parentElm.style.width = `${this.options.width || computedWidth}px`;
    this.elm.classList.add('ms-offscreen');
  }

  protected events() {
    this._bindEventService.unbindAll([
      'ok-button',
      'search-input',
      'select-all-checkbox',
      'input-checkbox-list',
      'group-checkbox-list',
      'hover-highlight',
      'arrow-highlight',
      'option-list-scroll',
    ]);

    this.clearSearchIconElm = this.filterParentElm?.querySelector('.ms-icon-close');
    this.searchInputElm = this.dropElm?.querySelector<HTMLInputElement>('.ms-search input');
    this.selectAllElm = this.dropElm?.querySelector<HTMLInputElement>(`input[data-name="${this.selectAllName}"]`);
    this.selectGroupElms = this.dropElm?.querySelectorAll<HTMLInputElement>(
      `input[data-name="${this.selectGroupName}"],span[data-name="${this.selectGroupName}"]`,
    );
    this.selectItemElms = this.dropElm?.querySelectorAll<HTMLInputElement>(`input[data-name="${this.selectItemName}"]:enabled`);
    this.noResultsElm = this.dropElm?.querySelector<HTMLDivElement>('.ms-no-results');

    const toggleOpen = (e: MouseEvent & { target: HTMLElement }) => {
      e.preventDefault();
      if (this.getEventTarget(e).classList.contains('ms-icon-close')) {
        return;
      }
      this.options.isOpen ? this.close('toggle.close') : this.open();
    };

    if (this.labelElm) {
      this._bindEventService.bind(this.labelElm, 'click', ((e: MouseEvent & { target: HTMLElement }) => {
        if (this.getEventTarget(e).nodeName.toLowerCase() !== 'label') {
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
      if (e.code === 'Escape') {
        this.handleEscapeKey();
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

    if (this.clearSearchIconElm) {
      this._bindEventService.bind(this.clearSearchIconElm, 'click', ((e: MouseEvent) => {
        e.preventDefault();
        if (this.searchInputElm) {
          this.searchInputElm.value = '';
          this.searchInputElm.focus();
        }
        // move highlight back to top of the list
        this._currentHighlightIndex = -1;
        this.moveHighlightDown();
        this.filter();
        this.options.onFilterClear();
      }) as EventListener);
    }

    if (this.searchInputElm) {
      this._bindEventService.bind(
        this.searchInputElm,
        'keydown',
        ((e: KeyboardEvent) => {
          // Ensure shift-tab causes lost focus from filter as with clicking away
          if (e.code === 'Tab' && e.shiftKey) {
            this.close('key.shift+tab');
          }
        }) as EventListener,
        undefined,
        'search-input',
      );

      this._bindEventService.bind(
        this.searchInputElm,
        'keyup',
        ((e: KeyboardEvent) => {
          // enter or space
          // Avoid selecting/deselecting if no choices made
          if (this.options.filterAcceptOnEnter && ['Enter', 'Space'].includes(e.code) && this.searchInputElm?.value) {
            if (this.options.single) {
              const visibleLiElms: HTMLInputElement[] = [];
              this.selectItemElms?.forEach(selectedElm => {
                if (selectedElm.closest('li')?.style.display !== 'none') {
                  visibleLiElms.push(selectedElm);
                }
              });
              if (visibleLiElms.length && visibleLiElms[0].hasAttribute('data-name')) {
                this.setSelects([visibleLiElms[0].value]);
              }
            } else {
              this.selectAllElm?.click();
            }
            this.close(`key.${e.code.toLowerCase() as 'enter' | 'space'}`);
            this.focus();
            return;
          }
          this.filter();
        }) as EventListener,
        undefined,
        'search-input',
      );
    }

    if (this.selectAllElm) {
      this._bindEventService.bind(
        this.selectAllElm,
        'click',
        ((e: MouseEvent & { currentTarget: HTMLInputElement }) => this._checkAll(e.currentTarget?.checked)) as EventListener,
        undefined,
        'select-all-checkbox',
      );
    }

    if (this.okButtonElm) {
      this._bindEventService.bind(
        this.okButtonElm,
        'click',
        ((e: MouseEvent & { target: HTMLElement }) => {
          toggleOpen(e);
          e.stopPropagation(); // Causes lost focus otherwise
        }) as EventListener,
        undefined,
        'ok-button',
      );
    }

    if (this.selectGroupElms) {
      this._bindEventService.bind(
        this.selectGroupElms,
        'click',
        ((e: MouseEvent & { currentTarget: HTMLInputElement }) => {
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
            }),
          );
        }) as EventListener,
        undefined,
        'group-checkbox-list',
      );
    }

    if (this.selectItemElms) {
      this._bindEventService.bind(
        this.selectItemElms,
        'click',
        ((e: MouseEvent & { currentTarget: HTMLInputElement }) => {
          const selectElm = e.currentTarget;
          const checked = selectElm.checked;
          const option = findByParam(this.data, '_key', selectElm.dataset.key);
          const close = () => {
            if (this.options.single && this.options.isOpen && !this.options.keepOpen) {
              this.close('selection');
            }
          };

          if (this.options.onBeforeClick(option) === false) {
            close();
            return;
          }

          this._check(option, checked);
          this.options.onClick(
            removeUndefined({
              text: option.text,
              value: option.value,
              selected: option.selected,
              data: option._data,
            }),
          );

          close();
        }) as EventListener,
        undefined,
        'input-checkbox-list',
      );
    }

    if (this.lastFocusedItemKey && this.dropElm) {
      // if we previously had an item focused and the VirtualScroll recreates the list, we need to refocus on last item by its input data-key
      const input = this.dropElm.querySelector<HTMLInputElement>(`li[data-key=${this.lastFocusedItemKey}]`);
      input?.focus();
    }

    if (this.options.navigationHighlight && this.dropElm) {
      // when hovering an select option, we will also change the highlight to that option
      this._bindEventService.bind(
        this.dropElm,
        'mouseover',
        ((e: MouseEvent & { target: HTMLDivElement | HTMLLIElement }) => {
          const liElm = (this.getEventTarget(e).closest('.ms-select-all') || this.getEventTarget(e).closest('li')) as HTMLLIElement;

          if (this.dropElm?.contains(liElm) && this.lastMouseOverPosition !== `${e.clientX}:${e.clientY}`) {
            const optionElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_LIST_SELECTOR) || [];
            const newIdx = Array.from(optionElms).findIndex(el => el.dataset.key === liElm.dataset.key);
            if (this._currentHighlightIndex !== newIdx && !liElm.classList.contains('disabled')) {
              this._currentSelectedElm = liElm;
              this._currentHighlightIndex = newIdx;
              this.changeCurrentOptionHighlight(liElm);
            }
          }
          this.lastMouseOverPosition = `${e.clientX}:${e.clientY}`;
        }) as EventListener,
        undefined,
        'hover-highlight',
      );

      // add keydown event listeners to watch for up/down arrows and focus on previous/next item
      // we will ignore divider and if key pressed is the Enter/Space key then we'll instead select/deselect input checkbox
      // we will also remove any previous bindings that might exist which happen when we use VirtualScroll
      this._bindEventService.bind(
        this.dropElm,
        'keydown',
        ((e: KeyboardEvent & { target: HTMLDivElement | HTMLLIElement }) => {
          switch (e.key) {
            case 'ArrowUp':
              e.preventDefault();
              this.moveHighlightUp();
              break;
            case 'ArrowDown':
              e.preventDefault();
              this.moveHighlightDown();
              break;
            case 'Escape':
              this.handleEscapeKey();
              break;
            case 'Enter':
            case ' ': {
              // if we're focused on the OK button then don't execute following block
              if (document.activeElement !== this.okButtonElm) {
                const liElm = this.getEventTarget(e).closest('.ms-select-all') || this.getEventTarget(e).closest('li');
                if ((e.key === ' ' && this.options.filter) || (this.options.filterAcceptOnEnter && !liElm)) {
                  return;
                }
                e.preventDefault();
                this._currentSelectedElm?.querySelector('input')?.click();

                // on single select, we should focus directly
                if (this.options.single) {
                  this.choiceElm.focus();
                  this.lastFocusedItemKey = this.choiceElm?.dataset.key || '';
                }
              }
              break;
            }
            case 'Tab': {
              // when clicking Tab, we'll focus on OK button when available
              // or with Shift+Tab we'll either focus first option when coming
              // from OK button or close drop if we're already in the lsit
              e.preventDefault();
              if (e.shiftKey) {
                if (document.activeElement === this.okButtonElm) {
                  this.focusSelectAllOrList();
                  this.highlightCurrentOption();
                } else {
                  this.close('key.shift+tab');
                  this.choiceElm.focus();
                }
              } else {
                this.changeCurrentOptionHighlight();
                this.okButtonElm?.focus();
              }
              break;
            }
          }
        }) as EventListener,
        undefined,
        'arrow-highlight',
      );
    }

    if (this.ulElm && this.options.infiniteScroll) {
      this._bindEventService.bind(
        this.ulElm,
        'scroll',
        this.infiniteScrollHandler.bind(this) as EventListener,
        undefined,
        'option-list-scroll',
      );
    }
  }

  protected handleEscapeKey() {
    if (!this.options.keepOpen) {
      this.close('key.escape');
      this.choiceElm.focus();
    }
  }

  /**
   * Checks if user reached the end of the list through mouse scrolling and/or arrow down,
   * then scroll back to the top whenever that happens.
   */
  protected infiniteScrollHandler(e: (MouseEvent & { target: HTMLElement }) | null, idx?: number, fullCount?: number) {
    let needHighlightRecalc = false;

    if (e && this.getEventTarget(e) && this.ulElm && this.scrolledByMouse) {
      const scrollPos = this.getEventTarget(e).scrollTop + this.getEventTarget(e).clientHeight;
      if (scrollPos === this.ulElm.scrollHeight) {
        needHighlightRecalc = true;
      }
    } else if (idx !== undefined && idx + 1 === fullCount) {
      needHighlightRecalc = true;
    }

    if (needHighlightRecalc && this.ulElm) {
      if (this.virtualScroll) {
        this.initListItems();
      } else {
        this.ulElm.scrollTop = 0;
      }
      this._currentHighlightIndex = 0;
      this.highlightCurrentOption();
    }
  }

  /**
   * Open the drop method, user could optionally provide a delay in ms to open the drop.
   * The default delay is 0ms (which is 1 CPU cycle) when nothing is provided, to avoid a delay we can pass `-1` or `null`
   * @param {number} [openDelay=0] - provide an optional delay, defaults to 0
   */
  open(openDelay: number | null = 0): Promise<void> {
    return new Promise(resolve => {
      if (openDelay !== null && openDelay >= 0) {
        // eslint-disable-next-line prefer-const
        window.clearTimeout(this.openDelayTimer);
        this.openDelayTimer = window.setTimeout(() => {
          this.openDrop();
          resolve();
        }, openDelay);
      } else {
        this.openDrop();
        resolve();
      }
    });
  }

  protected openDrop() {
    if (!this.dropElm || this.choiceElm?.classList.contains('disabled')) {
      return;
    }
    this.options.isOpen = true;
    this.parentElm.classList.add('ms-parent-open');
    this.choiceElm?.querySelector('div.ms-icon-caret')?.classList.add('open');
    this.dropElm.style.display = 'block';
    this.dropElm.ariaExpanded = 'true';

    if (this.selectAllElm?.parentElement) {
      this.selectAllElm.parentElement.style.display = 'inline-flex';
    }

    if (this.noResultsElm) {
      this.noResultsElm.style.display = 'none';
    }

    if (!this.getDataLength()) {
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
        container = this.options.container === 'body' ? document.body : (document.querySelector(this.options.container) as HTMLElement);
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
      maxHeight = getElementSize(this.dropElm.querySelector('ul>li') as HTMLLIElement, 'outer', 'height') * this.options.maxHeight;
    }
    this.ulElm ??= this.dropElm.querySelector('ul');
    if (this.ulElm) {
      if (minHeight) {
        this.ulElm.style.minHeight = `${minHeight}px`;
      }
      this.ulElm.style.maxHeight = `${maxHeight}px`;
    }
    this.dropElm.querySelectorAll<HTMLDivElement>('.multiple').forEach(multElm => {
      multElm.style.width = `${this.options.multipleWidth}px`;
    });

    if (this.getDataLength() && this.options.filter) {
      if (this.searchInputElm) {
        this.searchInputElm.value = '';
        this.searchInputElm.focus();
      }
      this.filter(true);
    } else {
      // highlight SelectAll or 1st select option when opening dropdown
      this.focusSelectAllOrList();
    }

    if (this._currentHighlightIndex < 0) {
      // on open drop initial, we'll focus on next available option
      this.moveHighlightDown();
    } else {
      // if it was already opened earlier, we'll keep same option index focused
      this.highlightCurrentOption();
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

  protected focusSelectAllOrList() {
    if (this.selectAllElm) {
      this.selectAllElm.focus();
    } else if (this.ulElm) {
      this.ulElm.tabIndex = 0;
      this.ulElm.focus();
    }
  }

  protected highlightCurrentOption() {
    const optionElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_LIST_SELECTOR) || [];

    if (this._currentHighlightIndex <= optionElms.length) {
      const currentOption = optionElms[this._currentHighlightIndex];

      if (currentOption) {
        this.lastFocusedItemKey = currentOption.dataset.key || '';
        this._currentSelectedElm = currentOption;

        // Scroll the current option into view
        // use a global flag to differentiate scroll by mouse or by scrollIntoView
        this.scrolledByMouse = false;
        currentOption.scrollIntoView({ block: 'nearest' });
        this.changeCurrentOptionHighlight(currentOption);
        window.setTimeout(() => (this.scrolledByMouse = true), 10);
      }
    }
  }

  /** Change highlighted option, or remove highlight when nothing is provided */
  protected changeCurrentOptionHighlight(optionElm?: HTMLLIElement | HTMLDivElement) {
    optionElm?.classList.add('highlighted');
    const currentElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_HIGHLIGHT_LIST_SELECTOR) || [];
    currentElms.forEach(option => {
      if (option !== optionElm) {
        option.classList.remove('highlighted');
      }
    });
  }

  protected moveHighlightDown() {
    const optionElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_LIST_SELECTOR) || [];
    const domOptionsCount = optionElms.length;

    if (this._currentHighlightIndex < domOptionsCount - 1) {
      this._currentHighlightIndex++;
      if (optionElms[this._currentHighlightIndex]?.classList.contains('disabled')) {
        this.moveHighlightDown();
      }
    } else if (this.options.infiniteScroll) {
      this.infiniteScrollHandler(null, this._currentHighlightIndex, domOptionsCount);
    }
    this.highlightCurrentOption();
  }

  protected moveHighlightUp() {
    const optionElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_LIST_SELECTOR) || [];
    const idxToCompare = this.options.single ? 0 : 1;
    if (this.virtualScroll && this._currentHighlightIndex <= idxToCompare && this.updateDataStart! > 0 && this.ulElm) {
      const currentOptionElm = optionElms[this._currentHighlightIndex + (this.options.single ? 0 : 1)]; // skip SelectAll when using multiple
      const dataKey = currentOptionElm?.dataset.key;
      this.lastFocusedItemKey = dataKey as string;

      // scroll up by 1 option row to trick the v-scroll in thinking it changed v-scroll page and it needs to recalculate its new offset
      this.ulElm.scrollTop = this.ulElm.scrollTop - currentOptionElm?.getBoundingClientRect().height || 10;

      // moveUp will be recalled by vScroll callback
      this.isMoveUpRecalcRequired = true;
      return;
    }

    if (this._currentHighlightIndex > 0) {
      this._currentHighlightIndex--;
      if (optionElms[this._currentHighlightIndex]?.classList.contains('disabled')) {
        this.moveHighlightUp();
      }
    }

    this.highlightCurrentOption();
  }

  protected recalculateArrowMove(direction: 'up' | 'down') {
    const optionElms = this.dropElm?.querySelectorAll<HTMLLIElement>(OPTIONS_LIST_SELECTOR) || [];
    const newIdx = Array.from(optionElms).findIndex(el => el.dataset.key === this.lastFocusedItemKey);
    this._currentHighlightIndex = newIdx - 1;
    if (direction === 'down') {
      this.moveHighlightDown();
    } else if (direction === 'up') {
      this.moveHighlightUp();
      this.isMoveUpRecalcRequired = false;
    }
  }

  close(reason?: CloseReason) {
    this.options.isOpen = false;
    this.parentElm.classList.remove('ms-parent-open');
    this.choiceElm?.querySelector('div.ms-icon-caret')?.classList.remove('open');
    if (this.dropElm) {
      this.dropElm.style.display = 'none';
      this.dropElm.ariaExpanded = 'false';

      if (this.options.container) {
        this.parentElm.appendChild(this.dropElm);
        this.dropElm.style.top = 'auto';
        this.dropElm.style.left = 'auto';
      }
    }
    this.options.onClose(reason);
  }

  /**
   * apply value to an HTML element as text or as HTML with innerHTML when enabled
   * @param elm
   * @param value
   */
  protected applyAsTextOrHtmlWhenEnabled(elmOrProp: HTMLElement | any, value: string) {
    if (!elmOrProp) {
      elmOrProp = {};
    }
    if (this.isRenderAsHtml) {
      elmOrProp.innerHTML = (typeof this.options.sanitizer === 'function' ? this.options.sanitizer(value) : value) as unknown as string;
    } else {
      elmOrProp.textContent = value;
    }
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
        this.applyAsTextOrHtmlWhenEnabled(spanElm, placeholder);
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
        this.applyAsTextOrHtmlWhenEnabled(spanElm, html);
      }

      // when showClear option is enabled, show clear icon only when drop has an actual selection
      if (this.options.showClear && this.selectClearElm) {
        const displayState = html ? 'block' : 'none';
        this.selectClearElm.style.display = displayState;
      }

      if (this.options.displayTitle) {
        const selectType = this.options.useSelectOptionLabel || this.options.useSelectOptionLabelToHtml ? 'value' : 'text';
        spanElm.title = this.getSelects(selectType).join(this.options.displayDelimiter);
      }
    }

    // set selects to select
    const selectedValues = this.getSelects();
    if (this.options.single) {
      this.elm.value = selectedValues.length ? selectedValues[0] : '';
    } else {
      // when multiple values could be set, we need to loop through each
      Array.from(this.elm.options).forEach(option => {
        option.selected = selectedValues.some(val => val === option.value);
      });
    }

    // trigger <select> change event
    if (!ignoreTrigger) {
      this.elm.dispatchEvent(new Event('change'));
    }
  }

  protected updateSelected(rows?: HtmlStruct[]) {
    for (let i = this.updateDataStart!; i < this.updateDataEnd!; i++) {
      const row = this.updateData[i];
      const inputElm = this.dropElm?.querySelector<HTMLInputElement>(`input[data-key=${row._key}]`);
      if (inputElm) {
        inputElm.checked = row.selected;
        const closestLiElm = inputElm.closest('li');
        const iconDivElm = closestLiElm?.querySelector('.icon-checkbox-container div');
        if (closestLiElm) {
          if (row.selected && !closestLiElm.classList.contains('selected')) {
            closestLiElm.classList.add('selected');
            closestLiElm.ariaSelected = 'true';
            if (iconDivElm) {
              iconDivElm.className = `ms-icon ms-icon-${inputElm.type === 'radio' ? 'radio' : 'check'}`;
            }
          } else if (!row.selected) {
            closestLiElm.classList.remove('selected');
            closestLiElm.ariaSelected = 'false';
            if (iconDivElm) {
              iconDivElm.className = 'ms-icon ms-icon-uncheck';
            }
          }
        }
      }
    }

    const noResult = this.data?.filter(row => row.visible).length === 0;

    if (this.selectAllElm) {
      this.selectAllElm.ariaChecked = String(this.isAllSelected);
      const checkboxIconElm = this.dropElm?.querySelector('.ms-select-all .icon-checkbox-container div');
      if (checkboxIconElm) {
        let iconClass = '';
        if (this.isAllSelected) {
          iconClass = 'ms-icon-check';
        } else if (this.isPartiallyAllSelected) {
          iconClass = 'ms-icon-minus';
        } else {
          iconClass = 'ms-icon-uncheck';
        }
        checkboxIconElm.className = `ms-icon ${iconClass}`;
      }

      this.selectAllElm.checked = this.isAllSelected;
      toggleElement(this.selectAllElm.closest('li'), !noResult);
    }

    toggleElement(this.noResultsElm, noResult);

    if (this.virtualScroll) {
      this.virtualScroll.rows = rows ?? this.getListRows(); // recreate the rows list only when not already created
    }
  }

  getData() {
    return this.options.data;
  }

  getDataLength() {
    return this.data?.length ?? 0;
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
        const selectedChildren = (row as OptGroupRowData).children.filter(child => child?.selected);
        if (!selectedChildren.length) {
          continue;
        }

        if (type === 'value' || this.options.single) {
          values.push(
            ...selectedChildren.map((child: any) => {
              return type === 'value' ? child._value || child[type] : child[type];
            }),
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
    let hasChanged = false;
    const _setSelects = (rows: Array<OptionRowData | OptGroupRowData>) => {
      for (const row of rows) {
        let selected = false;
        if (type === 'text') {
          const divElm = document.createElement('div');
          this.applyAsTextOrHtmlWhenEnabled(divElm, (row as OptionRowData).text);
          selected = values.includes(divElm.textContent?.trim() ?? '');
        } else {
          selected = values.includes(row._value || row.value);
          if (!selected && row.value === `${+(row as OptionRowData).value}`) {
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
    if (this.choiceElm) {
      this.choiceElm.classList.remove('disabled');
      this.choiceElm.disabled = false;
    }
  }

  disable() {
    if (this.choiceElm) {
      this.choiceElm?.classList.add('disabled');
      this.choiceElm.disabled = true;
    }
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

  protected _check(option: OptGroupRowData | OptionRowData, checked: boolean) {
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
    group.children.forEach((row: OptionRowData) => {
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
              label: removeDiacritics(rowLabel.toString().toLowerCase(), this.options.diacriticParser),
              search: removeDiacritics(search, this.options.diacriticParser),
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
                text: removeDiacritics(childText.toString().toLowerCase(), this.options.diacriticParser),
                search: removeDiacritics(search, this.options.diacriticParser),
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
          text: removeDiacritics(rowText.toString().toLowerCase(), this.options.diacriticParser),
          search: removeDiacritics(search, this.options.diacriticParser),
          originalText: rowText,
          originalSearch,
          row,
        });
      }
    }

    const rows = this.initListItems();
    this.initSelected(ignoreTrigger);
    this.updateSelected(rows); // no need to recreate the rows list twice

    if (!ignoreTrigger) {
      this.options.onFilter(originalSearch);
    }
  }

  protected adjustDropHeight(position: 'bottom' | 'top') {
    const isDropPositionBottom = position !== 'top';
    const filterHeight = this.filterParentElm?.getBoundingClientRect().height ?? 0;
    const okButtonHeight = this.okButtonElm?.getBoundingClientRect().height ?? 0;
    const selectAllHeight = this.options.single ? 0 : (this.selectAllParentElm?.getBoundingClientRect().height ?? 0);
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

    // if we reached this line, we can assume that the drop height wasn't adjusted
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
        this.dropElm.style.left = `${selectOffsetLeft - (msDropWidth - selectParentWidth)}px`;
      }
    }

    return position;
  }

  protected adjustDropWidthByText() {
    if (this.dropElm) {
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

      this.dropElm.querySelectorAll('li label').forEach(elm => {
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
  }

  getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';

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
