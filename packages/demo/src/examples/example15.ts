import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

import './example15.scss';

export default class Example {
  ms1: MultipleSelectInstance[] = [];
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;

  mount() {
    document.querySelector('.panel-wm-content')?.classList.add('dark-mode');

    this.ms1 = multipleSelect('.select', { darkMode: true }) as MultipleSelectInstance[];
    this.ms2 = multipleSelect('.radio', { darkMode: true, singleRadio: true }) as MultipleSelectInstance;
    this.ms3 = multipleSelect('.data-select', {
      darkMode: true,
      dataTest: 'select1',
      showOkButton: true,
      data: [
        {
          value: 1,
          text: 'Option 1',
        },
        {
          value: 2,
          text: 'Option 2',
        },
        {
          value: 3,
          text: 'Option 3',
        },
        {
          divider: true,
        },
        {
          value: 4,
          text: 'Option 4',
        },
        {
          value: 5,
          text: 'Option 5',
        },
        {
          value: 6,
          text: 'Option 6',
        },
      ],
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1.forEach(m => m.destroy());
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms1 = [];
    document.querySelector('.panel-wm-content')?.classList.remove('dark-mode');
  }
}
