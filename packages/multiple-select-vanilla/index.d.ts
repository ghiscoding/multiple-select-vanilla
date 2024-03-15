export type {};

declare global {
  interface Window {
    multipleSelect: {
      (
        selector: ArrayLike<Node> | Node | string,
        config?: Partial<Omit<MultipleSelectOption, 'onHardDestroy' | 'onAfterHardDestroy'>>,
      ): MultipleSelectInstance | MultipleSelectInstance[];
      defaults: Partial<MultipleSelectInstance>;
      locales: Record<string, MultipleSelectLocale>;
      methods: string[];
    };
  }
}
