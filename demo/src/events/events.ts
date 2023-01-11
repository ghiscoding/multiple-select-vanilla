import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  logElm!: HTMLTextAreaElement;

  mount() {
    this.logElm = document.querySelector('textarea') as HTMLTextAreaElement;
    multipleSelect('select', {
      filter: true,
      onOpen: () => {
        this.log('onOpen event fire!\n');
      },
      onClose: () => {
        this.log('onClose event fire!\n');
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
      onOptgroupClick: (view) => {
        this.log('onOptgroupClick event fire! view: ' + JSON.stringify(view) + '\n');
      },
      onClick: (view) => {
        this.log('onClick event fire! view: ' + JSON.stringify(view) + '\n');
      },
      onFilter: (text) => {
        this.log('onFilter event fire! text: ' + text + '\n');
      },
      onAfterCreate: () => {
        this.log('onAfterCreate event fire!\n');
      },
    });
  }

  log(text: string) {
    this.logElm.textContent += text;
    this.logElm.scrollTo(0, this.logElm.scrollHeight);
  }
}
