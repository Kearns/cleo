import EventManager from "./EventManager";

describe('Event Manager', () => {
  test('Core Functionality', () => {
    const eventManager = new EventManager()
    let test = false;
    expect(test).toBe(false);
    eventManager.subscribe('example', (data) => test = data)
    eventManager.publish('example', true)
    expect(test).toBe(true);
  })
});