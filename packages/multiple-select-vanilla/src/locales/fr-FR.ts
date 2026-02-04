/**
 * Multiple Select fr-FR translation
 * Author: Francis Perron <francis@hivetek.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const French: MultipleSelectLocale = {
  formatSelectAll() {
    return '[Tout sélectionner]';
  },
  formatAllSelected() {
    return 'Tous sélectionnés';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} de ${total} sélectionnés`;
  },
  formatNoMatchesFound() {
    return 'Aucun résultat';
  },
  formatOkButton() {
    return 'Fermer';
  },
  formatLazyLoading() {
    return 'Chargement...';
  },
  formatLazyFailed() {
    return 'Échec de chargement des données';
  },
};

export default French;
