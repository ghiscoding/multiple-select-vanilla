import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select') as MultipleSelectInstance;

    document.querySelector('#openBtn')!.addEventListener('click', () => {
      this.ms1?.open();
    });

    document.querySelector('#closeBtn')!.addEventListener('click', () => {
      this.ms1?.close();
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
