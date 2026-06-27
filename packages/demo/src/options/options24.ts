import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

import './options24.scss';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select', {
      showClear: true,
    }) as MultipleSelectInstance[];
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
