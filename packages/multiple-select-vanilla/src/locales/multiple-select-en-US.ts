/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const English = {
  formatSelectAll() {
    return '[Select all]';
  },
  formatAllSelected() {
    return 'All selected';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} of ${total} selected`;
  },
  formatNoMatchesFound() {
    return 'No matches found';
  },
  formatOkButton() {
    return 'OK';
  },
  formatLazyLoading() {
    return 'Loading...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['en-US'] = English;

export default ms.locales;
