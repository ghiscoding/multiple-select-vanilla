import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      multiple: true,
      hideOptgroupCheckboxes: true,
      multipleWidth: 60,
    });
  }
}
