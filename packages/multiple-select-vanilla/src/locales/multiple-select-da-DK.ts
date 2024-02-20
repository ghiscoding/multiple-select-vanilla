/**
 * Multiple Select da-DK translation
 * Author: HThuren<thuren.henrik@gmail.com>
 */

import { MultipleSelectInstance } from '../MultipleSelectInstance';
import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Danish = {
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

(ms.locales as MultipleSelectLocales)['da-DK'] = Danish;

export default ms.locales;
