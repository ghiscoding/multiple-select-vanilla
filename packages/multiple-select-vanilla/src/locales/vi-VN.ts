/**
 * Multiple Select vi-VN translation
 * Author: hoangbaovu <ineo.vn>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Vietnamese: MultipleSelectLocale = {
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
  formatLazyFailed() {
    return 'Không tải được dữ liệu';
  },
};

export default Vietnamese;
