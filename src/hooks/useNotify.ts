import { useReducer } from 'react';
import { notifyReducer } from '../reducers';
import { initialNotifyState } from '../contants';


export const useNotify = () => {
  const [state, dispatch] = useReducer(notifyReducer, initialNotifyState);

  const reset = () => dispatch({type: 'reset'});
  const info  = (payload?: string) => dispatch({type: 'info', payload});
  const error = (payload?: string) => dispatch({type: 'error', payload});

  return {
    //** Properties
    state,

    //?? Methods
    reset,
    info,
    error

  }
}