import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect[];

    document.querySelector('#checkBtn')!.addEventListener('click', () => {
      for (const m of ms) {
        m.check(2);
      }
    });

    document.querySelector('#uncheckBtn')!.addEventListener('click', () => {
      for (const m of ms) {
        m.uncheck(2);
      }
    });
  }
}
