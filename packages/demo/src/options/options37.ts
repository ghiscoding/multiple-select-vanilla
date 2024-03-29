import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select[data-test=select1]') as MultipleSelectInstance;
    this.ms2 = multipleSelect('select[data-test=select2]') as MultipleSelectInstance;
    this.ms3 = multipleSelect('select[data-test=select3]') as MultipleSelectInstance;
    this.ms4 = multipleSelect('select[data-test=select4]', { filter: true }) as MultipleSelectInstance;
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
