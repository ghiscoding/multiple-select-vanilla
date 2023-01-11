import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1!: MultipleSelect;
  ms2!: MultipleSelect;

  mount() {
    const elm = document.querySelector('#locale') as HTMLSelectElement;
    elm.addEventListener('change', ((event: KeyboardEvent & { target: HTMLSelectElement }) => {
      this.updateLocale(event.target.value);
    }) as EventListener);

    this.ms1 = multipleSelect(elm) as MultipleSelect;
    this.ms2 = multipleSelect('#select') as MultipleSelect;
  }

  updateLocale(locale: string) {
    this.ms2.destroy();
    this.ms2.refreshOptions({ locale });
  }
}
