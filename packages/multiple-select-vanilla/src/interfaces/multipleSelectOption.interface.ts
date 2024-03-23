import type { LabelFilter, OptGroupRowData, OptionRowData, OptionRowDivider, TextFilter } from './interfaces';
import type { LocaleKey, MultipleSelectLocale } from './locale.interface';

export interface MultipleSelectView {
  label: string;
  value: any;
  checked: boolean;
  instance: any;
}

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

  /** HTML container to use for the drop menu, e.g. 'body' */
  container?: string | HTMLElement | null;

  /** Use optional string to override selected count text "# of % selected" instead of `formatCountSelected()`, the latter should be preferred */
  countSelectedText?: string;

  /** Dark Mode will add `.ms-dark-mode` CSS class to drop and parent elements */
  darkMode?: boolean;

  /** provide custom data */
  data?: { [value: string]: number | string | boolean } | Array<number | string | boolean | OptionRowData | OptionRowDivider | OptGroupRowData>;

  /** Add "data-test" attribute to the "ms-parent" element */
  dataTest?: string;

  /** Delimiter to be displayed between each option */
  displayDelimiter: string;

  /** Title that can be displayed in the dropdown */
  displayTitle?: boolean;

  /** Display selected values on the element. By default this option is set to false. */
  displayValues?: boolean;

  /** Define the width of the dropdown list */
  dropWidth?: number;

  /** Add `…` after selected options if minimumCountSelected is set. Overrides countSelected option.By default this option is set to false. */
  ellipsis?: boolean;

  /** Whether or not Multiple Select show a search field to search through checkbox items.By default this option is set to false. */
  filter?: boolean;

  /** Accept a filter by typing Enter on the keyboard. By default this option is set to false. */
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

  /** Hide the option groupd checkboses. By default this is set to false. */
  hideOptgroupCheckboxes?: boolean;

  /** Defaults to False, Infinite Scroll will automatically reset the list (scroll back to top) whenever the scroll reaches the last item (end of the list) */
  infiniteScroll?: boolean;

  /** Whether or not Multiple Select open the select dropdown. */
  isOpen?: boolean;

  /** Keep the select dropdown always open.By default this option is set to false. */
  keepOpen?: boolean;

  /**
   * For accessibility, you can provide a Label Id to be associated to the select button element (`.ms-choice`).
   * An example can be `labelId: "custom-label"` which will be assigned to `id` and `aria-labelledby` attributes of the `.ms-choice` button.
   */
  labelId?: string;

  /** Optional Locale */
  locale?: LocaleKey | MultipleSelectLocale;

  /** Defaults to 250, define the maximum height property of the dropdown list. */
  maxHeight: number;

  /** maxHeight unit type */
  maxHeightUnit?: string;

  /** Defaults to 150, define the minimum height property of the dropdown list. */
  minHeight: number;

  /** Defaults to 500, define the maximum width of the drop when using the "autoAdjustDropWidthByTextSize: true" flag. */
  maxWidth?: number;

  /** Define the minimum width of the drop when using the "autoAdjustDropWidthByTextSize: true" flag. */
  minWidth?: number;

  /** countSelected will be shown only if more than X items where selected.By default this option is set to 3. */
  minimumCountSelected: number;

  /** Whether or not Multiple Select show multiple items in a row.By default this option is set to false. */
  multiple?: boolean;

  /** Multiple Select show multiple items width.By default this option is set to 80. */
  multipleWidth?: number;

  /** Provide a name to the multiple select element. By default this option is set to ''. */
  name?: string;

  /** Defaults to True, arrow navigation (and mouse hover) to highlight and possibly change selected option(s). */
  navigationHighlight?: boolean;

  /** Use optional string to override text when filtering "No matches found" instead of `formatNoMatchesFound()`, the latter should be preferred */
  noMatchesFoundText?: string;

  /** Use optional string to override "OK" button text instead of `formatOkButton()`, the latter should be preferred */
  okButtonText?: string;

  /** Should we open the dropdown while hovering the select? */
  openOnHover?: boolean;

  /** A placeholder value can be defined and will be displayed until you select a item. */
  placeholder?: string;

  /** Defines the position of select dropdown, can only be bottom or top. By default this option is set to bottom. */
  position: 'bottom' | 'top';

  /** Defaults to False, should we render option labels as html? */
  renderOptionLabelAsHtml?: boolean;

  /** Whether or not Multiple Select show select all checkbox. */
  selectAll?: boolean;

  /** Use optional string to override "Select All" checkbox text instead of `formatSelectAll()`, the latter should be preferred */
  selectAllText?: string;

  /** Whether or not Multiple Select allows you to select only one option.By default this option is set to false. */
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

  /** Defaults to False, when set to True it will use the <option label=""> (from select option value) that can be used to display selected options. */
  useSelectOptionLabel?: boolean;

  /** Defaults to False, same as "useSelectOptionLabel" but will also render html */
  useSelectOptionLabelToHtml?: boolean;

  /**
   * Defaults to True, Virtual Scroll is used to improve performance with large set of data. The concept is to only render a subset
   * of the options (~200) at a time to avoid polluting the DOM, it will also consume less memory and improve overall performance of your application.
   */
  virtualScroll?: boolean;

  /** Define the width property of the dropdown list, support a percentage setting.By default this option is set to undefined. Which is the same as the select input field. */
  width?: number | string;

  // --
  // Methods
  // ------------

  /** The item styler function, return style string to customize the item style such as background: red. The function take one parameter: value. */
  cssStyler: (value: OptionRowData | OptGroupRowData) => CSSStyleDeclaration | null;

  /** Customize the filter method, for example we use startWith */
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

  /** Fires when instance destroy method is being called, when a hard destroy is enabled it will remove the DOM element and also destroy its instance. */
  onDestroy: (options: { hardDestroy: boolean }) => void;

  /** Fires after instance was destroyed. */
  onAfterDestroy: (options: { hardDestroy: boolean }) => void;
  onDestroyed: (options: { hardDestroy: boolean }) => void;

  /** (internal usage only) Fires when instance is being hard destroyed. */
  onHardDestroy: () => void;

  /** (internal usage only) Fires after instance was being hard destroyed. */
  onAfterHardDestroy: () => void;

  /** Fires when the dropdown list is open. */
  onOpen: () => void;

  /** Fires when the filter is cleared. */
  onClear: () => void;

  /** Fires when the dropdown list is close. */
  onClose: () => void;

  /** Fires when all the options are checked by either clicking the `Select all` checkbox, or when the `checkall` method is programatically called. */
  onCheckAll: () => void;

  /** Fires when all the options are unchecked by either clicking the `Select all` checkbox, or when the `uncheckall` method is programatically called. */
  onUncheckAll: () => void;

  /** Bind an event handler to the “focus”. */
  onFocus: () => void;

  /** Bind an event handler to the “blur” */
  onBlur: () => void;

  /** Fires when a an optgroup label is clicked on. */
  onOptgroupClick: (view: MultipleSelectView) => void;

  /** Fires before a checkbox is clicked. Return `false` to prevent the click event. */
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
