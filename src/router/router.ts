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
    this.route = window.location.pathname;
    this.currentRoute = this.routes.find((route) => route.path === this.route);
    if (this.currentRoute) {
      this.outlet.append(this.currentRoute.component.render());
    }
  }

  navigateTo(url: string) {
    if (this.route === url) return;
    const destinationRoute = this.routes.find((route) => route.path === url);
    if (!destinationRoute) return;

    this.currentRoute.component.destroy();
    this.currentRoute = destinationRoute;
    this.route = this.currentRoute.path;

    this.outlet.append(this.currentRoute.component.render());
    window.history.pushState({ url: this.route }, '', this.route);
  }

  eventListeners = () => {
    window.addEventListener('popstate', () => {
      this.route = window.history.state.url || window.location.pathname;
      this.currentRoute.component.destroy();
      this.currentRoute = this.routes.find(
        (route) => route.path === this.route,
      );
      this.outlet.append(this.currentRoute.component.render());
    });
  };
}

const router = new Router(routesList);
export default router;
