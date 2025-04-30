import { type MultipleSelectInstance, type OptGroupRowData, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select[data-test=select1]', {
      filter: true,
      preFilter: dataItem => {
        // filter out values 1,3 which are January and March
        return dataItem.value !== '1' && dataItem.value !== '3';
      },
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('select[data-test=select2]', {
      filter: true,
      preFilter: dataItem => {
        // filter out the entire Group2
        return (dataItem as OptGroupRowData).label !== 'Group 2';
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
      preFilter: dataItem => {
        // filter out values 2,4 which are February and April
        return dataItem.value !== '2' && dataItem.value !== '4';
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
      preFilter: dataItem => {
        // filter out the Q1 group
        return (dataItem as OptGroupRowData).label !== 'Q1';
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
