export interface OptionRowData {
  label?: string;
  text: string;
  value: string | number | boolean;
  type?: 'option' | 'optgroup';
  divider?: string;
  disabled?: boolean;
  selected?: boolean | number;
  visible?: boolean | string;
  _key?: string;
  _value?: string | number | boolean;
}

export interface OptGroupRowData extends OptionRowData {
  children: Array<OptionRowData | OptGroupRowData>;
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
