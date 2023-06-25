export type OptionDataObject = { [value: string]: number | string | boolean };

export interface OptionRowDivider {
  divider: boolean;
}

export interface OptionRowData {
  text: string;
  value: string | number | boolean;
  divider?: string;
  disabled?: boolean;
  selected?: boolean | number;
  visible?: boolean | string;
  type?: 'option' | 'optgroup';
  _key?: string;
  _value?: string | number | boolean;
}

export interface OptGroupRowData extends Omit<OptionRowData, 'text' | 'value'> {
  label: string;
  value?: string | number | boolean;
  children: Array<OptionRowData>;
}

export interface VirtualScrollOption {
  rows: string[];
  scrollEl: HTMLElement;
  contentEl: HTMLElement;
  callback: () => void;
  sanitizer?: (dirtyHtml: string) => string;
}

export interface MultipleSelectLocale {
  /** Customize the formatted text "All Selected" when using custom locale. */
  formatAllSelected(): string;

  /** Customize the formatted text "x of y selected" when using custom locale. */
  formatCountSelected(selectedCount: number, totalCount: number): string;

  /** For the "No Matches Found" text when nothing is found while filtering the dropdown */
  formatNoMatchesFound(): string;

  /** Customize the formatted text "OK" showing at the bottom of the drop. */
  formatOkButton(): string;

  /** For the "Select All" checkbox text */
  formatSelectAll(): string;
}

export interface MultipleSelectLocales {
  [localeKey: string]: MultipleSelectLocale;
}

export interface LabelFilter {
  label: string;
  search: string;
  originalLabel: string;
  originalSearch: string;
  row: OptionRowData | OptGroupRowData;
}

export interface TextFilter {
  text: string;
  search: string;
  originalText: string;
  originalSearch: string;
  row: OptionRowData | OptGroupRowData;
  parent?: OptionRowData | OptGroupRowData;
}
