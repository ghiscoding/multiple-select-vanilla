import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

// 1. load every locale individually
// import 'multiple-select-vanilla/dist/locales/multiple-select-fr-FR';
// import 'multiple-select-vanilla/dist/locales/multiple-select-es-ES';

// 2. or load all locales at once
import 'multiple-select-vanilla/dist/multiple-select-all-locales';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    const elm = document.querySelector('#locale') as HTMLSelectElement;
    elm.addEventListener('change', ((event: KeyboardEvent & { target: HTMLSelectElement }) => {
      this.updateLocale(event.target.value);
    }) as EventListener);

    this.ms1 = multipleSelect(elm) as MultipleSelectInstance;
    this.ms2 = multipleSelect('#select', { showOkButton: true }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
  }

  updateLocale(locale: string) {
    this.ms2?.destroy();
    this.ms2?.refreshOptions({ locale });
  }
}
