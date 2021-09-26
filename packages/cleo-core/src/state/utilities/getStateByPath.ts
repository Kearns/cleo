
import dotProp from 'dot-prop';

export default function getStateByPath(state: {}, key: string): any {
  return dotProp.get(state, key)
}



