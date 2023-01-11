import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      ellipsis: true,
      minimumCountSelected: 5,
    });
  }
}
