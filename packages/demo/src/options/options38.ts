import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

import './options38.scss';

export default class Example {
  pageContentElm: HTMLDivElement | null = null;
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  ms4?: MultipleSelectInstance;
  ms5?: MultipleSelectInstance;
  darkMode = true;

  mount() {
    this.pageContentElm = document.querySelector<HTMLDivElement>('.panel-wm-content');
    this.pageContentElm?.classList.add('dark-mode');
    document.querySelector('#setDarkMode')?.addEventListener('click', () => this.toggleDarkMode());

    this.ms1 = multipleSelect('select[data-test=single]', { darkMode: true }) as MultipleSelectInstance;
    this.ms2 = multipleSelect('select[data-test=radio]', { darkMode: true, singleRadio: true }) as MultipleSelectInstance;
    this.ms3 = multipleSelect('select[data-test=multiple]', { darkMode: true }) as MultipleSelectInstance;
    this.ms4 = multipleSelect('select[data-test=group]', { darkMode: true }) as MultipleSelectInstance;
    this.ms5 = multipleSelect('select[data-test=data1]', {
      darkMode: true,
      dataTest: 'select1',
      filter: true,
      showOkButton: true,
      showClear: true,
      showSearchClear: true,
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

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    // this.ms?.forEach(m => m.refreshOptions({ darkMode: this.darkMode }));
    this.ms1?.refreshOptions({ darkMode: this.darkMode });
    this.ms2?.refreshOptions({ darkMode: this.darkMode });
    this.ms3?.refreshOptions({ darkMode: this.darkMode });
    this.ms4?.refreshOptions({ darkMode: this.darkMode });
    this.ms5?.refreshOptions({ darkMode: this.darkMode });
    if (this.pageContentElm) {
      const action = this.darkMode ? 'add' : 'remove';
      this.pageContentElm.classList[action]('dark-mode');
    }
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms4?.destroy();
    this.ms5?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
    this.ms4 = undefined;
    this.ms5 = undefined;
    this.pageContentElm?.classList.remove('dark-mode');
    document.querySelector('#setDarkMode')?.removeEventListener('click', () => this.toggleDarkMode());
  }
}
