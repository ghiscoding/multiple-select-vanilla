/**
 * Multiple Select vi-VN translation
 * Author: hoangbaovu <ineo.vn>
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Vietnamese = {
  formatSelectAll() {
    return '[Tất cả]';
  },
  formatAllSelected() {
    return 'Chọn tất cả';
  },
  formatCountSelected(count: number, total: number) {
    return `Đã chọn ${count} trong ${total}`;
  },
  formatNoMatchesFound() {
    return 'Không tìm thấy kết quả.';
  },
  formatOkButton() {
    return 'Đóng';
  },
  formatLazyLoading() {
    return 'Tải...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['vi-VN'] = Vietnamese;

export default ms.locales;
