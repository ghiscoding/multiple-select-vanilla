import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;
  ms5?: MultipleSelectInstance;
  ms6?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#basic', {
      dataTest: 'select1',
      data: [
        {
          text: 'January',
          value: 1,
        },
        {
          text: 'February',
          value: 2,
        },
        {
          text: 'March',
          value: 3,
        },
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
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#object', {
      dataTest: 'select2',
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
    }) as MultipleSelectInstance;

    this.ms3 = multipleSelect('#string', {
      dataTest: 'select3',
      data: ['January', 'February', 'March'],
    }) as MultipleSelectInstance;

    this.ms4 = multipleSelect('#number', {
      dataTest: 'select4',
      data: [1, 2, 3],
    }) as MultipleSelectInstance;

    this.ms5 = multipleSelect('#group', {
      dataTest: 'select5',
      data: [
        {
          type: 'optgroup',
          label: 'Group 1',
          children: [
            {
              text: 'January',
              value: 1,
              selected: true,
            },
            {
              text: 'February',
              value: 2,
              disabled: true,
            },
            {
              text: 'March',
              value: 3,
            },
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
          label: 'Group 2',
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
    }) as MultipleSelectInstance;

    this.ms6 = multipleSelect('#single-form', {
      dataTest: 'select6',
      data: [
        {
          text: 'June',
          value: 6,
        },
        {
          text: 'July',
          value: 7,
        },
        {
          text: 'August',
          value: 8,
        },
      ],
    }) as MultipleSelectInstance;

    this.ms7 = multipleSelect('#multiple-form', {
      dataTest: 'select7',
      data: [
        {
          text: 'June',
          value: 6,
        },
        {
          text: 'July',
          value: 7,
        },
        {
          text: 'August',
          value: 8,
        },
      ],
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms4?.destroy();
    this.ms5?.destroy();
    this.ms6?.destroy();
    this.ms7?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
    this.ms4 = undefined;
    this.ms5 = undefined;
    this.ms6 = undefined;
    this.ms7 = undefined;
  }
}
