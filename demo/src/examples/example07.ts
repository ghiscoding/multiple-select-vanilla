import { MultipleSelect, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms: MultipleSelect[] = [];

  mount() {
    this.ms = multipleSelect('select') as MultipleSelect[];
    document.querySelector('.submit7')!.addEventListener('click', this.clickListener);
  }

  unmount() {
    document.querySelector('.submit7')!.removeEventListener('click', this.clickListener);
  }

  clickListener = () => {
    const serialized = this.serialize(document.querySelector('form'));
    alert(serialized);
  };

  serialize(form: any) {
    let requestArray: any[] = [];
    form.querySelectorAll('[name]').forEach((elem: HTMLSelectElement) => {
      const selectedOptions = Array.from(elem.selectedOptions);
      for (const selectedOption of selectedOptions) {
        requestArray.push(elem.name + '=' + selectedOption.value);
      }
    });
    return requestArray.length > 0 ? requestArray.join('&') : false;
  }
}
