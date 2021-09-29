import { WebComponentContainer } from '../WebComponentContainer';

const DefaultTemplate = document.createElement('div');
DefaultTemplate.innerHTML = `<slot name="children"></slot>`;

class ReactLoader {
  constructor({name, component, template = DefaultTemplate, React, ReactDOM}) {
    const TagName = name;

    class ReactComponent extends WebComponentContainer {
      connectedCallback() {
        this.attachShadow({ mode: 'open' }).appendChild(template);
        ReactDOM.render(component, template);
      }
    }
    customElements.define(TagName, ReactComponent);
  }
}

export default ReactLoader;
