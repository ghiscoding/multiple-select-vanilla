import { type MultipleSelectInstance, type OptGroupRowData, type OptionRowData, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('[data-test="select3"]', {
      cssStyler: (row: OptionRowData | OptGroupRowData) => {
        if (+(row?.value ?? 0) === 2) {
          return { backgroundColor: '#6fbeff', color: '#0014ff', fontStyle: 'italic' } as CSSStyleDeclaration;
        }
        if (+(row?.value ?? 0) === 4) {
          return { backgroundColor: '#972727', color: '#fff' } as CSSStyleDeclaration;
        }
        return null;
      },
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('[data-test="select4"]', {
      cssStyler: (row: OptionRowData | OptGroupRowData) => {
        if (row?.type === 'optgroup') {
          return { color: '#787878', fontWeight: 'normal' } as CSSStyleDeclaration;
        }
        if (+(row?.value ?? 0) === 3) {
          return { color: 'purple', textDecoration: 'underline' } as CSSStyleDeclaration;
        }
        return null;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
  }
}
