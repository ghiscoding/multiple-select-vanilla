import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select', {
      filter: true,
    }) as MultipleSelect;

    document.querySelector('#refreshOptions')!.addEventListener('click', () => {
      ms.refreshOptions({
        filter: false,
      });
    });
  }
}
