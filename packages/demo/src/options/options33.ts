import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';
import 'multiple-select-vanilla/dist/styles/sass/themes/bootstrap.scss';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select', {
      classes: 'form-control',
      classPrefix: 'form-control',
    }) as MultipleSelectInstance[];
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
