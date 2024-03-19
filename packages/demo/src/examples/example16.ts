import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

import avatar1 from './images/avatar1.png';
import avatar2 from './images/avatar2.png';
import avatar3 from './images/avatar3.png';
import avatar4 from './images/avatar4.png';
import avatar5 from './images/avatar5.png';
import './example16.scss';

export default class Example {
  ms?: MultipleSelectInstance;

  mount() {
    this.ms = multipleSelect('.data', {
      data: [
        { value: '1', text: `<img alt="avatar1" src="${avatar1}" class="avatar"> Eric` },
        { value: '2', text: `<img alt="avatar2" src="${avatar2}" class="avatar"> Smith` },
        { value: '3', text: `<img alt="avatar3" src="${avatar3}" class="avatar"> Erika` },
        { value: '4', text: `<img alt="avatar4" src="${avatar4}" class="avatar"> Julia` },
        { value: '5', text: `<img alt="avatar5" src="${avatar5}" class="avatar"> Catherine` },
      ],
      renderOptionLabelAsHtml: true, // without this flag, html code will be showing as plain text
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms?.destroy();
    this.ms = undefined;
  }
}
