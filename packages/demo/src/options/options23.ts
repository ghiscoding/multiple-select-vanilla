import { MultipleSelectInstance, type TextFilter, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
      customFilter: ({ text, search, originalText, originalSearch }: TextFilter) => {
        if (document.querySelector('input')!.checked) {
          return originalText.indexOf(originalSearch) === 0;
        }
        return text.indexOf(search) === 0;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
