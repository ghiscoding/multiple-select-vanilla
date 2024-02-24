import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  darkMode2 = false;

  mount() {
    this.ms1 = multipleSelect('.select1', { filter: true }) as MultipleSelectInstance;
    this.ms2 = multipleSelect('.select2', { darkMode: this.darkMode2, showOkButton: true }) as MultipleSelectInstance;

    document.querySelector('#refreshOptions')?.addEventListener('click', () => this.refreshOption1());
    document.querySelector('#setDarkMode')?.addEventListener('click', () => this.toggleDarkMode2());
  }

  refreshOption1() {
    this.ms1?.refreshOptions({ filter: false });
  }

  toggleDarkMode2() {
    this.darkMode2 = !this.darkMode2;
    this.ms2?.refreshOptions({ darkMode: this.darkMode2 });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    document.querySelector('#refreshOptions')?.removeEventListener('click', () => this.refreshOption1());
    document.querySelector('#setDarkMode')?.removeEventListener('click', () => this.toggleDarkMode2());
  }
}
