import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select', {
      filter: true,
    }) as MultipleSelect;

    document.querySelector('#getOptions')!.addEventListener('click', () => {
      alert(JSON.stringify(ms.getOptions(), null, 4));
    });
  }
}
