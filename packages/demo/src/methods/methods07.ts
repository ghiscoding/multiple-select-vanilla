import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select') as MultipleSelectInstance[];

    document.querySelector('#checkAllBtn')!.addEventListener('click', () => {
      for (const m of this.ms) {
        m.checkAll();
      }
    });

    document.querySelector('#uncheckAllBtn')!.addEventListener('click', () => {
      for (const m of this.ms) {
        m.uncheckAll();
      }
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach((m) => m.destroy());
    this.ms = [];
  }
}
