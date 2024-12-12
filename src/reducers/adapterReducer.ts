import { initialAdapterState } from '../contants';

export interface AdapterState<A> {
  isAdapting: boolean;
  completed: boolean;
  resultExists: boolean;
  results: A | null;
}

export type AdapterActions<A> =
  | { type: 'inititalize' }
  | { type: 'loadAdaptData'; payload: A }
  | { type: 'completed' }
  | { type: 'reset' }


/** **adapterReducer**
 * 
 * - Manejo del estado del adaptador
 * - Acciones: 
 *    * inititalize: adaptación en progreso
 *    * loadAdaptData: carga los datos adaptados cuando esten disponibles
 *    * completed: finaliza el proceso y completa el proceso
 *    * reset: vuelve al estado inicial
 */
export const adapterReducer = <A>(state: AdapterState<A>, action: AdapterActions<A>): AdapterState<A> => {
  switch (action.type) {
    case 'inititalize':
      return {
        ...initialAdapterState,
        isAdapting: true
      }

    case 'loadAdaptData':
      return {
        ...state,
        resultExists: true,
        results: action.payload,
      }

    case 'completed':
      return {
        ...state,
        isAdapting: false,
        completed: true
      }

    case 'reset':
      return { ...initialAdapterState }

    default:
      return state;
  }
}