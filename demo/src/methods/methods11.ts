import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance | null;

  mount() {
    this.ms1 = multipleSelect('select') as MultipleSelectInstance | null;

    document.querySelector('#destroyBtn')!.addEventListener('click', () => {
      this.ms1?.destroy();
      this.ms1 = null; // remove detached element
    });

    document.querySelector('#buildBtn')!.addEventListener('click', () => {
      this.ms1 = multipleSelect('select') as MultipleSelectInstance;
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
