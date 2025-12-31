import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms!: MultipleSelectInstance;

  mount() {
    this.ms = multipleSelect('#activities', {
      selectAll: false,
    }) as MultipleSelectInstance;

    document.getElementById('trigger')?.addEventListener('click', () => {
      // 💥 Repro du bug avec optgroup + setSelects
      this.ms.setSelects(['515']);
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.destroy();
    this.ms = null as any;
  }
}
