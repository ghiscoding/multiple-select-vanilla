import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select') as MultipleSelectInstance[];

    document.querySelector('#checkBtn')!.addEventListener('click', () => {
      for (const m of this.ms) {
        m.check(2);
      }
    });

    document.querySelector('#uncheckBtn')!.addEventListener('click', () => {
      for (const m of this.ms) {
        m.uncheck(2);
      }
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
