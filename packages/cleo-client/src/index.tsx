
import React from 'react';
import { ReactWebComponent, Router } from 'cleo-core';

import { SampleComponent, SampleComponentTwo } from './samples/index';
const domElementContainer = document.getElementById('cleo-container');

console.log("ROUTER", ReactWebComponent)

new ReactWebComponent(
  'x-demo-react-app-one',
  <SampleComponent />
);

new ReactWebComponent(
  'x-demo-react-app-two',
  <SampleComponentTwo />
);


const router = new Router({
  '/1': { includeSubroutes: true, component: '<x-demo-react-app-one>' },
  '/2': '<x-demo-react-app-two>'
}, domElementContainer);

(window as any).router = router;

