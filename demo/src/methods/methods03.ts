import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
    }) as MultipleSelectInstance;

    document.querySelector('#setSelectsBtn')!.addEventListener('click', () => {
      this.ms1?.setSelects([1, 3]);
    });

    document.querySelector('#getSelectsBtn')!.addEventListener('click', () => {
      alert(`Selected values: ${  this.ms1?.getSelects()}`);
      alert(`Selected texts: ${  this.ms1?.getSelects('text')}`);
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
