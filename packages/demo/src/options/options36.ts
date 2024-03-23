import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    const data1 = [];
    const data2 = [];
    for (let i = 1; i <= 25; i++) {
      data1.push({ text: `Title ${i}`, value: i });
    }
    for (let i = 1; i <= 2000; i++) {
      data2.push({ text: `<i class="fa fa-star"></i> Task ${i}`, value: i });
    }

    this.ms1 = multipleSelect('#select1', {
      data: data1,
      infiniteScroll: true,
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#select2', {
      filter: true,
      data: data2,
      showSearchClear: true,
      useSelectOptionLabelToHtml: true,
      infiniteScroll: true,
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
  }
}
