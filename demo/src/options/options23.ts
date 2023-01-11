import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      filter: true,
      customFilter: (label, text, originalLabel, originalText) => {
        if (document.querySelector('input')!.checked) {
          return originalLabel.indexOf(originalText) === 0;
        }
        return label.indexOf(text) === 0;
      },
    });
  }
}
