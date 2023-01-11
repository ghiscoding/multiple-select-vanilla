import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('#basic', {
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
    });

    multipleSelect('#object', {
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
    });

    multipleSelect('#string', {
      data: ['January', 'February', 'March'],
    });

    multipleSelect('#number', {
      data: [1, 2, 3],
    });

    multipleSelect('#group', {
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
    });
  }
}
