export class WebComponentContainer extends HTMLElement {

  constructor(){
    super();
    console.log('DEBUG:Mounted')
  }
}

export const createContainer = (name: string) => {
  customElements.define(name, WebComponentContainer)  
}
