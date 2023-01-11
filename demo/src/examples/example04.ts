import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('.select');
    multipleSelect('.data', {
      data: [
        {
          value: 1,
          text: 'Options 1',
          selected: true,
        },
        {
          value: 2,
          text: 'Options 2',
        },
        {
          value: 3,
          text: 'Options 3',
        },
      ],
    });
  }
}
