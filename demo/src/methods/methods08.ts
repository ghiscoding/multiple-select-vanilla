import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    const ms = multipleSelect('select') as MultipleSelect[];

    document.querySelector('#checkInvert')!.addEventListener('click', () => {
      for (const m of ms) {
        m.checkInvert();
      }
    });
  }
}
