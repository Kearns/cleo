var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/is-obj/index.js
var require_is_obj = __commonJS({
  "node_modules/is-obj/index.js"(exports, module) {
    "use strict";
    module.exports = (value) => {
      const type = typeof value;
      return value !== null && (type === "object" || type === "function");
    };
  }
});

// node_modules/dot-prop/index.js
var require_dot_prop = __commonJS({
  "node_modules/dot-prop/index.js"(exports, module) {
    "use strict";
    var isObj = require_is_obj();
    var disallowedKeys = new Set([
      "__proto__",
      "prototype",
      "constructor"
    ]);
    var isValidPath = (pathSegments) => !pathSegments.some((segment) => disallowedKeys.has(segment));
    function getPathSegments(path) {
      const pathArray = path.split(".");
      const parts = [];
      for (let i = 0; i < pathArray.length; i++) {
        let p = pathArray[i];
        while (p[p.length - 1] === "\\" && pathArray[i + 1] !== void 0) {
          p = p.slice(0, -1) + ".";
          p += pathArray[++i];
        }
        parts.push(p);
      }
      if (!isValidPath(parts)) {
        return [];
      }
      return parts;
    }
    module.exports = {
      get(object, path, value) {
        if (!isObj(object) || typeof path !== "string") {
          return value === void 0 ? object : value;
        }
        const pathArray = getPathSegments(path);
        if (pathArray.length === 0) {
          return;
        }
        for (let i = 0; i < pathArray.length; i++) {
          object = object[pathArray[i]];
          if (object === void 0 || object === null) {
            if (i !== pathArray.length - 1) {
              return value;
            }
            break;
          }
        }
        return object === void 0 ? value : object;
      },
      set(object, path, value) {
        if (!isObj(object) || typeof path !== "string") {
          return object;
        }
        const root = object;
        const pathArray = getPathSegments(path);
        for (let i = 0; i < pathArray.length; i++) {
          const p = pathArray[i];
          if (!isObj(object[p])) {
            object[p] = {};
          }
          if (i === pathArray.length - 1) {
            object[p] = value;
          }
          object = object[p];
        }
        return root;
      },
      delete(object, path) {
        if (!isObj(object) || typeof path !== "string") {
          return false;
        }
        const pathArray = getPathSegments(path);
        for (let i = 0; i < pathArray.length; i++) {
          const p = pathArray[i];
          if (i === pathArray.length - 1) {
            delete object[p];
            return true;
          }
          object = object[p];
          if (!isObj(object)) {
            return false;
          }
        }
      },
      has(object, path) {
        if (!isObj(object) || typeof path !== "string") {
          return false;
        }
        const pathArray = getPathSegments(path);
        if (pathArray.length === 0) {
          return false;
        }
        for (let i = 0; i < pathArray.length; i++) {
          if (isObj(object)) {
            if (!(pathArray[i] in object)) {
              return false;
            }
            object = object[pathArray[i]];
          } else {
            return false;
          }
        }
        return true;
      }
    };
  }
});

// src/WebComponentContainer.ts
var WebComponentContainer = class extends HTMLElement {
  constructor() {
    super();
    console.log("DEBUG:Mounted");
  }
};

// src/loaders/ReactLoader.tsx
var DefaultTemplate = document.createElement("div");
DefaultTemplate.innerHTML = `<slot name="children"></slot>`;
var ReactLoader = class {
  constructor({ name, component, template = DefaultTemplate, React, ReactDOM }) {
    const TagName = name;
    class ReactComponent extends WebComponentContainer {
      connectedCallback() {
        this.attachShadow({ mode: "open" }).appendChild(template);
        ReactDOM.render(component, template);
      }
    }
    customElements.define(TagName, ReactComponent);
  }
};
var ReactLoader_default = ReactLoader;

// src/events/utilities/eventUtils.ts
function onPublish(subscribers, event, data) {
  if (!subscribers[event])
    return;
  subscribers[event].forEach((subscriber) => subscriber(data));
}
function onSubscribe(subscribers, event, subscriber) {
  return subscribers[event] ? subscribers[event].push(subscriber) : subscribers[event] = [subscriber];
}

// src/events/EventManager.ts
var EventManager = class {
  constructor() {
    this.subscribers = {};
  }
  publish(event, data) {
    onPublish(this.subscribers, event, data);
  }
  subscribe(event, subscriber) {
    onSubscribe(this.subscribers, event, subscriber);
  }
};

// src/state/store.ts
var store_default = {
  "configuration": {},
  "global": {}
};

// src/state/utilities/stateUtils.ts
var import_dot_prop = __toModule(require_dot_prop());
function getStateByPath(state, key) {
  return import_dot_prop.default.get(state, key);
}
function setStateByPath(state, key, value) {
  return import_dot_prop.default.set(state, key, value);
}

// src/state/StateManager.ts
var StateManager = class {
  constructor() {
    this.state = store_default;
  }
  getState(path) {
    return getStateByPath(this.state, path);
  }
  setState(path, value) {
    return setStateByPath(this.state, path, value);
  }
};

// src/router/index.ts
var Router = class {
  constructor(routes, container) {
    this.routes = routes;
    this.setRoute = () => {
      const routeArray = Object.entries(routes);
      const route = routeArray.find(([key, route2]) => {
        if (typeof route2 == "string") {
          if (key == window.location.pathname) {
            State.setState("global.active", { route: key, app: route2, pathname: window.location.pathname });
            return true;
          }
        }
        ;
        if (route2.includeSubroutes) {
          if (window.location.pathname.startsWith(key)) {
            State.setState("global.active", { route: key, app: route2, pathname: window.location.pathname });
            return true;
          }
        }
      });
      container.innerHTML = route[1].component ? route[1].component : route[1];
    };
    this.navigate = (pathname) => {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      this.setRoute(pathname);
      Events.publish("router:navigate:end", pathname);
    };
    Events.subscribe("router:navigate:start", this.navigate);
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
      Events.publish("router:navigate:start", this.getAttribute("href"));
    };
  }
};
var NavLink_default = customElements.define("nav-link", NavLink, {
  extends: "a"
});

// src/index.ts
var Events = new EventManager();
var State = new StateManager();
export {
  Events,
  NavLink_default as NavLink,
  ReactLoader_default as ReactWebComponent,
  Router,
  State
};
