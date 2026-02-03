import { type MultipleSelectInstance, multipleSelect, type OptGroupRowData, type OptionRowData } from 'multiple-select-vanilla';

export default class Example {
  ms1?: MultipleSelectInstance;

  mount() {
    this.ms1 = multipleSelect('select', {
      filter: true,
    }) as MultipleSelectInstance;

    // Basic array
    document.querySelector('#setData-basic')!.addEventListener('click', () => {
      const newData = [
        { text: 'Basic One', value: 'basic1' },
        { text: 'Basic Two', value: 'basic2' },
        { text: 'Basic Three', value: 'basic3' },
      ];
      this.ms1!.setData(newData);
    });

    // Object
    document.querySelector('#setData-object')!.addEventListener('click', () => {
      const newData = {
        obj1: 'Object One',
        obj2: 'Object Two',
        obj3: 'Object Three',
      };
      this.ms1!.setData(newData);
    });

    // String array
    document.querySelector('#setData-string')!.addEventListener('click', () => {
      const newData = ['String One', 'String Two', 'String Three'];
      this.ms1!.setData(newData);
    });

    // Group array
    document.querySelector('#setData-group')!.addEventListener('click', () => {
      const newData: OptGroupRowData[] = [
        {
          type: 'optgroup',
          label: 'Group 1',
          children: [
            { text: 'Group One', value: 'group1', type: 'option' } as OptionRowData,
            { text: 'Group Two', value: 'group2', type: 'option' } as OptionRowData,
          ],
        },
        {
          type: 'optgroup',
          label: 'Group 2',
          children: [{ text: 'Group Three', value: 'group3', type: 'option' } as OptionRowData],
        },
      ];
      this.ms1!.setData(newData);
    });
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
