export interface ElementEventListener {
  element: Element;
  eventName: keyof HTMLElementEventMap;
  listener: EventListener;
  groupName?: string;
}

export class BindingEventService {
  protected _distinctEvent: boolean;
  protected _boundedEvents: ElementEventListener[] = [];

  get boundedEvents(): ElementEventListener[] {
    return this._boundedEvents;
  }

  constructor(options?: { distinctEvent: boolean }) {
    this._distinctEvent = options?.distinctEvent ?? false;
  }

  dispose() {
    this.unbindAll();
    this._boundedEvents = [];
  }

  /** Bind an event listener to any element */
  bind<H extends HTMLElement = HTMLElement>(
    elementOrElements: H | NodeListOf<H> | Window,
    eventNameOrNames: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap>,
    listener: EventListener,
    listenerOptions?: boolean | AddEventListenerOptions,
    groupName = '',
  ) {
    // convert to array for looping in next task
    const eventNames = Array.isArray(eventNameOrNames) ? eventNameOrNames : [eventNameOrNames];

    if (typeof (elementOrElements as NodeListOf<H>)?.forEach === 'function') {
      // multiple elements to bind to
      (elementOrElements as NodeListOf<H>).forEach(element =>
        this.bindElementEvents(element, eventNames, listener, listenerOptions, groupName),
      );
    } else {
      // single elements to bind to
      this.bindElementEvents(elementOrElements as H, eventNames, listener, listenerOptions, groupName);
    }
  }

  hasBinding(elm: Element, eventNameOrNames?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap>): boolean {
    return this._boundedEvents.some(f => f.element === elm && (!eventNameOrNames || f.eventName === eventNameOrNames));
  }

  /** Unbind a specific listener that was bounded earlier */
  unbind(
    elementOrElements?: Element | NodeListOf<Element> | null,
    eventNameOrNames?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap>,
    listener?: EventListenerOrEventListenerObject | null,
  ) {
    if (elementOrElements) {
      const elements = Array.isArray(elementOrElements) ? elementOrElements : [elementOrElements];
      const eventNames = Array.isArray(eventNameOrNames) ? eventNameOrNames || '' : [eventNameOrNames || ''];

      for (const element of elements) {
        if (!listener) {
          listener = this._boundedEvents.find(f => {
            if (f.element === element && (!eventNameOrNames || f.eventName === eventNameOrNames)) {
              return f.listener;
            }
            return undefined;
          }) as EventListener | undefined;
        }

        for (const eventName of eventNames) {
          element?.removeEventListener?.(eventName, listener);
        }
      }
    }
  }

  /**
   * Unbind all event listeners that were bounded, optionally provide a group name to unbind all listeners assigned to that specific group only.
   */
  unbindAll(groupName?: string | string[]) {
    if (groupName) {
      const groupNames = Array.isArray(groupName) ? groupName : [groupName];
      // unbind only the bounded event with a specific group
      // Note: we need to loop in reverse order to avoid array reindexing (causing index offset) after a splice is called
      for (let i = this._boundedEvents.length - 1; i >= 0; --i) {
        const boundedEvent = this._boundedEvents[i];
        if (groupNames.some(g => g === boundedEvent.groupName)) {
          const { element, eventName, listener } = boundedEvent;
          this.unbind(element, eventName, listener);
          this._boundedEvents.splice(i, 1);
        }
      }
    } else {
      // unbind everything
      while (this._boundedEvents.length > 0) {
        const boundedEvent = this._boundedEvents.pop() as ElementEventListener;
        const { element, eventName, listener } = boundedEvent;
        this.unbind(element, eventName, listener);
      }
    }
  }

  // --
  // private functions

  /** bind all event(s) to the element */
  private bindElementEvents(
    element: HTMLElement,
    eventNames: Array<keyof HTMLElementEventMap>,
    listener: EventListener,
    listenerOptions?: boolean | AddEventListenerOptions,
    groupName = '',
  ) {
    for (const eventName of eventNames) {
      if (!this._distinctEvent || (this._distinctEvent && !this.hasBinding(element, eventName))) {
        element.addEventListener(eventName, listener as EventListener, listenerOptions);
        this._boundedEvents.push({ element, eventName, listener: listener as EventListener, groupName });
      }
    }
  }
}
