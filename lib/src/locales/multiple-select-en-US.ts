/**
 * Multiple Select en-US translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import Constants from '../constants';

const locales = {
  ['en-US']: {
    formatSelectAll() {
      return '[Select all]';
    },
    formatAllSelected() {
      return 'All selected';
    },
    formatCountSelected(count: number, total: number) {
      return count + ' of ' + total + ' selected';
    },
    formatNoMatchesFound() {
      return 'No matches found';
    },
  },
};

export default Object.assign(Constants.LOCALES, locales);
