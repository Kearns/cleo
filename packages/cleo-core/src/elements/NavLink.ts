import { Events } from '../';

class NavLink extends HTMLAnchorElement {

  connectedCallback() {
    this.onclick = (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();

      Events.publish('router:navigate:start', this.getAttribute('href'));
    }
  }
}

export default customElements.define('nav-link', NavLink, {
  extends: "a"
});