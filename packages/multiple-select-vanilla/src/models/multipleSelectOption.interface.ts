import type { TrustedHTML } from 'trusted-types/lib';

import type { CollectionData, LabelFilter, OptGroupRowData, OptionRowData, TextFilter } from './interfaces.js';
import type { LocaleKey, MultipleSelectLocale, MultipleSelectLocales } from './locale.interface.js';

export interface MultipleSelectView {
  label: string;
  value?: any;
  selected: boolean;
  data: any;
  children?: Array<{
    label: string;
    value: any;
    selected: boolean;
    disabled: boolean;
    data: any;
  }>;
}

export interface ClickedItem<T extends 'option' | 'optgroup'> {
  label: string;
  selected: boolean;
  type: T;
}

export interface ClickedGroup extends ClickedItem<'optgroup'> {}

export interface ClickedOption extends ClickedItem<'option'> {
  value?: any;
}

export type CloseReason =
  | 'blur'
  | 'body.click'
  | 'hover.mouseout'
  | 'key.shift+tab'
  | 'key.escape'
  | 'key.enter'
  | 'key.space'
  | 'selection'
  | 'toggle.close'
  | 'custom';

export type CSSStyleDeclarationReadonly =
  | 'length'
  | 'parentRule'
  | 'getPropertyPriority'
  | 'getPropertyValue'
  | 'item'
  | 'removeProperty'
  | 'setProperty';
export type CSSStyleDeclarationWritable = keyof Omit<CSSStyleDeclaration, CSSStyleDeclarationReadonly>;

export interface MultipleSelectOption extends MultipleSelectLocale {
  /** Optional I18n Locales map to provide all available locales */
  locales?: MultipleSelectLocales;
  /** defaults to 10, when using "autoAdjustDropHeight" we might want to add a bottom (or top) padding instead of taking the entire available space */
  adjustedHeightPadding: number;

  /** Use optional string to override "All selected" text instead of `formatAllSelected()`, the latter should be preferred */
  allSelectedText?: string;

  /** Auto-adjust the Drop menu height to fit with available space */
  autoAdjustDropHeight?: boolean;

  /** Auto-adjust the Drop position on the side with the most available space (dropup / dropdown) */
  autoAdjustDropPosition?: boolean;

  /** Drop menu to automatically set its width as the maximum available width of text */
  autoAdjustDropWidthByTextSize?: boolean;

  /** The class name of select. */
  classes?: string;

  /** The class prefix of select. */
  classPrefix?: string;

  /**
   * Should we close the drop when Tab key is pressed.
   * Side note: when using a multiple select with the "OK" button enabled,
   * it will require 2 Tabs (1. focus on "OK", 2. close drop)
   */
  closeOnTab?: boolean;

  /** HTML container to use for the drop menu, e.g. 'body' */
  container?: string | HTMLElement | null;

  /** Use optional string to override selected count text "# of % selected" instead of `formatCountSelected()`, the latter should be preferred */
  countSelectedText?: string;

  /** Dark Mode will add `.ms-dark-mode` CSS class to drop and parent elements */
  darkMode?: boolean;

  /** provide custom data */
  data?: CollectionData;

  /** Add "data-test" attribute to the "ms-parent" element */
  dataTest?: string;

  /** Delimiter to be displayed between each option */
  displayDelimiter: string;

  /** Title that can be displayed in the dropdown */
  displayTitle?: boolean;

  /**Defaults to false, display selected values on the element */
  displayValues?: boolean;

  /** Define the width of the dropdown list */
  dropWidth?: number;

  /** Defaults to false, add `…` after selected options if minimumCountSelected is set. Overrides countSelected option. */
  ellipsis?: boolean;

  /** Defaults to false, whether or not Multiple Select show a search field to search through checkbox items */
  filter?: boolean;

  /** Defaults to false, accept a filter by typing Enter on the keyboard */
  filterAcceptOnEnter?: boolean;

  /**
   * Option to auto enable filter when the data length is defined.
   * For example when defined as 10, the filter will show automatically when data array is over 10.
   */
  filterByDataLength?: number;

  /** Should we filter by Group? */
  filterGroup?: boolean;

  /** Add a placeholder to the input search filter when `filter` is enabled. */
  filterPlaceholder?: string;

  /** Defaults to false, hide the option groupd checkboses */
  hideOptgroupCheckboxes?: boolean;

  /** Defaults to false, Infinite Scroll will automatically reset the list (scroll back to top) whenever the scroll reaches the last item (end of the list) */
  infiniteScroll?: boolean;

