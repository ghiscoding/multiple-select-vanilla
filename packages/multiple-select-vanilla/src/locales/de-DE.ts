/**
 * Multiple Select de-DE translation
 * Author: Bugi Goertz
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const German: MultipleSelectLocale = {
  formatSelectAll() {
    return '[Alles auswählen]';
  },
  formatAllSelected() {
    return 'Alles ausgewählt';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} von ${total} ausgewählt`;
  },
  formatNoMatchesFound() {
    return 'Keine Ergebnisse';
  },
  formatOkButton() {
    return 'Schließen';
  },
  formatLazyLoading() {
    return 'Jetzt wird geladen...';
  },
};

export default German;
