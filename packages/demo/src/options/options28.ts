import DOMPurify from 'dompurify';
import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      renderOptionLabelAsHtml: true, // without this flag, html code will be showing as plain text
      labelTemplate: el => {
        return `<i class="fa fa-star"></i>${el.getAttribute('label')}`;
      },
      sanitizer: html => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
