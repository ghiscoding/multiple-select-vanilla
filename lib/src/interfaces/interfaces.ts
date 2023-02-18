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
