import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      labelTemplate: (el) => {
        return '<i class="fa fa-star"></i>' + el.getAttribute('label');
      },
    });
  }
}
