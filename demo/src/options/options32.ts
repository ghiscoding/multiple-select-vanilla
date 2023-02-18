import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#select1', {
      placeholder: 'Placeholder with cross-site scripting code...<img src="not-found" onerror=alert("Hacked")>',
      sanitizer: (dirtyHtml: string) =>
        typeof dirtyHtml === 'string'
          ? // prettier-ignore
            decodeURIComponent(dirtyHtml).replace(/(\b)(on[a-z]+)(\s*)=|javascript:([^>]*)[^>]*|(<\s*)(\/*)script([<>]*).*(<\s*)(\/*)script(>*)|(&lt;)(\/*)(script|script defer)(.*)(&gt;|&gt;">)/gi, '')
          : dirtyHtml,

      // or even better, use dedicated libraries like DOM Purify: https://github.com/cure53/DOMPurify
      // sanitizer: (dirtyHtml) => DOMPurify.sanitize(dirtyHtml || '')
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
