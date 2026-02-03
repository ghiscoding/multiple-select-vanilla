/**
 * Multiple Select es-ES translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */

import type { MultipleSelectLocale } from '../models/locale.interface.js';

export const Spanish: MultipleSelectLocale = {
  formatSelectAll() {
    return '[Seleccionar todo]';
  },
  formatAllSelected() {
    return 'Todos seleccionados';
  },
  formatCountSelected(count: number, total: number) {
    return `${count} de ${total} seleccionado`;
  },
  formatNoMatchesFound() {
    return 'No se encontraron coincidencias';
  },
  formatOkButton() {
    return 'Cerrar';
  },
  formatLazyLoading() {
    return 'Cargando...';
  },
};

export default Spanish;
