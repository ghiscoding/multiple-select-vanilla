import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('#select1');
    multipleSelect('#select2', {
      placeholder: 'Here is the placeholder via javascript',
    });
  }
}
