import { type LocaleKey, type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

// 1. load every locale individually, it could be import in 2 ways (named import OR import on window object)
import { Spanish } from 'multiple-select-vanilla/dist/locales/multiple-select-es-ES'; // named import
// import 'multiple-select-vanilla/dist/locales/multiple-select-es-ES';               // locale on window object

// 2. or load all locales at once
import 'multiple-select-vanilla/dist/locales/multiple-select-all-locales';

export default class Example {
  ms0?: MultipleSelectInstance;
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    const elm = document.querySelector('#locale') as HTMLSelectElement;
    elm.addEventListener('change', ((event: KeyboardEvent & { target: HTMLSelectElement }) => {
      this.updateLocale(event.target.value as LocaleKey);
    }) as EventListener);

    this.ms0 = multipleSelect(elm, {
      maxHeight: 400,
    }) as MultipleSelectInstance;
    this.ms1 = multipleSelect('#dynamic-select', {
      filter: true,
      showOkButton: true,
      dataTest: 'select1',
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('#fixed-import', {
      filter: true,
      showOkButton: true,
      dataTest: 'select2',

      // when using named import
      locale: Spanish,
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms0?.destroy();
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms0 = undefined;
    this.ms1 = undefined;
    this.ms2 = undefined;
  }

  updateLocale(locale: LocaleKey) {
    this.ms1?.destroy();
    this.ms1?.refreshOptions({ locale });
  }
}
