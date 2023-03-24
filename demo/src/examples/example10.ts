import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    const data = [];
    for (let i = 0; i < 10000; i++) {
      data.push(i);
    }

    this.ms1 = multipleSelect('#select', {
      filter: true,
      data,
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
