import { multipleSelect, MultipleSelectInstance } from 'multiple-select-vanilla';

// map of diacritic signs against each alphabetical character
const diacritics = {
  a: 'ÀÁÂÃÄÅàáâãäåĀāąĄ',
  c: 'ÇçćĆčČ',
  d: 'đĐďĎ',
  e: 'ÈÉÊËèéêëěĚĒēęĘ',
  i: 'ÌÍÎÏìíîïĪī',
  l: 'łŁ',
  n: 'ÑñňŇńŃ',
  o: 'ÒÓÔÕÕÖØòóôõöøŌō',
  r: 'řŘ',
  s: 'ŠšśŚ',
  t: 'ťŤ',
  u: 'ÙÚÛÜùúûüůŮŪū',
  y: 'ŸÿýÝ',
  z: 'ŽžżŻźŹ',
};

export default class Example {
  ms1?: MultipleSelectInstance;
  inLogElm!: HTMLInputElement;
  outLogElm!: HTMLInputElement;

  mount() {
    this.inLogElm = document.querySelector('input.in-log') as HTMLInputElement;
    this.outLogElm = document.querySelector('input.out-log') as HTMLInputElement;
    this.ms1 = multipleSelect('#select1', {
      filter: true,
      showSearchClear: true,
      placeholder: 'search with "é" or "û"',
      diacriticParser: (text: string) => {
        const output = text
          .split('')
          .map((l) => Object.keys(diacritics).find((k) => diacritics[k as keyof typeof diacritics].includes(l)) || l)
          .join('');

        this.inLogElm.value = text;
        this.outLogElm.value = output;
        return output;
      },
    }) as MultipleSelectInstance;
  }

  unmount() {
    // destroy ms instance(s) to avoid DOM leaks
    this.ms1?.destroy();
    this.ms1 = undefined;
  }
}
