import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect;

    document.querySelector('#openBtn')!.addEventListener('click', () => {
      ms.open();
    });

    document.querySelector('#closeBtn')!.addEventListener('click', () => {
      ms.close();
    });
  }
}
