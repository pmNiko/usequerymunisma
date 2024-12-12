import { queryReducerInitialState } from '../contants';


export interface QueryState<T> {
  isStarted: boolean;
  isFetching: boolean;
  data: T | null;
  isReady: boolean;
  containData: boolean;
}

export type QueryActions<T> = 
  | { type: 'request' }
  | { type: 'response'; payload: T}
  | { type: 'completed' }
  | { type: 'ready' }
  | { type: 'reset' }



/** **useQueryReducer**
 * 
 * - Manejo del estado del query 
 * - Acciones: 
 *    * request: inicia el servicio, la petición está en progreso
 *    * response: carga los datos de respuesta cuando existan datos
 *    * completed: finaliza el fetching
 *    * ready: cambiará a verdadero si el servicio esta iniciado y finalizo la petición
 *    * reset: vuelve al estado inicial
 */
export const queryReducer = <T>( state: QueryState<T>, action: QueryActions<T>): QueryState<T> => {
    switch (action.type) {
      case 'request':
        return { 
          ...state, 
          isStarted: true, 
          isFetching: true 
        }  
      
      case 'response':
        return { 
          ...state, 
          containData: true, 
          data: action.payload
        }
      
      case 'completed':
        return { 
          ...state, 
          isFetching: false          
        }
      
      case 'ready':
        return { 
          ...state, 
          isReady: state.isStarted && !state.isFetching          
        }

      case 'reset':
        return { 
          ...queryReducerInitialState 
        }
    
      default:
        return state;
    }
}