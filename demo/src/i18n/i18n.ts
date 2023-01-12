import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
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
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