  /** Whether or not Multiple Select open the select dropdown. */
  isOpen?: boolean;

  /** Defaults to false, keep the select dropdown always open */
  keepOpen?: boolean;

  /**
   * For accessibility, you can provide a Label Id to be associated to the select button element (`.ms-choice`).
   * An example can be `labelId: "custom-label"` which will be assigned to `id` and `aria-labelledby` attributes of the `.ms-choice` button.
   */
  labelId?: string;

  /**
   * A lazy callback to load your collection only after the user clicks on the select dropdown to open it.
   * The function has 2 arguments `(resolve, reject)`, user must call `resolve(data)` or `reject()` to complete the loading process.
   */
  lazyData?: (resolve: (value: CollectionData) => void, reject: (customError?: string) => void) => void;

  /** Use optional string to override "Failed to load data" text instead of `formatLazyFailed()` when lazy loading data failed. */
  lazyFailedText?: string;

  /** Use optional string to override "Loading..." text instead of `formatLazyLoading()` when lazy loading data is processing. */
  lazyLoadingText?: string;

  /** Optional I18n Locale */
  locale?: LocaleKey | MultipleSelectLocale;

  /** Defaults to 250, define the maximum height property of the dropdown list. */
  maxHeight: number;

  /** Defaults to `px`, maxHeight unit type */
  maxHeightUnit?: string;

  /** Defaults to 150, define the minimum height property of the dropdown list. */
  minHeight: number;

  /** Defaults to 500, define the maximum width of the drop when using the "autoAdjustDropWidthByTextSize: true" flag. */
  maxWidth?: number;

  /** Define the minimum width of the drop when using the "autoAdjustDropWidthByTextSize: true" flag. */
  minWidth?: number;

  /** Defaults to 3, minimum count of item selected to start showing "X items where selected". */
  minimumCountSelected: number;

  /** Defaults to false, whether or not Multiple Select show multiple items in a row */
  multiple?: boolean;

  /** Defaults to 80, Multiple Select items width */
  multipleWidth?: number;

  /** Defaults to an empty string, provide a name to the multiple select element */
  name?: string;

  /** Defaults to True, arrow navigation (and mouse hover) to highlight and possibly change selected option(s) with keyboard or mouse hovering. */
  navigationHighlight?: boolean;

  /** Use optional string to override text when filtering "No matches found" instead of `formatNoMatchesFound()`, the latter should be preferred */
  noMatchesFoundText?: string;

  /** Use optional string to override "OK" button text instead of `formatOkButton()`, the latter should be preferred */
  okButtonText?: string;

  /** Will open the dropdown when hovering the select */
  openOnHover?: boolean;

  /** A placeholder value can be defined and will be displayed until you select an item. */
  placeholder?: string;

  /** Defaults to 'bottom', defines the position of select dropdown, can only be bottom or top */
  position: 'bottom' | 'top';

  /**
   * Custom Filter predicate function callback to pre-filter the data collection before rendering the select dropdown.
   * Note that this will be executed before `preSort` (when defined).
   */
  preFilter?: (dataItem: OptionRowData | OptGroupRowData) => boolean;

  /**
   * Custom Sort Comparer function callback to pre-sort the data collection before rendering the select dropdown.
   * Note that this will be executed after `preSort` (when defined).
   */
  preSort?: (item1: OptionRowData | OptGroupRowData, item2: OptionRowData | OptGroupRowData) => number;

  /** Defaults to False, should we render option labels as HTML? */
  renderOptionLabelAsHtml?: boolean;

  /** Whether or not Multiple Select show select all checkbox. */
  selectAll?: boolean;

  /** Use optional string to override "Select All" checkbox text instead of `formatSelectAll()`, the latter should be preferred */
  selectAllText?: string;

  /** Defaults to false, whether or not Multiple Select allows you to select only one option */
  single?: boolean;

  /** Alias to `single` */
  singleRadio?: boolean;

  /** The size of select. */
  size?: number | string;

  /** Show a clear button, defaults to false */
  showClear?: boolean;

  /** Show a clear button on the filter search input, defaults to false */
  showSearchClear?: boolean;

  /** Display the OK button at bottom of the list when using multiple selection to easily close the drop, defaults to false. */
  showOkButton?: boolean;

  /** add a tabIndex to the "ms-choice" button, no default */
  tabIndex?: number;

