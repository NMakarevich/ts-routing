import { Route } from './interfaces';
import NotFoundPage from './404';
import routesList from '../routes';

class Router {
  routes: Route[];

  currentRoute: Route;

  outlet: HTMLElement;

  route: string;

  constructor(routes: Route[]) {
    this.routes = routes;
    this.outlet = document.querySelector('main');
    this.eventListeners();
  }

  init() {
    const routeString = window.location.pathname;
    const route = this.findRoute(routeString);
    this.loadComponent(route);
  }

  findRoute(path: string) {
    const foundRoute = this.routes.find((route) => route.path === path);
    if (!foundRoute) return { path: '404', component: NotFoundPage };
    return foundRoute;
  }

  loadComponent(route: Route, pushState = true) {
    if (this.currentRoute) {
      this.currentRoute.component.destroy();
    }

    this.currentRoute = route;
    this.route = route.path;

    if (pushState && route.path !== '404') {
      window.history.pushState({ url: route.path }, '', route.path);
    }
    if (route.path === '404') {
      window.history.replaceState({ url: route.path }, '', route.path);
    }
    this.outlet.append(route.component.render());
  }

  navigateTo(path: string, pushState = true) {
    if (this.route === path) return;
    const route = this.findRoute(path);

    this.loadComponent(route, pushState);
  }

  eventListeners = () => {
    window.addEventListener('popstate', () => {
      const path = window.location.pathname || '/';

      this.navigateTo(path, false);
    });
  };
}

const router = new Router(routesList);
export default router;
