/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

import { MultipleSelectInstance } from '../MultipleSelectInstance';
import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

(ms.locales as MultipleSelectLocales)['it-IT'] = {
  formatSelectAll() {
    return '[Seleziona tutti]';
  },
  formatAllSelected() {
    return 'Tutti selezionati';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} di ${total} selezionati`;
  },
  formatNoMatchesFound() {
    return 'Nessun risultato';
  },
  formatOkButton() {
    return 'Chiudere';
  },
} as MultipleSelectLocale;

export default ms.locales;
