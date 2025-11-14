import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  logElm!: HTMLTextAreaElement;
  ms1?: MultipleSelectInstance;

  mount() {
    this.logElm = document.querySelector('textarea') as HTMLTextAreaElement;
    this.ms1 = multipleSelect('select', {
      filter: true,
      showSearchClear: true,
      onBeforeOpen: () => {
        this.log('onBeforeOpen event fire!\n');
      },
      onOpen: () => {
        this.log('onOpen event fire!\n');
      },
      onBeforeClose: reason => {
        this.log(`onBeforeClose event fire! Reason: "${reason}"\n`);

        // - returning false would preventing from closing the drop
        // return false;
      },
      onClose: reason => {
        this.log(`onClose event fire! Reason: "${reason}"\n`);
      },
      onCheckAll: () => {
        this.log('onCheckAll event fire!\n');
      },
      onUncheckAll: () => {
        this.log('onUncheckAll event fire!\n');
      },
      onFocus: () => {
        this.log('onFocus event fire!\n');
      },
      onBlur: () => {
        this.log('onBlur event fire!\n');
      },
      onOptgroupClick: view => {
        this.log(`onOptgroupClick event fire! view: ${JSON.stringify(view)}\n`);
      },
      onClick: view => {
        this.log(`onClick event fire! view: ${JSON.stringify(view)}\n`);
      },
      onFilter: text => {
        this.log(`onFilter event fire! text: ${text}\n`);
      },
      onFilterClear: () => {
        this.log('onFilterClear event fire!\n');
      },
      onAfterCreate: () => {
        this.log('onAfterCreate event fire!\n');
      },
      onChange: data => {
        this.log(`onChange event fire! data: ${JSON.stringify(data)}\n`);
      },
    }) as MultipleSelectInstance;
  }

  log(text: string) {
    this.logElm.textContent += text;
    this.logElm.scrollTo(0, this.logElm.scrollHeight);
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
