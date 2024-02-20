/* eslint-disable @typescript-eslint/indent */
export type InferDOMType<T> = T extends CSSStyleDeclaration ? Partial<CSSStyleDeclaration> : T extends infer R ? R : any;
/* eslint-enable @typescript-eslint/indent */

export type OptionDataObject = { [value: string]: number | string | boolean };

export interface OptionRowDivider {
  divider: boolean;
}

export interface HtmlStruct {
  tagName: keyof HTMLElementTagNameMap;
  props?: any;
  attrs?: Record<any, string>;
  children?: HtmlStruct[];
}

export interface OptionRowData {
  text: string;
  value: string | number | boolean;
  classes?: string;
  divider?: string;
  disabled?: boolean;
  selected?: boolean | number;
  visible?: boolean | string;
  title?: string;
  type?: 'option' | 'optgroup';
  _data?: { divider?: string };
  _key?: string;
  _value?: string | number | boolean;
}

export interface OptGroupRowData extends Omit<OptionRowData, 'text' | 'value'> {
  label: string;
  value?: string | number | boolean;
  children: Array<OptionRowData>;
}

export interface VirtualCache {
  bottom: number;
  data: HtmlStruct[];
  scrollTop: number;
  top: number;
}

export interface VirtualScrollOption {
  rows: HtmlStruct[];
  scrollEl: HTMLElement;
  contentEl: HTMLElement;
  callback: () => void;
  sanitizer?: (html: string) => string | TrustedHTML;
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
