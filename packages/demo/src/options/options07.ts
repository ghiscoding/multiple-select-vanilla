import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    const numberElm = document.querySelector('#number') as HTMLInputElement;

    this.ms = multipleSelect('select', {
      maxHeight: +numberElm.value,
      maxHeightUnit: 'row',
    }) as MultipleSelectInstance[];

    numberElm.addEventListener('change', () => {
      this.ms.forEach(m => {
        m.refreshOptions({
          maxHeight: +numberElm.value,
          maxHeightUnit: 'row',
        });
      });
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
