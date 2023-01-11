import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect;

    document.querySelector('#focusBtn')!.addEventListener('click', () => {
      ms.focus();
    });

    document.querySelector('#blurBtn')!.addEventListener('click', () => {
      ms.blur();
    });
  }
}
