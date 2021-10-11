
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactWebComponent, Router, Events, State, CleoContainer } from 'cleo-core';

import { SampleComponent, SampleComponentTwo, ShellHeader } from './samples/index';
const domElementContainer = document.getElementById('cleo-container');
const appContainer = document.getElementById('cleo-app-container');


(window as any).xEvents = Events;
(window as any).xState = State;

new ReactWebComponent({
  name: 'shell-header',
  component: ShellHeader,
  React,
  ReactDOM,
});

new ReactWebComponent({
  name: 'x-demo-react-app-one',
  component: SampleComponent,
  React,
  ReactDOM,
  template: appContainer,
  type: 'app'
});

new ReactWebComponent({
  name: 'x-demo-react-app-two',
  component: SampleComponentTwo,
  React,
  ReactDOM,
  template: appContainer,
  type: 'app'
});

Events.subscribe('router:navigate:end', (href: string) => console.log(
  `Event Test - Router Navigate - Data: ${href}`,
  `\nState Test - Global Active Route: ${JSON.stringify(State.getState('global.active'))}`
));

const router = new Router({
  '/1': { includeSubroutes: true, component: '<x-demo-react-app-one>' },
  '/2': '<x-demo-react-app-two>'
}, domElementContainer);

(window as any).router = router;

