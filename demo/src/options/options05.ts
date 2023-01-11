import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      multiple: true,
      width: 500,
      multipleWidth: 70,
      dropWidth: 580,
    });
  }
}
