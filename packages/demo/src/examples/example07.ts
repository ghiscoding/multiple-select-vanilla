import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  btnElm?: HTMLButtonElement | null;
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('#select1, #select2') as MultipleSelectInstance[];
    this.ms3 = multipleSelect('#select3', {
      lazyData: () => {
        return new Promise(resolve => {
          resolve({ '1': 'First', '2': 'Second', '3': 'Third', '4': 'Fourth', '5': 'Fifth' });
        });
      },
    });
    this.btnElm = document.querySelector('.submit7');
    this.btnElm!.addEventListener('click', this.clickListener);
  }

  unmount() {
    this.btnElm!.removeEventListener('click', this.clickListener);

    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
    this.ms3.destroy();
    this.ms = undefined;
  }

  clickListener = () => {
    const serialized = this.serialize(document.querySelector('form'));
    alert(serialized);
  };

  serialize(form: any) {
    const requestArray: any[] = [];
    form.querySelectorAll('[name]').forEach((elem: HTMLSelectElement) => {
      const selectedOptions = Array.from(elem.selectedOptions);
      for (const selectedOption of selectedOptions) {
        requestArray.push(`${elem.name}=${selectedOption.value}`);
      }
    });
    return requestArray.length > 0 ? requestArray.join('&') : false;
  }
}
