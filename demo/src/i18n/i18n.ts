import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
      showOkButton: true,

      // 1. you could use the text format callback functions
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
      formatSelectAll() {
        return '[Tout sélectionner]';
      },

      // 2. OR you could also use string pattern instead of the callback functions
      // allSelectedText: 'Tous sélectionnés',
      // countSelectedText: '# de % selectionnés',
      // noMatchesFoundText: 'Aucun résultat',
      // okButtonText: 'Fermer',
      // selectAllText: 'Tout sélectionner',
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
