
interface IEventManager {
  publish: (event, data) => any;
  subscribe: (event, subscriber) => any;
}

export default class EventManager implements IEventManager {
  private eventRegistry = [];
  private subscribers = {}

  constructor(baseEvents: []) {
    this.eventRegistry = [...baseEvents];
  }

  public publish(event, data) {
    if (!this.subscribers[event]) return;
    this.subscribers[event].forEach(subscriber =>
      subscriber(data)
    );
  }

  public subscribe(event, subscriber) {
    this.subscribers[event]
      ? this.subscribers[event].push(subscriber)
      : this.subscribers[event] = [subscriber];
  };

}


