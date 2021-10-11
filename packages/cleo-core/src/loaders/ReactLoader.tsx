import stateManager from '../state/StateManager';
import eventManager from '../events/EventManager';
import { WebComponentContainer } from '../WebComponentContainer';


class ReactLoader {
  constructor({
    name,
    component,
    template = null,
    React,
    ReactDOM,
    type = 'component'
  }) {
  const TagName = name;

  class ReactComponent extends WebComponentContainer {
    connectedCallback() {
      let root;

      if (!template) {
        
        switch(type) {
          case 'app':
            root = document.getElementById('cleo-app-container')
            break;
          case 'component': 
            root = document.createElement('div');
            root.innerHTML = `<slot name="children"></slot>`;
            break;
        }
      } else root = template;

      this.attachShadow({ mode: 'open' }).appendChild(root);

      ReactDOM.render(React.createElement(component, { State: stateManager, Events: eventManager }, null), root);
    }
  }
  customElements.define(TagName, ReactComponent);
}
}

export default ReactLoader;
