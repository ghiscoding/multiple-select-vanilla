import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      textTemplate: (el) => {
        return '<i class="fa fa-star"></i>' + el.innerHTML;
      },
    });
  }
}
