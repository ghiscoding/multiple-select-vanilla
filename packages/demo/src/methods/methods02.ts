import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
    }) as MultipleSelectInstance;

    document.querySelector('#refreshOptions')!.addEventListener('click', () => {
      this.ms1?.refreshOptions({
        filter: false,
      });
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
