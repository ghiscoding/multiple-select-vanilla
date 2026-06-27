import DOMPurify from 'dompurify';
import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

import './example16.scss';
import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import avatar5 from './images/avatar5.png';

export default class Example {
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('[data-test=select1]', {
      data: [
        { value: '1', text: `<img alt="avatar1" src="${avatar1}" class="avatar"> Eric` },
        { value: '2', text: `<img alt="avatar2" src="${avatar2}" class="avatar"> Smith` },
        { value: '3', text: `<img alt="avatar3" src="${avatar3}" class="avatar"> Erika` },
        { value: '4', text: `<img alt="avatar4" src="${avatar4}" class="avatar"> Julia` },
        { value: '5', text: `<img alt="avatar5" src="${avatar5}" class="avatar"> Catherine` },
      ],
      renderOptionLabelAsHtml: true, // without this flag, html code will be showing as plain text
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('[data-test=select2]', {
      singleRadio: true,
      renderOptionLabelAsHtml: true, // without this flag, html code will be showing as plain text
      textTemplate: el => {
        const [name, job] = el.textContent!.split('::');
        return `<div class="image-container"><img alt="avatar${el.value}" src="${this.getAvatarByIdx(
          el.value,
        )}" class="avatar"><div class="text-container"><div class="name-section">${name}</div><div class="job-section">${job}</div></div></div>`;
      },
      sanitizer: html => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }),
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
  }

  protected getAvatarByIdx(idx: number | string) {
    let avatar: any;
    switch (+idx) {
      case 1:
        avatar = avatar1;
        break;
      case 2:
        avatar = avatar2;
        break;
      case 3:
        avatar = avatar3;
        break;
      case 4:
        avatar = avatar4;
        break;
      case 5:
        avatar = avatar5;
        break;
    }
    return avatar;
  }
}
