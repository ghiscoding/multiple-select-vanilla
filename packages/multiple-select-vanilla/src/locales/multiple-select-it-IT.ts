/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

import type { MultipleSelectInstance } from '../MultipleSelectInstance.js';
import type { MultipleSelectLocale, MultipleSelectLocales } from '../models/locale.interface.js';

const ms =
  typeof window !== 'undefined' && window.multipleSelect !== undefined
    ? window.multipleSelect
    : ({ locales: {} as MultipleSelectLocales } as Partial<MultipleSelectInstance>);

export const Italian = {
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
  formatLazyLoading() {
    return 'Caricamento...';
  },
} as MultipleSelectLocale;

(ms.locales as MultipleSelectLocales)['it-IT'] = Italian;

export default ms.locales;
