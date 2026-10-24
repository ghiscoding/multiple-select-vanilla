import { BindingEventService, createDomElement } from 'multiple-select-vanilla';

import { exampleRouting, navbarRouting } from './app-routing.js';
import mainHtml from './main.html?raw';
import { Renderer } from './renderer.js';

const pageLayoutGlobs = import.meta.glob<string>(['/src/**/*.html', '!/src/main.html'], { query: '?raw', import: 'default' });

export class App {
  private bindings = new BindingEventService();
  private renderer!: Renderer;
  private currentRouteName = '';
  private routeLoadId = 0;
  private defaultRouteName = 'getting-started';
  private routes = [...navbarRouting, ...exampleRouting.flatMap(group => group.routes)];

  init() {
    new Renderer(document.querySelector<HTMLElement>('#app')!).loadView(mainHtml);
    this.renderer = new Renderer(document.querySelector<HTMLElement>('.panel-wm-content')!);
    this.createRouteLinks();
    window.addEventListener('popstate', this.loadCurrentRoute);
    window.addEventListener('hashchange', this.loadCurrentRoute);
    window.addEventListener('beforeunload', this.dispose);
    this.loadCurrentRoute();
  }

  private loadCurrentRoute = () => {
    const routeName = window.location.hash.replace(/^#\/?/, '') || this.defaultRouteName;
    if (routeName !== this.currentRouteName) {
      void this.loadRoute(routeName, false);
    }
  };

  createRouteLinks() {
    for (const navRoute of navbarRouting) {
      // <li class="nav-item"><a class="nav-link" id="home">Home</a></li>
      const liElm = createDomElement('li', { className: 'nav-item' });
      const aElm = createDomElement(
        'a',
        { id: navRoute.name, href: `#/${navRoute.name}`, className: 'nav-link', textContent: navRoute.title },
        liElm,
      );
      this.bindings.bind(aElm, 'click', this.clickEventListener);
      document.querySelector('.navbar-nav')?.appendChild(liElm);
    }

    for (const groupRoute of exampleRouting) {
      const groupLiElm = createDomElement('li', { className: 'm-1' });
      createDomElement('p', { className: 'navbar-vertical-label mb-1', textContent: groupRoute.name }, groupLiElm);
      document.querySelector('.nav-pills')?.appendChild(groupLiElm);

      for (const singleRoute of groupRoute.routes) {
        // <li class="nav-item"><a class="nav-link" id="example01">Single Select</a></li>
        const liElm = createDomElement('li', { className: 'nav-item' });
        const aElm = createDomElement('a', {
          id: singleRoute.name,
          href: `#/${singleRoute.name}`,
          className: 'nav-link',
          textContent: singleRoute.title,
        });
        this.bindings.bind(aElm, 'click', this.clickEventListener);

        liElm.appendChild(aElm);
        document.querySelector('.nav-pills')?.appendChild(liElm);
      }
    }
  }

  async loadRoute(routeName: string, changeBrowserState = true) {
    const route = this.routes.find(candidate => candidate.name === routeName) ?? navbarRouting[0];
    const loadId = ++this.routeLoadId;
    this.currentRouteName = route.name;
    this.renderer.dispose();
    this.renderer.renderLoading();
    this.updateActiveLinks(route.name);

    // Update history when navigation starts so Back also cancels a pending route load.
    const hash = `#/${route.name}`;
    if (changeBrowserState && window.location.hash !== hash) {
      window.history.pushState({}, '', hash);
    } else if (!changeBrowserState && window.location.hash !== hash) {
      window.history.replaceState({}, '', hash);
    }
    document.title = `Multiple-Select-Vanilla · ${route.name}`;

    try {
      const loadView = pageLayoutGlobs[route.view];
      if (!loadView) {
        throw new Error(`Missing view: ${route.view}`);
      }
      const [vmModule, html] = await Promise.all([route.viewModel(), loadView()]);
      // A slower navigation must never mount over the user's latest destination.
      if (loadId !== this.routeLoadId) {
        return;
      }
      this.renderer.loadViewModel(vmModule.default);
      this.renderer.loadView(html);
      this.renderer.mount();
    } catch (error) {
      if (loadId !== this.routeLoadId) {
        return;
      }
      console.error(`Unable to load route "${route.name}"`, error);
      this.renderer.renderError('Unable to load this page. Select the link again to retry.');
    }
  }

  private clickEventListener = (event: Event) => {
    const mouseEvent = event as MouseEvent;
    if (mouseEvent.button > 0 || mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey || mouseEvent.altKey) {
      return;
    }
    event.preventDefault();
    void this.loadRoute((event.currentTarget as HTMLAnchorElement).id);
  };

  private updateActiveLinks(routeName: string) {
    document.querySelectorAll('.panel-wm-left a.nav-link,.navbar-nav a.nav-link').forEach(link => {
      link.classList.toggle('active', link.id === routeName || (routeName === 'examples' && link.id === 'example01'));
    });
    document.getElementById(routeName)?.scrollIntoView({ block: 'nearest' });
  }

  private dispose = () => {
    ++this.routeLoadId;
    this.bindings.dispose();
    window.removeEventListener('popstate', this.loadCurrentRoute);
    window.removeEventListener('hashchange', this.loadCurrentRoute);
    window.removeEventListener('beforeunload', this.dispose);
    this.renderer?.dispose();
    this.currentRouteName = '';
  };
}
