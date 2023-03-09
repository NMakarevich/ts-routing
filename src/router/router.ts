import { Route } from './interfaces';
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
    if (route) this.loadComponent(route);
    else this.redirectTo('404');
  }

  findRoute(path: string) {
    const foundRoute = this.routes.find((route) => route.path === path);
    if (!foundRoute) return false;
    return foundRoute;
  }

  loadComponent(route: Route) {
    if (this.currentRoute) {
      this.currentRoute.component.destroy();
    }

    this.currentRoute = route;
    this.route = route.path;

    this.outlet.append(route.component.render());
  }

  redirectTo(path: string) {
    if (this.route === path) return;
    const route = this.findRoute(path);

    if (route) {
      this.loadComponent(route);
      window.history.replaceState({ url: route.path }, '', route.path);
    }
  }

  navigateTo(path: string, pushState = true) {
    if (this.route === path) return;
    const route = this.findRoute(path);

    if (route) {
      this.loadComponent(route);
      if (pushState) {
        window.history.pushState({ url: route.path }, '', route.path);
      }
    } else this.redirectTo('404');
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
