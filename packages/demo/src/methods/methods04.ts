import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select') as MultipleSelectInstance;

    document.querySelector('#enableBtn')!.addEventListener('click', () => {
      this.ms1?.enable();
    });

    document.querySelector('#disableBtn')!.addEventListener('click', () => {
      this.ms1?.disable();
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
