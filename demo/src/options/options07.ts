import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const numberElm = document.querySelector('#number') as HTMLInputElement;

    const ms = multipleSelect('select', {
      maxHeight: +numberElm.value,
      maxHeightUnit: 'row',
    }) as MultipleSelect[];

    numberElm.addEventListener('change', () => {
      ms.forEach((m) => {
        m.refreshOptions({
          maxHeight: +numberElm.value,
          maxHeightUnit: 'row',
        });
      });
    });
  }
}
