import { Reducer, useReducer } from 'react';
import { AdapterActions, AdapterState, adapterReducer } from '../reducers';
import { initialAdapterState } from '../contants';


export const useAdapter = <A>() => {
  const [state, dispatch] = useReducer<Reducer<AdapterState<A>, AdapterActions<A>>>(
    adapterReducer, initialAdapterState
  );

  const initialize = () => dispatch({type: 'inititalize'});
  const completed  = () => dispatch({type: 'completed'});
  const reset      = () => dispatch({type: 'reset'});
  const load       = (payload: A) => dispatch({type: 'loadAdaptData', payload});


  return {
    //** Properties
    ...state,

    //?? Methods 
    initialize,
    completed,
    reset,
    load
  }
}