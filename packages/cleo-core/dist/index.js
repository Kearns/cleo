// src/loaders/ReactLoader.tsx
import {
  render
} from "react-dom";

// src/WebComponentContainer.ts
var WebComponentContainer = class extends HTMLElement {
  constructor() {
    super();
    console.log("DEBUG:Mounted");
  }
};

// src/loaders/ReactLoader.tsx
var ReactLoader = class {
  constructor(name, Component, template = document.createElement("div")) {
    const TagName = name;
    template.classList.add(name + "-container");
    class ReactComponent extends WebComponentContainer {
      connectedCallback() {
        this.attachShadow({ mode: "open" }).appendChild(template);
        render(Component, template);
      }
    }
    customElements.define(TagName, ReactComponent);
  }
};
var ReactLoader_default = ReactLoader;

// src/router/index.ts
var Router = class {
  constructor(routes, container) {
    this.routes = routes;
    this.setRoute = (key) => {
      const routeArray = Object.entries(routes);
      const route = routeArray.find(([key2, route2]) => {
        if (typeof route2 == "string") {
          if (key2 == window.location.pathname)
            return true;
        }
        ;
        if (route2.includeSubroutes) {
          if (window.location.pathname.startsWith(key2))
            return true;
        }
      });
      console.log("DEBUG: SETROUTE", route[1]);
      container.innerHTML = route[1].component ? route[1].component : route[1];
    };
    Router.navigate = (pathname) => {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      this.setRoute(pathname);
    };
    window.onpopstate = () => this.setRoute(window.location.pathname);
    window.onload = () => this.setRoute(window.location.pathname);
  }
};

// src/elements/NavLink.ts
var NavLink = class extends HTMLAnchorElement {
  connectedCallback() {
    this.onclick = (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      const href = this.getAttribute("href");
      Router.navigate(href);
    };
  }
};
var NavLink_default = customElements.define("nav-link", NavLink, {
  extends: "a"
});
export {
  NavLink_default as NavLink,
  ReactLoader_default as ReactWebComponent,
  Router
};
