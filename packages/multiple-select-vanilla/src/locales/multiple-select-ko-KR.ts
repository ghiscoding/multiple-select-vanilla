/**
 * Multiple Select ko-KR translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Japanese = {
  formatSelectAll() {
    return '[전체선택]';
  },
  formatAllSelected() {
    return '전체 선택됨';
  },
  formatCountSelected(count, total) {
    return `${count}/${total} 선택됨`;
  },
  formatNoMatchesFound() {
    return '검색 결과가 없습니다.';
  },
  formatOkButton() {
    return '닫다';
  },
  formatLazyLoading() {
    return '로딩 중...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['ko-KR'] = Japanese;

export default ms.locales;
