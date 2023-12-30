import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('.select1') as MultipleSelectInstance;
    this.ms2 = multipleSelect('.select2') as MultipleSelectInstance;
    this.ms3 = multipleSelect('.select3', { container: '.my-container' }) as MultipleSelectInstance;
    this.ms4 = multipleSelect('.select4', { autoAdjustDropPosition: true, container: 'body' }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms4?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
    this.ms4 = undefined;
  }
}
