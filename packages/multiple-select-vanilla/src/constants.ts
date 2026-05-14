import { English } from './locales/en-US.js';
import type { LabelFilter, TextFilter } from './models/interfaces.js';
import type { MultipleSelectOption } from './models/multipleSelectOption.interface.js';

const BLOCK_ROWS = 50;
const CLUSTER_BLOCKS = 4;

const noopFalse = () => false;
const noopTrue = () => true;
const DEFAULTS: Partial<MultipleSelectOption> = {
  name: '',
  placeholder: '',
  classes: '',
  classPrefix: '',
  data: undefined,
  locale: undefined,

  selectAll: true,
  single: undefined,
  singleRadio: false,
  multiple: false,
  hideOptgroupCheckboxes: false,
  multipleWidth: 80,
  width: undefined,
  dropWidth: undefined,
  maxHeight: 250,
  maxHeightUnit: 'px',
  position: 'bottom',

  displayValues: false,
  displayTitle: false,
  displayDelimiter: ', ',
  minimumCountSelected: 3,
  ellipsis: false,

  isOpen: false,
  keepOpen: false,
  openOnHover: false,
  container: null,

  filter: false,
  filterGroup: false,
  filterPlaceholder: '',
  filterAcceptOnEnter: false,
  filterByDataLength: undefined,
  customFilter(filterOptions) {
    const { text, label, search } = filterOptions as LabelFilter & TextFilter;
    return (label || text || '').includes(search);
  },

  showClear: false,

  // auto-position the drop
  autoAdjustDropHeight: false,
  autoAdjustDropPosition: false,
  autoAdjustDropWidthByTextSize: false,
  adjustedHeightPadding: 10,
  useSelectOptionLabel: false,
  useSelectOptionLabelToHtml: false,

  navigationHighlight: true,
  infiniteScroll: false,
  virtualScroll: true,

  cssStyler: () => null,
  textTemplate: (elm: HTMLOptionElement) => elm.innerHTML.trim(),
  labelTemplate: (elm: HTMLOptionElement) => elm.label,

  onBeforeOpen: noopFalse,
  onChange: noopFalse,
  onOpen: noopFalse,
  onBeforeClose: noopTrue,
  onClose: noopFalse,
  onCheckAll: noopFalse,
  onUncheckAll: noopFalse,
  onFocus: noopFalse,
  onBlur: noopFalse,
  onOptgroupClick: noopFalse,
  onBeforeClick: noopTrue,
  onClick: noopFalse,
  onFilter: noopFalse,
  onFilterClear: noopFalse,
  onClear: noopFalse,
  onAfterCreate: noopFalse,
  onDestroy: noopFalse,
  onAfterDestroy: noopFalse,
  onDestroyed: noopFalse,
  sanitizer: text => {
    if ('setHTML' in Element.prototype) {
      const container = document.createElement('div');
      // @ts-ignore: experimental API
      container.setHTML(text, {
        sanitizer: new Sanitizer({
          // let's add the most common elements & attributes
          // also see: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration
          elements: ['i', 'span', 'div', 'p', 'b', 'strong', 'em', 'br', 'ul', 'ol', 'li', 'a', 'img'],
          attributes: ['class', 'title', 'alt', 'src', 'href', 'target', 'rel', 'width', 'height', 'level'],
          replaceWithChildrenElements: [],
        }),
      });
      return container.innerHTML;
    }
    return text;
  },
};

const METHODS = [
  'init',
  'getOptions',
  'refreshOptions',
  'getSelects',
  'setSelects',
  'enable',
  'disable',
  'open',
  'close',
  'check',
  'uncheck',
  'checkAll',
  'uncheckAll',
  'checkInvert',
  'focus',
  'blur',
  'refresh',
  'destroy',
];

Object.assign(DEFAULTS, English); // load English as default locale

const Constants = {
  BLOCK_ROWS,
  CLUSTER_BLOCKS,
  DEFAULTS,
  METHODS,
};

export default Constants;
