import './style.scss';
import mainHtml from './main.html?raw';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import { exampleRouting, navbarRouting } from './app-routing';
import { createDomElement } from 'multiple-select-vanilla';

interface ViewRouter {
  name: string;
  view: string;
  viewModel: any;
  title: string;
}

interface ViewModel {
  mount?: () => void;
  unmount?: () => void;
}

class Main {
  loading = true;
  currentModel?: ViewModel;
  currentRouter?: ViewRouter;
  defaultRouteName = 'example01';
  stateBangChar = '#/';
  baseUrl = window.location.origin + window.location.pathname;
  viewModelObj: any = {};

  async init() {
    const location = window.location;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = mainHtml;

    let route = location.hash.replace(this.stateBangChar, '');
    if (!route || route === '/' || route === '#') {
      route = this.defaultRouteName;
    }

    // create all routes and always load first route Example01
    this.createRouteLinks();
    this.loadRoute(route);

    // on page load make route active, when changing route afterward that will be covered by each nav click events
    Array.from(document.querySelectorAll('.panel-wm-left a.nav-link,.navbar-nav a.nav-link')).forEach((link) => {
      if (route.includes(link.id)) {
        link.classList.add('active');
      }
    });

    // re-render on browser history navigation change
    window.onpopstate = () => {
      const winLoc = window.location;
      const prevRoute = winLoc.hash.replace(this.stateBangChar, '');
      this.loadRoute(prevRoute || this.defaultRouteName, false);
    };
  }

  createRouteLinks() {
    for (const navRoute of navbarRouting) {
      // <li class="nav-item"><a class="nav-link" id="home">Home</a></li>
      const liElm = createDomElement('li', {
        className: 'nav-item',
      });
      const aElm = createDomElement('a', {
        id: navRoute.name,
        className: 'nav-link',
        textContent: navRoute.title,
      });
      aElm.addEventListener('click', this.clickEventListener.bind(this));

      liElm.appendChild(aElm);
      document.querySelector('.navbar-nav')?.appendChild(liElm);
    }

    for (const groupRoute of exampleRouting) {
      // <li class="m-1"><p class="navbar-vertical-label mb-1">Welcomes</p></li>
      const groupLiElm = createDomElement('li', { className: 'm-1' });
      const groupPElm = createDomElement('p', {
        className: 'navbar-vertical-label mb-1',
        textContent: groupRoute.name,
      });
      groupLiElm.appendChild(groupPElm);
      document.querySelector('.nav-pills')?.appendChild(groupLiElm);

      for (const singleRoute of groupRoute.routes) {
        // <li class="nav-item"><a class="nav-link" id="example01">Single Select</a></li>
        const liElm = createDomElement('li', {
          className: 'nav-item',
        });
        const aElm = createDomElement('a', {
          id: singleRoute.name,
          className: 'nav-link',
          textContent: singleRoute.title,
        });
        aElm.addEventListener('click', this.clickEventListener.bind(this));

        liElm.appendChild(aElm);
        document.querySelector('.nav-pills')?.appendChild(liElm);
      }
    }
  }

  async loadRoute(routeName: string, changeBrowserState = true) {
    const contentElm = document.querySelector('.panel-wm-content') as HTMLElement;
    contentElm.innerHTML = '';
    contentElm.classList.add('cloak');
    let foundRouter = navbarRouting.find((r) => r.name === routeName);

    if (foundRouter?.name === 'examples') {
      const exampleElm = document.querySelector('.nav-pills .nav-item a.nav-link');
      exampleElm?.classList.add('active');
    } else {
      for (const groupRoute of exampleRouting) {
        const found = (groupRoute.routes as ViewRouter[]).find((r) => r.name === routeName);
        if (found) {
          foundRouter = found;
        }
      }
    }

    if (this.currentModel) {
      this.unmountCurrentVM(this.currentModel, this.currentRouter);
    }

    if (foundRouter) {
      this.currentRouter = foundRouter;
      const html = await import(/*@vite-ignore*/ `${foundRouter.view}?raw`);
      document.querySelector('.panel-wm-content')!.innerHTML = html.default;
      const vm = new foundRouter.viewModel() as ViewModel;
      this.currentModel = vm;
      (window as any)[foundRouter.name] = vm.mount?.();

      // before leaving the page/SPA, we'll unmount everything
      window.onbeforeunload = () => {
        contentElm.classList.add('cloak');
        vm.unmount?.();
        this.removeAllActiveLinks(true);
        this.unmountAll();
        if (foundRouter?.name) {
          delete (window as any)[foundRouter.name];
        }
      };
    }

    if (changeBrowserState) {
      window.history.pushState({}, routeName, `${this.baseUrl}${this.stateBangChar}${routeName}`);
    }
    document.title = `Multiple-Select-Vanilla · ${routeName}`;
    contentElm.classList.remove('cloak');
  }

  async clickEventListener(e: Event) {
    // remove any active links
    this.removeAllActiveLinks();

    // change active link to new route
    const targetElm = e.target as HTMLElement;
    targetElm.classList.toggle('active');

    this.loadRoute(targetElm.id);
  }

  removeAllActiveLinks(unbindListeners = false) {
    document.querySelectorAll('.panel-wm-left a.nav-link,.navbar-nav a.nav-link').forEach((link) => {
      link.classList.remove('active');
      if (unbindListeners) {
        link.addEventListener('click', this.clickEventListener.bind(this) as EventListener);
      }
    });
  }

  unmountCurrentVM(vm: ViewModel, vr?: ViewRouter) {
    vm.unmount?.();
    if (vr) {
      delete (window as any)[vr.name];
    }
  }

  unmountAll() {
    for (const vmKey of Object.keys(this.viewModelObj)) {
      const viewModel = this.viewModelObj[vmKey];
      if (typeof viewModel?.unmount === 'function') {
        viewModel?.unmount();

        // also clear all of its variable references to avoid detached elements
        for (const ref of Object.keys(viewModel)) {
          viewModel[ref] = null;
        }
      }
      // nullify the object and then delete them to make sure they will be removed by the garbage collector
      (<any>window)[vmKey] = null;
      this.viewModelObj[vmKey] = null;
      delete (<any>window)[vmKey];
      delete this.viewModelObj[vmKey];
    }
  }
}

// execute main init
const main = new Main();
main.init();
