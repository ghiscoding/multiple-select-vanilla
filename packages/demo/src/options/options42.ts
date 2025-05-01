import { type MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
  serverDelayInput?: HTMLInputElement | null;
  resetLazyBtn?: HTMLButtonElement | null;
  ms1?: MultipleSelectInstance;
  ms2?: MultipleSelectInstance;
  ms3?: MultipleSelectInstance;
  serverDelay = 1000;

  changeServerDelay(event: Event) {
    const target = event.target as HTMLInputElement;
    this.serverDelay = +target.value;
    this.createMultipleSelect();
  }

  mount() {
    this.serverDelayInput = document.querySelector('#serverdelay');
    this.resetLazyBtn = document.querySelector('#resetlazy');
    this.serverDelayInput!.addEventListener('keyup', this.changeServerDelay.bind(this));
    this.resetLazyBtn!.addEventListener('click', this.createMultipleSelect.bind(this));
    this.createMultipleSelect();
  }

  createMultipleSelect() {
    console.log('recreate ms-select');
    this.ms1 = multipleSelect('select[data-test=select1]', {
      singleRadio: true,
      lazyData: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve([
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]);
          }, this.serverDelay);
        });
      },
    }) as MultipleSelectInstance;

    this.ms2 = multipleSelect('select[data-test=select2]', {
      lazyData: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve([
              {
                text: 'January',
                value: 1,
              },
              {
                text: 'February',
                value: 2,
                selected: true,
              },
              {
                text: 'March',
                value: 3,
                disabled: true,
              },
              {
                text: 'April',
                value: 4,
                selected: true,
              },
              {
                text: 'May',
                value: 5,
              },
              {
                text: 'June',
                value: 6,
              },
              {
                text: 'July',
                value: 7,
              },
              {
                text: 'August',
                value: 8,
              },
              {
                text: 'September',
                value: 9,
              },
              {
                text: 'October',
                value: 10,
              },
              {
                text: 'November',
                value: 11,
              },
              {
                text: 'December',
                value: 12,
              },
            ]);
          }, this.serverDelay);
        });
      },
    }) as MultipleSelectInstance;

    this.ms3 = multipleSelect('select[data-test=select3]', {
      lazyData: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve([
              {
                type: 'optgroup',
                label: 'Q1',
                children: [
                  {
                    text: 'January',
                    value: 1,
                  },
                  {
                    text: 'February',
                    value: 2,
                    selected: true,
                  },
                  {
                    text: 'March',
                    value: 3,
                    selected: true,
                  },
                ],
              },
              {
                type: 'optgroup',
                label: 'Q2',
                children: [
                  {
                    text: 'April',
                    value: 4,
                  },
                  {
                    text: 'May',
                    value: 5,
                  },
                  {
                    text: 'June',
                    value: 6,
                  },
                ],
              },
              {
                type: 'optgroup',
                label: 'Q3',
                children: [
                  {
                    text: 'July',
                    value: 7,
                  },
                  {
                    text: 'August',
                    value: 8,
                  },
                  {
                    text: 'September',
                    value: 9,
                  },
                ],
              },
              {
                type: 'optgroup',
                label: 'Q4',
                children: [
                  {
                    text: 'October',
                    value: 10,
                  },
                  {
                    text: 'November',
                    value: 11,
                  },
                  {
                    text: 'December',
                    value: 12,
                  },
                ],
              },
            ]);
          }, this.serverDelay);
        });
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms2?.destroy();
    this.ms3?.destroy();
    this.ms1 = undefined;
    this.ms2 = undefined;
    this.ms3 = undefined;
    this.serverDelayInput!.removeEventListener('click', this.changeServerDelay.bind(this));
    this.resetLazyBtn!.removeEventListener('click', this.createMultipleSelect.bind(this));
  }
}
