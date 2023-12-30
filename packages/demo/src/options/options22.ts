import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select', {
      filterByDataLength: 10,
    }) as MultipleSelectInstance[];
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach((m) => m.destroy());
    this.ms = [];
  }
}
