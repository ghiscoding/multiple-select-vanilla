import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  buildBtnElm?: HTMLButtonElement | null;
  destroyBtnElm?: HTMLButtonElement | null;
  ms1?: MultipleSelectInstance | null;

  mount() {
    this.buildBtnElm = document.querySelector('#buildBtn');
    this.destroyBtnElm = document.querySelector('#destroyBtn');
    this.destroyBtnElm!.addEventListener('click', this.destroyMultiSelect.bind(this));
    this.buildBtnElm!.addEventListener('click', this.createMultipleSelect.bind(this));

    this.ms1 = multipleSelect('select') as MultipleSelectInstance | null;
  }

  createMultipleSelect() {
    this.ms1 = multipleSelect('select') as MultipleSelectInstance;
  }

  destroyMultiSelect() {
    this.ms1?.destroy();
    this.ms1 = null; // remove detached element
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.destroyMultiSelect();
    this.buildBtnElm!.removeEventListener('click', this.destroyMultiSelect.bind(this));
    this.destroyBtnElm!.removeEventListener('click', this.createMultipleSelect.bind(this));
  }
}
