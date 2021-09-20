import ComponentRegistry from "./registry";

export class Router {
  routes;
  static navigate;
  constructor(routes, container) {
    this.routes = routes;

    Router.navigate = (pathname) => {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      container.innerHTML = this.routes[pathname];
    };

    window.onpopstate = () => {  
      container.innerHTML = routes[window.location.pathname];
    };
  }
};