  /** Defaults to False, when set to True it will use the <option label=""> (from select option value) that can be used to display selected options. */
  useSelectOptionLabel?: boolean;

  /** Defaults to False, same as "useSelectOptionLabel" but will also render HTML */
  useSelectOptionLabelToHtml?: boolean;

  /**
   * Defaults to True, Virtual Scroll is used to improve performance with large set of data. The concept is to only render a subset
   * of the options (~200) at a time to avoid polluting the DOM, it will also consume less memory and improve overall performance of your application.
   */
  virtualScroll?: boolean;

  /** Defaults to undefined, customize the width property of the dropdown list, support a percentage setting. The default will make the select input field the same width as the select. */
  width?: number | string;

  // --
  // Methods
  // ------------

  /** The item styler function, return style string to customize the item style such as `background: red`. The function takes a value as argument. */
  cssStyler: (value: OptionRowData | OptGroupRowData) => CSSStyleDeclaration | null;

  /** Customize the filter method, for example if we want to use a startsWith character */
  customFilter(options: LabelFilter | TextFilter): boolean;

  /** Returns HTML label attribute of a DOM element */
  labelTemplate: (elm: HTMLOptionElement) => string;

  /** Returns HTML text template of a DOM element as a string */
  textTemplate: (elm: HTMLOptionElement) => string;

  // --
  // Events
  // ------------

  /** Fires after the multiple-select DOM element is created. */
  onAfterCreate: () => void;

  /** Fires just before the dropdown is about to open. */
  onBeforeOpen: () => void;

  /** Fires when instance destroy method is being called, when a hard destroy is enabled it will remove the DOM element and also destroy its instance. */
  onDestroy: (options: { hardDestroy: boolean }) => void;

  /** Fires after instance was destroyed. */
  onAfterDestroy: (options: { hardDestroy: boolean }) => void;
  onDestroyed: (options: { hardDestroy: boolean }) => void;

  /** (internal usage only) Fires when instance is being hard destroyed. */
  onHardDestroy: () => void;

  /** (internal usage only) Fires after instance was being hard destroyed. */
  onAfterHardDestroy: () => void;

  /** Fires when the dropdown list is opened. */
  onOpen: () => void;

  /** Fires when the filter is cleared. */
  onClear: () => void;

  /** Fires just before the close event is called. You can return `false` to prevent the drop from closing. */
  // biome-ignore lint/suspicious/noConfusingVoidType: could return a boolean or not return anything
  onBeforeClose: (reason?: CloseReason, e?: Event) => boolean | void;

  /** Fires when the dropdown list is close. */
  onClose: (reason?: CloseReason) => void;

  /** Fires when all the options are checked by either clicking the `Select all` checkbox, or when the `checkall` method is programatically called. */
  onCheckAll: () => void;

  /** Fires when all the options are unchecked by either clicking the `Select all` checkbox, or when the `uncheckall` method is programatically called. */
  onUncheckAll: () => void;

  /** Bind an event handler to the "focus". */
  onFocus: () => void;

  /** Bind an event handler to the "blur" */
  onBlur: (e?: KeyboardEvent | FocusEvent) => void;

  /**
   * Fires when any option/group selections changes.
   * This event is triggered at the same time as other events are being triggered: (`onCheckAll`, `onUncheckAll`, `onClick`, `onOptgroupClick`)
   */
  onChange: (data: {
    eventName: string;
    item?: ClickedGroup | ClickedOption;
    selection: { labels: string[]; values: Array<string | number | boolean> };
  }) => void;

  /** Fires when an optgroup label is clicked on. */
  onOptgroupClick: (view: MultipleSelectView) => void;

  /** Fires when a checkbox is clicked but before any code is executed internally. Return `false` to prevent the click (onClick) event for being processed. */
  onBeforeClick: (view: MultipleSelectView) => boolean;

  /** Fires when a checkbox is checked or unchecked. */
  onClick: (view: MultipleSelectView) => void;

  /** Fires when a checkbox filter is changed. */
  onFilter: (text?: string) => void;

  /** Fires when the search filter is cleared. */
  onFilterClear: () => void;

  /** Custom parser to remove diacritic signs (accents) from characters when filtering select list. */
  diacriticParser: (text: string) => string;

  /**
   * Sanitizes HTML code, for example `<script>`, to prevents XSS attacks.
   * A library like DOM Purify could be used to sanitize html code, for example: `sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml || '')`
   */
  sanitizer?: (html: string) => string | TrustedHTML;
}
