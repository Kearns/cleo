import store from './store';
import * as stateUtils from './utilities/stateUtils';

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
    return stateUtils.getStateByPath(this.state, path);
  };

  public setState(path, value) { 
    return stateUtils.setStateByPath(this.state, path, value);
  };

}


