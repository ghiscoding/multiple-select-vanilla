import { multipleSelect, OptionRowData, OptGroupRowData, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#basic', {
      styler: (row: OptionRowData | OptGroupRowData) => {
        if (+(row?.value ?? 0) === 1) {
          return 'background-color: #ffee00; color: #ff0000;';
        }
        if (+(row?.value ?? 0) === 6) {
          return 'background-color: #000; color: #fff;';
        }
        return null;
      },
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#group', {
      styler: (row: OptionRowData | OptGroupRowData) => {
        if (row?.type === 'optgroup') {
          return 'color: #777; font-weight: normal;';
        }
        if (+(row?.value ?? 0) === 1) {
          return 'color: blue;';
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
