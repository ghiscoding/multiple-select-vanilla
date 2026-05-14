import DOMPurify from 'dompurify';
import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('#select1', {
      data: [
        {
          value: '<strong style="color: green">Safe HTML value</strong>',
          text: '1. Safe HTML example',
        },
        {
          value: '<img src="x" onerror="alert(`This should be removed by stripScripts`)">Blocked by stripScripts',
          text: '2. Payload blocked by stripScripts',
        },
        {
          value: '<iframe srcdoc="<script>alert(\'XSS\')\n</script>"></iframe>',
          text: '3. Payload that bypasses stripScripts and executes',
        },
      ],
      filter: true,
      placeholder: "Placeholder with cross-site scripting code...&lt;script&gt;alert('XSS')&lt;/script&gt;",
      useSelectOptionLabelToHtml: true,

      // you can use DOMPurify to sanitize data
      // the default sanitizer is the Sanitizer API: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API
      sanitizer: html => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
