import eventManager from "./EventManager";

describe('Event Manager', () => {
  test('Core Functionality', () => {
    let test = false;
    expect(test).toBe(false);
    eventManager.subscribe('example', (data) => test = data)
    eventManager.publish('example', true)
    expect(test).toBe(true);
  })
});