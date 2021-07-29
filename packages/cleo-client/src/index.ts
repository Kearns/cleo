
import ReactWebComponent from './loaders/ReactLoader';
import {SampleComponent} from './samples/index';
const domElementContainer = document.getElementById('cleo-container');

new ReactWebComponent(
  'x-demo-react-app', 
  SampleComponent
);


domElementContainer.appendChild(document.createElement('x-demo-react-app'))
