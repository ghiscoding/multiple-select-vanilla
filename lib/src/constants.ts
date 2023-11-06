import { LabelFilter, MultipleSelectOption, TextFilter } from './interfaces';
import English from './locales/multiple-select-en-US';

const BLOCK_ROWS = 50;
const CLUSTER_BLOCKS = 4;

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

  cssStyler: () => null,
  styler: () => false,
  textTemplate: (elm: HTMLOptionElement) => elm.innerHTML.trim(),
  labelTemplate: (elm: HTMLOptionElement) => elm.label,

  onOpen: () => false,
  onClose: () => false,
  onCheckAll: () => false,
  onUncheckAll: () => false,
  onFocus: () => false,
  onBlur: () => false,
  onOptgroupClick: () => false,
  onBeforeClick: () => true,
  onClick: () => false,
  onFilter: () => false,
  onClear: () => false,
  onAfterCreate: () => false,
  onDestroy: () => false,
  onAfterDestroy: () => false,
  onDestroyed: () => false,
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

Object.assign(DEFAULTS, English!['en-US']); // load English as default locale

const Constants = {
  BLOCK_ROWS,
  CLUSTER_BLOCKS,
  DEFAULTS,
  METHODS,
};

export default Constants;
