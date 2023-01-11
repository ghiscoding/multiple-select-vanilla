import { multipleSelect } from 'multiple-select-vanilla';
// import 'multiple-select-vanilla/dist/styles/css/themes/bootstrap.css';
import './example11.scss';

export default class Example {
  mount() {
    multipleSelect('select');
  }
}
