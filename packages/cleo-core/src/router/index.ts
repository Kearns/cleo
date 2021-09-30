import ComponentRegistry from "./registry";
import { Events, State } from '../index';

export class Router {
  routes;
  setRoute;
  navigate;

  constructor(routes, container) {
    this.routes = routes;

    this.setRoute = () => {

      const routeArray = Object.entries(routes)

      const route: [...any] = routeArray.find(([key, route]: [string, any]) => {

        if (typeof route == 'string') {
          if (key == window.location.pathname) {
            State.setState('global.active', { route: key, app: route, pathname: window.location.pathname });
            return true;
          }
        };

        if (route.includeSubroutes) {
          if (window.location.pathname.startsWith(key)) {
            State.setState('global.active', { route: key, app: route, pathname: window.location.pathname })
            return true;
          }
        }
      });

      container.innerHTML = route[1].component ? route[1].component : route[1];

    }

    this.navigate = (pathname) => {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      this.setRoute(pathname);
      Events.publish('router:navigate:end', pathname);
    };

    Events.subscribe('router:navigate:start', this.navigate)

    window.onpopstate = () => this.setRoute(window.location.pathname);
    window.onload = () => this.setRoute(window.location.pathname);
  }
};
