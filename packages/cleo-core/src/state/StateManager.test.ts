import StateManager from "./StateManager";

describe('State Manager', () => {
  test('Core Functionality', () => {
    let test;

    const stateManager = new StateManager();
  
    stateManager.setState('test', false)
    test = stateManager.getState('test')
    expect(test).toBe(false);
    
    stateManager.setState('test', true)
    test = stateManager.getState('test')
    expect(test).toBe(true);
  
  })
});