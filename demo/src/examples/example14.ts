import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1: MultipleSelectInstance[] = [];
  ms2: MultipleSelectInstance[] = [];

  mount() {
    this.ms1 = multipleSelect('.select') as MultipleSelectInstance[];
    this.ms2 = multipleSelect('.data-select', {
      dataTest: 'select1',
      data: [
        {
          value: 1,
          text: 'Option 1',
        },
        {
          value: 2,
          text: 'Option 2',
        },
        {
          value: 3,
          text: 'Option 3',
        },
        {
          divider: true,
        },
        {
          value: 4,
          text: 'Option 4',
        },
        {
          value: 5,
          text: 'Option 5',
        },
        {
          value: 6,
          text: 'Option 6',
        },
      ],
    }) as MultipleSelectInstance[];
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1.forEach((m) => m.destroy());
    this.ms2.forEach((m) => m.destroy());
    this.ms1 = [];
    this.ms2 = [];
  }
}
