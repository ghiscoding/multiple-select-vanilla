import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  multiMs: MultipleSelectInstance[] = [];
  singleMs?: MultipleSelectInstance;

  mount() {
    this.multiMs = multipleSelect('.select') as MultipleSelectInstance[];
    this.singleMs = multipleSelect('.data', {
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
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.multiMs.forEach((m) => m.destroy());
    this.multiMs = [];
    this.singleMs?.destroy();
    this.singleMs = undefined;
  }
}
