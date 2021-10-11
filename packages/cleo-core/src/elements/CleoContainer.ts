


export default customElements.define('cleo-container', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div id="cleo-container"><div id="cleo-app-container"></div></div>'
  }
});