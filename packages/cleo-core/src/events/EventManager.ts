import * as eventUtils from './utilities/eventUtils';

interface IEventManager {
  publish: (event, data) => any;
  subscribe: (event, subscriber) => any;
}

export default class EventManager implements IEventManager {

  private subscribers = {}

  constructor() { }

  public publish(event, data) {
    eventUtils.onPublish(this.subscribers, event, data)
  }

  public subscribe(event, subscriber) {
    eventUtils.onSubscribe(this.subscribers, event, subscriber)
  }
}