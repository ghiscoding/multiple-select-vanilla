import { multipleSelect, MultipleSelectInstance, TextFilter } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  btnEnableElm?: HTMLButtonElement | null;
  btnDisableElm?: HTMLButtonElement | null;

  mount() {
    this.ms1 = multipleSelect('#basic', {
      filter: true,
      displayTitle: true,
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

    this.ms2 = multipleSelect('#from-data', {
      dataTest: 'select1',
      displayTitle: true,
      renderOptionLabelAsHtml: true,
      data: [
        { value: `50"`, text: `50"` },
        { value: `44'`, text: `44'` },
        { value: `33`, text: `<span style="font-weight:bold">33</span>` },
      ],
    }) as MultipleSelectInstance;

    this.btnEnableElm = document.querySelector('#enableRenderHtml') as HTMLButtonElement;
    this.btnEnableElm.addEventListener('click', () => this.renderAsHtmlHandler(true));

    this.btnDisableElm = document.querySelector('#disableRenderHtml') as HTMLButtonElement;
    this.btnDisableElm.addEventListener('click', () => this.renderAsHtmlHandler(false));
  }

  renderAsHtmlHandler(enabled: boolean) {
    this.ms1?.refreshOptions({ renderOptionLabelAsHtml: enabled });
    this.ms2?.refreshOptions({ renderOptionLabelAsHtml: enabled });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.btnEnableElm?.removeEventListener('click', () => this.renderAsHtmlHandler(true));
    this.btnDisableElm?.removeEventListener('click', () => this.renderAsHtmlHandler(false));
  }
}
