import {Router} from '../router/index';

class NavLink extends HTMLAnchorElement {

  connectedCallback() {
    this.onclick = (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      
      const href = this.getAttribute('href');
      Router.navigate(href);
    }
  }
  
}

export default customElements.define('nav-link', NavLink, { 
  extends: "a" 
});