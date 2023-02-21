/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales) = {
  ['en-US']: {
    formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound() {
      return 'No matches found';
    },
    formatOkButton() {
      return 'OK';
    },
  } as MultipleSelectLocale,
};

export default ms.locales;
