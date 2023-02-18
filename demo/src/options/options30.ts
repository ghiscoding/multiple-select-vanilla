import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#select1', {
      autoAdjustDropWidthByTextSize: true,
      autoAdjustDropHeight: true,
      position: 'top',
      showOkButton: true,
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#select2', {
      autoAdjustDropWidthByTextSize: true,
      autoAdjustDropHeight: true,
      position: 'top',
      showOkButton: true,
    }) as MultipleSelectInstance;

    this.ms3 = multipleSelect('#select3', {
      autoAdjustDropWidthByTextSize: true,
      autoAdjustDropHeight: true,
      filter: true,
      position: 'top',
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
  }
}
