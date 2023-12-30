/**
 * Multiple Select cz-CS translation
 * Author: Matej Puhony<info@puhony.eu>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms = window.multipleSelect;

(ms.locales as MultipleSelectLocales)['cz-CS'] = {
  formatSelectAll() {
    return '[Vybrat vše]';
  },
  formatAllSelected() {
    return 'Vše vybráno';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} z ${total} vybráno`;
  },
  formatNoMatchesFound() {
    return 'Nebylo nalezeno';
  },
  formatOkButton() {
    return 'Zavřít';
  },
} as MultipleSelectLocale;

export default ms.locales;
