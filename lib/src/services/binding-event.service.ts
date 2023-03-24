export interface ElementEventListener {
  element: Element;
  eventName: string;
  listener: EventListenerOrEventListenerObject;
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
  bind(
    elementOrElements: Element | NodeListOf<Element>,
    eventNameOrNames: string | string[],
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    const eventNames = Array.isArray(eventNameOrNames) ? eventNameOrNames : [eventNameOrNames];

    if ((elementOrElements as NodeListOf<HTMLElement>)?.forEach) {
      (elementOrElements as NodeListOf<HTMLElement>)?.forEach((element) => {
        for (const eventName of eventNames) {
          if (!this._distinctEvent || (this._distinctEvent && !this.hasBinding(element, eventName))) {
            element.addEventListener(eventName, listener, options);
            this._boundedEvents.push({ element, eventName, listener });
          }
        }
      });
    } else {
      for (const eventName of eventNames) {
        if (!this._distinctEvent || (this._distinctEvent && !this.hasBinding(elementOrElements as Element, eventName))) {
          (elementOrElements as Element).addEventListener(eventName, listener, options);
          this._boundedEvents.push({ element: elementOrElements as Element, eventName, listener });
        }
      }
    }
  }

  hasBinding(elm: Element, eventNameOrNames?: string | string[]): boolean {
    return this._boundedEvents.some((f) => f.element === elm && (!eventNameOrNames || f.eventName === eventNameOrNames));
  }

  /** Unbind all will remove every every event handlers that were bounded earlier */
  unbind(
    elementOrElements?: Element | NodeListOf<Element> | null,
    eventNameOrNames?: string | string[],
    listener?: EventListenerOrEventListenerObject | null
  ) {
    if (elementOrElements) {
      const elements = Array.isArray(elementOrElements) ? elementOrElements : [elementOrElements];
      const eventNames = Array.isArray(eventNameOrNames) ? eventNameOrNames || '' : [eventNameOrNames || ''];

      for (const element of elements) {
        if (!listener) {
          listener = this._boundedEvents.find((f) => {
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

  /** Unbind all will remove every every event handlers that were bounded earlier */
  unbindAll() {
    while (this._boundedEvents.length > 0) {
      const boundedEvent = this._boundedEvents.pop() as ElementEventListener;
      const { element, eventName, listener } = boundedEvent;
      this.unbind(element, eventName, listener);
    }
  }
}
