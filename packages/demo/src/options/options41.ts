import { type MultipleSelectInstance, type OptGroupRowData, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select[data-test=select1]', {
      filter: true,
      preSort: (item1, item2) => {
        // sort by value in reverse order
        const direction = -1; // reverse order
        return (+item1.value! - +item2.value!) * direction;
      },
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('select[data-test=select2]', {
      filter: true,
      preSort: (item1, item2) => {
        // sort by value in reverse order
        const direction = -1; // reverse order
        // @ts-ignore
        if (direction === 1) {
          return (item1 as OptGroupRowData).label < (item2 as OptGroupRowData).label ? -1 : 1;
        }
        return (item1 as OptGroupRowData).label < (item2 as OptGroupRowData).label ? 1 : -1;
      },
    }) as MultipleSelectInstance;

    this.ms3 = multipleSelect('select[data-test=select3]', {
      data: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
      },
      preSort: (item1, item2) => {
        // sort by value in reverse order
        const direction = -1; // reverse order
        return (+item1.value! - +item2.value!) * direction;
      },
    }) as MultipleSelectInstance;

    this.ms4 = multipleSelect('select[data-test=select4]', {
      data: [
        {
          type: 'optgroup',
          label: 'Q1',
          children: [
            {
              text: 'January',
              value: 1,
              selected: true,
            },
            {
              text: 'February',
              value: 2,
            },
            {
              text: 'March',
              value: 3,
            },
          ],
        },
        {
          type: 'optgroup',
          label: 'Q2',
          children: [
            {
              text: 'April',
              value: 4,
            },
            {
              text: 'May',
              value: 5,
            },
            {
              text: 'June',
              value: 6,
            },
          ],
        },
        {
          type: 'optgroup',
          label: 'Q3',
          children: [
            {
              text: 'July',
              value: 7,
            },
            {
              text: 'August',
              value: 8,
            },
            {
              text: 'September',
              value: 9,
            },
          ],
        },
        {
          type: 'optgroup',
          label: 'Q4',
          children: [
            {
              text: 'October',
              value: 10,
            },
            {
              text: 'November',
              value: 11,
            },
            {
              text: 'December',
              value: 12,
            },
          ],
        },
      ],
      preSort: (item1, item2) => {
        // sort by value in reverse order
        const direction = -1; // reverse order
        // @ts-ignore
        if (direction === 1) {
          return (item1 as OptGroupRowData).label < (item2 as OptGroupRowData).label ? -1 : 1;
        }
        return (item1 as OptGroupRowData).label < (item2 as OptGroupRowData).label ? 1 : -1;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms4?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
    this.ms4 = undefined;
  }
}
