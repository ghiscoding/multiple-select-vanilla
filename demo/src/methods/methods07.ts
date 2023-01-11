import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect[];

    document.querySelector('#checkAllBtn')!.addEventListener('click', () => {
      for (const m of ms) {
        m.checkAll();
      }
    });

    document.querySelector('#uncheckAllBtn')!.addEventListener('click', () => {
      for (const m of ms) {
        m.uncheckAll();
      }
    });
  }
}
