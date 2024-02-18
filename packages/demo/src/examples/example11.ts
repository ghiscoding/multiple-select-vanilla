import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';
// import 'multiple-select-vanilla/dist/styles/css/themes/bootstrap.css';
import './example11.scss';

export default class Example {
  ms: MultipleSelectInstance[] = [];

  mount() {
    this.ms = multipleSelect('select') as MultipleSelectInstance[];
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms.forEach(m => m.destroy());
    this.ms = [];
  }
}
