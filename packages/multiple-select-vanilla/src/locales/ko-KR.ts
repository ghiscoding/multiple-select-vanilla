/**
 * Multiple Select ko-KR translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Korean: MultipleSelectLocale = {
  formatSelectAll() {
    return '[전체선택]';
  },
  formatAllSelected() {
    return '전체 선택됨';
  },
  formatCountSelected(count: number, total: number) {
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
};

export default Korean;
