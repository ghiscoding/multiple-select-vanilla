import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select', {
      filter: true,
    }) as MultipleSelect;

    document.querySelector('#setSelectsBtn')!.addEventListener('click', () => {
      ms.setSelects([1, 3]);
    });

    document.querySelector('#getSelectsBtn')!.addEventListener('click', () => {
      alert('Selected values: ' + ms.getSelects());
      alert('Selected texts: ' + ms.getSelects('text'));
    });
  }
}
