import { multipleSelect, MultipleSelectInstance, TextFilter } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
      renderOptionLabelAsHtml: true, // without this flag, html code will be showing as plain text
      textTemplate: (el) => {
        return `<i class="fa fa-star"></i>${el.innerHTML}`;
      },
      customFilter: ({ search, text }: TextFilter) => {
        // create a temp html element to get only the text to search against
        const divElm = document.createElement('div');
        divElm.innerHTML = text;
        return divElm.textContent?.includes(search) ?? true;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
