export interface ViewModel {
  mount?: () => void;
  unmount?: () => void;
}

export interface ViewRouter {
  name: string;
  view: string;
  viewModel: () => Promise<{ default: new () => ViewModel }>;
  title: string;
}

export interface RouteGroup {
  name: string;
  routes: ViewRouter[];
}
