
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactWebComponent, Router } from 'cleo-core';

import { SampleComponent, SampleComponentTwo } from './samples/index';
const domElementContainer = document.getElementById('cleo-container');

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


const router = new Router({
  '/1': { includeSubroutes: true, component: '<x-demo-react-app-one>' },
  '/2': '<x-demo-react-app-two>'
}, domElementContainer);

(window as any).router = router;

