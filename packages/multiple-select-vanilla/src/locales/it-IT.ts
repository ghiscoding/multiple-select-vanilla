/**
 * Multiple Select it-IT translation
 * Author: Giuseppe Lodi Rizzini
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Italian: MultipleSelectLocale = {
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
};

export default Italian;
