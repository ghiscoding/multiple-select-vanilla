import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select') as MultipleSelectInstance;

    document.querySelector('#focusBtn')!.addEventListener('click', () => {
      this.ms1?.focus();
    });

    document.querySelector('#blurBtn')!.addEventListener('click', () => {
      this.ms1?.blur();
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
