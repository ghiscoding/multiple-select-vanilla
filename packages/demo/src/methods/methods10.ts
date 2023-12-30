import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    const selectElm = document.querySelector('select') as HTMLSelectElement;
    this.ms1 = multipleSelect(selectElm) as MultipleSelectInstance;

    document.querySelector('#refreshAdd')!.addEventListener('click', () => {
      const inputElm = document.querySelector('#refreshInput') as HTMLInputElement;
      const selectedElm = document.querySelector('#refreshSelected') as HTMLInputElement;
      const disabledElm = document.querySelector('#refreshDisabled') as HTMLInputElement;
      const value = inputElm.value.trim();
      const optElm = document.createElement('option');
      optElm.value = value;
      optElm.text = value;

      if (!value) {
        inputElm.focus();
        return;
      }
      if (selectedElm.checked) {
        optElm.selected = true;
      }
      if (disabledElm.checked) {
        optElm.disabled = true;
      }
      inputElm.value = '';
      selectElm.appendChild(optElm);
      this.ms1?.refresh();
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
