/**
 * Multiple Select es-ES translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import { MultipleSelectLocale, MultipleSelectLocales } from '../interfaces';

const ms = window.multipleSelect;

(ms.locales as MultipleSelectLocales)['es-ES'] = {
  formatSelectAll() {
    return '[Seleccionar todo]';
  },
  formatAllSelected() {
    return 'Todos seleccionados';
  },
  formatCountSelected(count: number, total: number) {
    return count + ' de ' + total + ' seleccionado';
  },
  formatNoMatchesFound() {
    return 'No se encontraron coincidencias';
  },
  formatOkButton() {
    return 'Cerrar';
  },
} as MultipleSelectLocale;

export default ms.locales;
