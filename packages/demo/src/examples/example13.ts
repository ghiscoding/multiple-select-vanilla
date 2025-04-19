import DOMPurify from 'dompurify';
import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  createBtnElm?: HTMLButtonElement | null;
  destroyBtnElm?: HTMLButtonElement | null;
  modifyBtnElm?: HTMLButtonElement | null;
  ms1?: MultipleSelectInstance;

  mount() {
    this.createBtnElm = document.querySelector('#createBtn');
    this.destroyBtnElm = document.querySelector('#destroyBtn');
    this.modifyBtnElm = document.querySelector('#modifyBtn');
    this.createBtnElm!.addEventListener('click', this.createMultipleSelect.bind(this));
    this.destroyBtnElm!.addEventListener('click', this.destroyMultiSelect.bind(this));
    this.modifyBtnElm!.addEventListener('click', this.modifyData.bind(this));
  }

  createMultipleSelect() {
    this.ms1 = multipleSelect('#select1', {
      name: 'my-select',
      single: false,
      useSelectOptionLabelToHtml: true,
      sanitizer: html => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
      data: [
        {
          text: '<i class="fa fa-star"></i> January',
          value: 1,
        },
        {
          text: 'February',
          value: 2,
        },
        {
          text: 'March',
          value: 3,
        },
        {
          text: 'April',
          value: 4,
        },
        {
          text: 'May',
          value: 5,
        },
        {
          text: 'June',
          value: 6,
        },
        {
          text: 'July',
          value: 7,
        },
        {
          text: 'August',
          value: 8,
        },
        {
          text: 'September',
          value: 9,
        },
        {
          text: 'October',
          value: 10,
        },
        {
          text: 'November',
          value: 11,
        },
        {
          text: 'December',
          value: 12,
        },
      ],
    }) as MultipleSelectInstance;

    this.ms1.setSelects([1, 3, 4]);
  }

  destroyMultiSelect() {
    console.log('destroy');
    this.ms1?.destroy();
    this.ms1 = undefined; // remove detached element
  }

  modifyData() {
    this.ms1?.refreshOptions({
      data: [
        { value: 1, text: 'Options 1' },
        { value: 2, text: 'Options 2' },
        { value: 3, text: 'Options 3', selected: true },
        { value: 4, text: 'Options 4', selected: true },
        { value: 5, text: 'Options 5' },
      ],
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.destroyMultiSelect();
    this.createBtnElm!.removeEventListener('click', this.createMultipleSelect.bind(this));
    this.destroyBtnElm!.removeEventListener('click', this.destroyMultiSelect.bind(this));
    this.modifyBtnElm!.removeEventListener('click', this.modifyData.bind(this));
  }
}
