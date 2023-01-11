import { multipleSelect, OptionRowData, OptGroupRowData } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('#basic', {
      styler: (row: OptionRowData | OptGroupRowData) => {
        if (+row.value === 1) {
          return 'background-color: #ffee00; color: #ff0000;';
        }
        if (+row.value === 6) {
          return 'background-color: #000; color: #fff;';
        }
        return null;
      },
    });

    multipleSelect('#group', {
      styler: (row: OptionRowData | OptGroupRowData) => {
        if (row.type === 'optgroup') {
          return 'color: #777; font-weight: normal;';
        }
        if (+row.value === 1) {
          return 'color: blue;';
        }
        return null;
      },
    });
  }
}
