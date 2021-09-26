
import dotProp from 'dot-prop';

export default function getStateByPath(state: {}, key: string, value: any): {} {
  return dotProp.set(state, key, value);
}


