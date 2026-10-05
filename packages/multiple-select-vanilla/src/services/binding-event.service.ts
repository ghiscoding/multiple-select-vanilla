export interface ElementEventListener {
  element: Element;
  eventName: keyof HTMLElementEventMap;
  listener: EventListener;
  groupName?: string;
}

export class BindingEventService {
  protected _distinctEvent: boolean;
  protected _boundedEvents: ElementEventListener[] = [];
  private _eventCounts = new WeakMap<Element, Map<keyof HTMLElementEventMap, number>>();
  private _captureOptions = new WeakMap<ElementEventListener, boolean>();
  private _bindingsExposed = false;

  get boundedEvents(): ElementEventListener[] {
    // Callers can mutate this live array, so fall back to scanning after it is exposed.
    this._bindingsExposed = true;
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
    const eventNames = eventNameOrNames && (Array.isArray(eventNameOrNames) ? eventNameOrNames : [eventNameOrNames]);
    if (this._bindingsExposed) {
      return this._boundedEvents.some(f => f.element === elm && (!eventNames || eventNames.includes(f.eventName)));
    }
    const counts = this._eventCounts.get(elm);
    return !!counts && (eventNames ? eventNames.some(name => counts.has(name)) : counts.size > 0);
  }

  /** Unbind a specific listener that was bounded earlier */
  unbind(
    elementOrElements?: Element | NodeListOf<Element> | null,
    eventNameOrNames?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap>,
    listener?: EventListenerOrEventListenerObject | null,
  ) {
    if (!elementOrElements) {
      return;
    }
    const elements = new Set(
      typeof (elementOrElements as NodeListOf<Element>).forEach === 'function'
        ? Array.from(elementOrElements as NodeListOf<Element>)
        : [elementOrElements as Element],
    );
    const eventNames = eventNameOrNames && (Array.isArray(eventNameOrNames) ? eventNameOrNames : [eventNameOrNames]);
    for (let i = this._boundedEvents.length - 1; i >= 0; i--) {
      const event = this._boundedEvents[i];
      if (
        elements.has(event.element) &&
        (!eventNames || eventNames.includes(event.eventName)) &&
        (!listener || event.listener === listener)
      ) {
        this.removeBinding(i);
      }
    }
  }

  /**
   * Unbind all event listeners that were bounded, optionally provide a group name to unbind all listeners assigned to that specific group only.
   */
  unbindAll(groupName?: string | string[]) {
    const groupNames = groupName && (Array.isArray(groupName) ? groupName : [groupName]);
    // Remove in reverse order so deleting a record does not shift unvisited records.
    for (let i = this._boundedEvents.length - 1; i >= 0; --i) {
      if (!groupNames || groupNames.includes(this._boundedEvents[i].groupName || '')) {
        this.removeBinding(i);
      }
    }
  }

  private removeBinding(index: number) {
    const event = this._boundedEvents[index];
    event.element.removeEventListener(event.eventName, event.listener, this._captureOptions.get(event) ?? false);
    this._boundedEvents.splice(index, 1);
    const counts = this._eventCounts.get(event.element);
    const count = counts?.get(event.eventName) ?? 0;
    if (count > 1) {
      counts?.set(event.eventName, count - 1);
    } else {
      counts?.delete(event.eventName);
    }
    this._captureOptions.delete(event);
  }

  /** bind all event(s) to the element */
  private bindElementEvents(
    element: HTMLElement,
    eventNames: Array<keyof HTMLElementEventMap>,
    listener: EventListener,
    listenerOptions?: boolean | AddEventListenerOptions,
    groupName = '',
  ) {
    for (const eventName of eventNames) {
      if (!this._distinctEvent || !this.hasBinding(element, eventName)) {
        element.addEventListener(eventName, listener as EventListener, listenerOptions);
        const event = { element, eventName, listener, groupName };
        this._boundedEvents.push(event);
        this._captureOptions.set(event, typeof listenerOptions === 'boolean' ? listenerOptions : !!listenerOptions?.capture);
        let counts = this._eventCounts.get(element);
        if (!counts) {
          counts = new Map();
          this._eventCounts.set(element, counts);
        }
        counts.set(eventName, (counts.get(eventName) ?? 0) + 1);
      }
    }
  }
}
