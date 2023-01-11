import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      multiple: true,
      multipleWidth: 60,
    });
  }
}
