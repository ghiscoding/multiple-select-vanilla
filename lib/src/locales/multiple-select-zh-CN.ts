/**
 * Multiple Select zh-CN translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';
import { MultipleSelectInstance } from '../MultipleSelectInstance';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['zh-CN'] = {
  formatSelectAll() {
    return '[全选]';
  },
  formatAllSelected() {
    return '已选择所有记录';
  },
  formatCountSelected(count: number, total: number) {
    return `已从${  total  }条记录中选择${  count  }条`;
  },
  formatNoMatchesFound() {
    return '没有找到记录';
  },
  formatOkButton() {
    return '关闭';
  },
} as MultipleSelectLocale;

export default ms.locales;
