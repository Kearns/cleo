import store from './store';
import getStateByPath from './utilities/getStateByPath';
import setStateByPath from './utilities/setStateByPath';

//"path" is in dot notation - ie. configuration.path.to.some.key

interface IStateManager {
  getState: (path: string) => any;
  setState: (path: string, value: any) => {};
}

export default class StateManager implements IStateManager {
  private state: {};

  constructor() {
    this.state = store
  }
  
  public getState(path) { 
    return getStateByPath(this.state, path);
  };

  public setState(path, value) { 
    return setStateByPath(this.state, path, value);
  };
}


