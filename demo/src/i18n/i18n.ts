import { multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  mount() {
    multipleSelect('select', {
      filter: true,
      formatSelectAll() {
        return '[Tout sélectionner]';
      },
      formatAllSelected() {
        return 'Tous sélectionnés';
      },
      formatCountSelected(count: number, total: number) {
        return count + ' de ' + total + ' sélectionnés';
      },
      formatNoMatchesFound() {
        return 'Aucun résultat';
      },
    });
  }
}
