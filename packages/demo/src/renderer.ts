import DOMPurify from 'dompurify';
import { createDomElement, emptyElement } from 'multiple-select-vanilla';

import type { ViewModel } from './interfaces.js';

/** Own the active view and its model, disposing the model before removing its DOM. */
export class Renderer {
  private viewModel?: ViewModel;

  constructor(private viewTemplate: HTMLElement) {}

  loadViewModel(Model: new () => ViewModel) {
    this.viewModel = new Model();
    return this.viewModel;
  }

  loadView(html: string) {
    this.viewTemplate.innerHTML = DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }) as unknown as string;
  }

  renderLoading() {
    this.viewTemplate.textContent = 'Loading...';
    this.viewTemplate.setAttribute('aria-busy', 'true');
  }

  renderError(message: string) {
    this.dispose();
    createDomElement('div', { className: 'alert alert-danger', role: 'alert', textContent: message }, this.viewTemplate);
  }

  mount() {
    this.viewModel?.mount?.();
    this.viewTemplate.removeAttribute('aria-busy');
  }

  dispose() {
    const viewModel = this.viewModel;
    this.viewModel = undefined;
    try {
      viewModel?.unmount?.();
    } finally {
      emptyElement(this.viewTemplate);
      this.viewTemplate.removeAttribute('aria-busy');
    }
  }
}
