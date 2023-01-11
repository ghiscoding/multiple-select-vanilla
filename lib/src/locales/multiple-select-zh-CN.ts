/**
 * Multiple Select zh-CN translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['zh-CN']: {
    formatSelectAll() {
      return '[全选]';
    },
    formatAllSelected() {
      return '已选择所有记录';
    },
    formatCountSelected(count: number, total: number) {
      return '已从' + total + '条记录中选择' + count + '条';
    },
    formatNoMatchesFound() {
      return '没有找到记录';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
