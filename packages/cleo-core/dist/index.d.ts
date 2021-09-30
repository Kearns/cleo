import ReactWebComponent from './loaders/ReactLoader';
import EventManager from './events/EventManager';
import StateManager from './state/StateManager';
import { Router } from './router/index';
import NavLink from './elements/NavLink';
declare const Events: EventManager;
declare const State: StateManager;
export { Router, ReactWebComponent, NavLink, Events, State };
