/**
 * Multiple Select da-DK translation
 * Author: HThuren<thuren.henrik@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms = window.multipleSelect;

(ms.locales as MultipleSelectLocales)['da-DK'] = {
  formatSelectAll() {
    return '[Vælg alle]';
  },
  formatAllSelected() {
    return 'Alle valgt';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} af ${total} valgt`;
  },
  formatNoMatchesFound() {
    return 'Søgning uden resultat';
  },
  formatOkButton() {
    return 'Lukke';
  },
} as MultipleSelectLocale;

export default ms.locales;
