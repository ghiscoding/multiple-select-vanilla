/**
 * Multiple Select zh-CN translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Chinese: MultipleSelectLocale = {
  formatSelectAll() {
    return '[全选]';
  },
  formatAllSelected() {
    return '已选择所有记录';
  },
  formatCountSelected(count: number, total: number) {
    return `已从${total}条记录中选择${count}条`;
  },
  formatNoMatchesFound() {
    return '没有找到记录';
  },
  formatOkButton() {
    return '关闭';
  },
  formatLazyLoading() {
    return '加载...';
  },
};

export default Chinese;
