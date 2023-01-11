/**
 * Multiple Select vi-VN translation
 * Author: hoangbaovu <ineo.vn>
 */

import Constants from '../constants';

const locales = {
  ['vi-VN']: {
    formatSelectAll() {
      return '[Tất cả]';
    },
    formatAllSelected() {
      return 'Chọn tất cả';
    },
    formatCountSelected(count: number, total: number) {
      return 'Đã chọn ' + count + ' trong ' + total;
    },
    formatNoMatchesFound() {
      return 'Không tìm thấy kết quả.';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
