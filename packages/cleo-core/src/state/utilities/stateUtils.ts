
import dotProp from 'dot-prop';

export function getStateByPath(state: {}, key: string): any {
  return dotProp.get(state, key)
}

export function setStateByPath(state: {}, key: string, value: any): {} {
  return dotProp.set(state, key, value);
}
