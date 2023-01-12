import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
      customFilter: (label, text, originalLabel, originalText) => {
        if (document.querySelector('input')!.checked) {
          return originalLabel.indexOf(originalText) === 0;
        }
        return label.indexOf(text) === 0;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
