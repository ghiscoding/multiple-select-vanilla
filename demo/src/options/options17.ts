import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('.select1');
    multipleSelect('.select2');
    multipleSelect('.select3', { container: '.my-container' });
  }
}
