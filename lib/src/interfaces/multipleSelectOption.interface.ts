import { MultipleSelectLocale, OptGroupRowData, OptionRowData } from './interfaces';

export interface MultipleSelectOption extends MultipleSelectLocale {
  /** @deprecated @alias `displayTitle` Add a title. By default this option is set to false. */
  addTitle?: boolean;

  /** defaults to 10, when using "autoAdjustDropHeight" we might want to add a bottom (or top) padding instead of taking the entire available space */
  adjustedHeightPadding: number;

  /** Auto-adjust the Drop menu height to fit with available space */
  autoAdjustDropHeight?: boolean;

  /** Auto-adjust the Drop position on the side with the most available space (dropup / dropdown) */
  autoAdjustDropPosition?: boolean;

  /** Drop menu to automatically set its width as the maximum available width of text */
  autoAdjustDropWidthByTextSize?: boolean;

  /** HTML container to use for the drop menu, e.g. 'body' */
  container?: string | HTMLElement | null;

  /** provide custom data */
  data?: any | any[];

  /** Delimiter to use when display the selected options. By default this option is set to `,` */
  delimiter?: string;

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

  /** Whether or not Multiple Select open the select dropdown. */
  isOpen?: boolean;

  /** Keep the select dropdown always open.By default this option is set to false. */
  keepOpen?: boolean;

  /** Optional Locale */
  locale?: string;

  /** Defaults to 250, define the maximum height property of the dropdown list. */
  maxHeight: number;

  /** maxHeight unit type */
  maxHeightUnit?: string;

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

  /** Should we open the dropdown while hovering the select? */
  openOnHover?: boolean;

  /** A placeholder value can be defined and will be displayed until you select a item. */
  placeholder?: string;

  /** Defines the position of select dropdown, can only be bottom or top. By default this option is set to bottom. */
  position: 'bottom' | 'top';

  /** Whether or not Multiple Select show select all checkbox. */
  selectAll?: boolean;

  /** Whether or not Multiple Select allows you to select only one option.By default this option is set to false. */
  single?: boolean;

  /** Alias to `single` */
  singleRadio?: boolean;

  /** Show a clear button, defaults to false */
  showClear?: boolean;

  /** Display the OK button at bottom of the list when using multiple selection to easily close the drop, defaults to false. */
  showOkButton?: boolean;

  /** Defaults to False, when set to True it will use the <option label=""> (from select option value) that can be used to display selected options. */
  useSelectOptionLabel?: boolean;

  /** Defaults to False, same as "useSelectOptionLabel" but will also render html */
  useSelectOptionLabelToHtml?: boolean;

  /** Define the width property of the dropdown list, support a percentage setting.By default this option is set to undefined. Which is the same as the select input field. */
  width?: number | string;

  // --
  // Methods
  // ------------

  /** Customize the filter method, for example we use startWith */
  customFilter: (normalizedText: string, normalizedOriginalText: string, text: string, originalText: string) => boolean;

  /** The item styler function, return style string to custom the item style such as background: red. The function take one parameter: value. */
  styler: (value: OptionRowData | OptGroupRowData) => string | boolean | null;

  /** Returns HTML label attribute of a DOM element */
  labelTemplate: (elm: any) => any;

  /** Returns HTML text template of a DOM element */
  textTemplate: (elm: any) => any;

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

  /** Fires when a checkbox is checked or unchecked. */
  onClick: (view: MultipleSelectView) => void;

  /** Fires when a checkbox filter is changed. */
  onFilter: (text?: string) => void;

  /**
   * Sanitizes HTML code, for example `<script>`, to prevents XSS attacks.
   * A library like DOM Purify could be used to sanitize html code, for example: `sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml || '')`
   */
  sanitizer?: (dirtyHtml: string) => string;
}

export interface MultipleSelectView {
  label: string;
  value: any;
  checked: boolean;
  instance: any;
}
