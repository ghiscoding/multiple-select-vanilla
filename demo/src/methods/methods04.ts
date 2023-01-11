import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect;

    document.querySelector('#enableBtn')!.addEventListener('click', () => {
      ms.enable();
    });

    document.querySelector('#disableBtn')!.addEventListener('click', () => {
      ms.disable();
    });
  }
}
