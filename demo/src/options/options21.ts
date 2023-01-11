import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      filter: true,
      filterAcceptOnEnter: true,
    });
  }
}
