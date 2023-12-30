export {};

declare global {
  interface Window {
    multipleSelect: {
      (
        selector: ArrayLike<Node> | Node | string,
        config?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>
      ): MultipleSelectInstance | MultipleSelectInstance[];
      defaults: Partial<MultipleSelectInstance>;
      locales: {
        [localeKey: string]: {
          formatSelectAll: () => string;
          formatAllSelected: () => string;
          formatCountSelected: (count: number, total: number) => string;
          formatNoMatchesFound: () => string;
        };
      };
      methods: string[];
    };
  }
}
