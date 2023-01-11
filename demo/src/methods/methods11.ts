import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    let ms = multipleSelect('select') as MultipleSelect | null;

    document.querySelector('#destroyBtn')!.addEventListener('click', () => {
      ms?.destroy();
      ms = null; // remove detached element
    });

    document.querySelector('#buildBtn')!.addEventListener('click', () => {
      ms = multipleSelect('select') as MultipleSelect;
    });
  }
}
