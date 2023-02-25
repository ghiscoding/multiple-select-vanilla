import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  createBtnElm?: HTMLButtonElement | null;
  destroyBtnElm?: HTMLButtonElement | null;
  ms1?: MultipleSelectInstance;

  mount() {
    this.createBtnElm = document.querySelector('#createBtn');
    this.destroyBtnElm = document.querySelector('#destroyBtn');
    this.createBtnElm!.addEventListener('click', this.createMultipleSelect.bind(this));
    this.destroyBtnElm!.addEventListener('click', this.destroyMultiSelect.bind(this));
  }

  createMultipleSelect() {
    this.ms1 = multipleSelect('#select1', {
      name: 'my-select',
      single: false,
      useSelectOptionLabelToHtml: true,
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

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.destroyMultiSelect();
    this.createBtnElm!.removeEventListener('click', this.createMultipleSelect.bind(this));
    this.destroyBtnElm!.removeEventListener('click', this.destroyMultiSelect.bind(this));
  }
}
