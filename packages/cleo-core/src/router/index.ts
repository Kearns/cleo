import ComponentRegistry from "./registry";

export class Router {
  routes;
  setRoute;
  static navigate;
  constructor(routes, container) {
    this.routes = routes;

    this.setRoute = (key) => {

      const routeArray = Object.entries(routes)

      const route:[...any] = routeArray.find(([key, route]: [string, any]) => {

        if (typeof route == 'string') {
          if (key == window.location.pathname) return true;
        };

        if (route.includeSubroutes) {
          if (window.location.pathname.startsWith(key)) return true;
        }
      });

      console.log("DEBUG: SETROUTE", route[1]);
      container.innerHTML = route[1].component ? route[1].component : route[1];
    }

    Router.navigate = (pathname) => {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      this.setRoute(pathname);
    };

    window.onpopstate = () => this.setRoute(window.location.pathname);
    window.onload = () => this.setRoute(window.location.pathname);
  }
};
