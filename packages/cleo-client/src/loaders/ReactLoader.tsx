import React from 'react';
import ReactDOM from 'react-dom';
import { WebComponentContainer } from '../WebComponentContainer';


class ReactLoader {
  constructor(name, Component, template = document.createElement('div')) {
    const TagName = name;
    template.classList.add(name + '-container');

    class ReactComponent extends WebComponentContainer {
      connectedCallback() {
        this.attachShadow({ mode: 'open' }).appendChild(template);
        ReactDOM.render(<Component />, template);
      }
    }
    customElements.define(TagName, ReactComponent);
  }
}

export default ReactLoader;
