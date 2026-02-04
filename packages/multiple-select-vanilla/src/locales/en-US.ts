/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const English: MultipleSelectLocale = {
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
  formatLazyFailed() {
    return 'Failed to load data';
  },
};

export default English;
