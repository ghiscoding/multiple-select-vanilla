import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#select1', {
      useSelectOptionLabel: true,
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#select2', {
      useSelectOptionLabelToHtml: true,
      data: [
        {
          text: '<i class="fa fa-star"></i> January',
          value: '<i class="fa fa-star"></i>1',
          selected: true,
        },
        {
          text: 'February',
          value: '2',
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

    // setTimeout(() => {
    //   this.ms2?.setSelects(['<i class="fa fa-star"></i>1', 2, 3]);
    // }, 2000);
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
  }
}
