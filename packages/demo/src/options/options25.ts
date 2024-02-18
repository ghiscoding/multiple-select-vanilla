import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms.push(multipleSelect('.select1', { showOkButton: true }) as MultipleSelectInstance);
    this.ms.push(multipleSelect('.select2', { showOkButton: true }) as MultipleSelectInstance);
    this.ms.push(multipleSelect('.select3', { showOkButton: true, filter: true }) as MultipleSelectInstance);
    this.ms.push(multipleSelect('.select4', { showOkButton: true }) as MultipleSelectInstance);
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
