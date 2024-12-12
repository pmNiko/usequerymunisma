import { Reducer, useReducer } from 'react';
import { QueryActions, QueryState, queryReducer } from '../reducers';
import { queryReducerInitialState } from '../contants';


export const useQuery = <T>() => {
  const [state, dispatch] =  useReducer<Reducer<QueryState<T>, QueryActions<T>>>(
    queryReducer, queryReducerInitialState
  );

  const request   = () => dispatch({type: 'request'});
  const completed = () => dispatch({type: 'completed'});
  const isReady   = () => dispatch({type: 'ready'});
  const reset     = () => dispatch({type: 'reset'});
  const response  = (payload: T) => dispatch({type: 'response', payload});

  return {
    //** Properties
    state,

    //?? Methods
    request,
    completed,
    isReady,
    reset,
    response
  }
}