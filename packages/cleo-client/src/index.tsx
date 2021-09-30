
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactWebComponent, Router, Events, State } from 'cleo-core';

import { SampleComponent, SampleComponentTwo } from './samples/index';
const domElementContainer = document.getElementById('cleo-container');

(window as any).Events = Events;
(window as any).State = State;

new ReactWebComponent({
  name: 'x-demo-react-app-one',
  component: <SampleComponent />,
  React,
  ReactDOM
});

new ReactWebComponent({
  name: 'x-demo-react-app-two',
  component: <SampleComponentTwo />,
  React,
  ReactDOM
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

