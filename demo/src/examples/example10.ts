import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    var data = [];
    for (var i = 0; i < 10000; i++) {
      data.push({ value: i, text: i });
      // data.push(i);
    }

    multipleSelect('#select', {
      filter: true,
      // single: true,
      // singleRadio: true,
      // filterAcceptOnEnter: true,
      data,
    });
  }
}
