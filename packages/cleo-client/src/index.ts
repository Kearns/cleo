
import ReactWebComponent from './loaders/ReactLoader';
import { SampleComponent, SampleComponentTwo } from './samples/index';
import { Router } from './router/index';
import './elements/NavLink'

const domElementContainer = document.getElementById('cleo-container');

new ReactWebComponent(
  'x-demo-react-app-one',
  SampleComponent
);

new ReactWebComponent(
  'x-demo-react-app-two',
  SampleComponentTwo
);


const router = new Router({
  '/1': '<x-demo-react-app-one>',
  '/2': '<x-demo-react-app-two>'
}, domElementContainer);

(window as any).router = router;
