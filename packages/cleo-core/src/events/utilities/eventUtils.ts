
export function onPublish(subscribers: {}, event: string, data: any) {
  if (!subscribers[event]) return;
  subscribers[event].forEach(subscriber => subscriber(data));
};

export function onSubscribe(subscribers: {},  event: string, subscriber: Function) {
  return subscribers[event]
    ? subscribers[event].push(subscriber)
    : subscribers[event] = [subscriber];
};
