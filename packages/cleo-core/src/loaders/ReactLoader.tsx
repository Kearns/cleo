import stateManager from '../state/StateManager';
import eventManager from '../events/EventManager';
import { WebComponentContainer } from '../WebComponentContainer';

const DefaultTemplate = document.createElement('div');
DefaultTemplate.innerHTML = `<slot name="children"></slot>`;

class ReactLoader {
  constructor({
    name,
    component,
    template = DefaultTemplate,
    React,
    ReactDOM
  }) {
    const TagName = name;

    class ReactComponent extends WebComponentContainer {
      connectedCallback() {
        this.attachShadow({ mode: 'open' }).appendChild(template);
        ReactDOM.render(React.createElement(component, { State: stateManager, Events: eventManager }, null), template);
      }
    }
    customElements.define(TagName, ReactComponent);
  }
}

export default ReactLoader;
