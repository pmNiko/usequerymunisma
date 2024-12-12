import { initialNotifyState } from '../contants';
import { NotifyState } from '../interfaces';

type NotifyActions =
  | { type: 'reset' }
  | { type: 'info', payload?: string }
  | { type: 'error', payload?: string }


const messageError = 'Conexión momentáneamente no disponible, por favor intente más tarde.'
const messageInfo = 'No se encontraron registros con los datos ingresados.'

/** **notifyReducer**
 * 
 * - Manejo del estado del Notificador
 * - Acciones: 
 *    * reset: vuelve al estado inicial
 *    * info: existencia de notificacion de información y carga del mensaje
 *    * error: existencia de notificacion de error y carga del mensaje
 */
export const notifyReducer = (state: NotifyState, action: NotifyActions): NotifyState => {
  switch (action.type) {
    case 'info':
      return {
        ...state,
        exists: true,
        info: true,
        message: action.payload || messageInfo
      }

    case 'error':
      return {
        ...state,
        exists: true,
        error: true,
        message: action.payload || messageError
      }

    case 'reset':
      return {
        ...initialNotifyState
      }

    default:
      return state;
  }
}