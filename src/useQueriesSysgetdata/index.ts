import { DTOsysGetData } from '../interfaces';
import { API_URL, Endpoints, basicHeaders } from './constant';
import { showPayload } from './helper';
import { useBodyEncode } from './hooks/useBodyEncode';
import { RequestHttp } from './interfaces';

/**
 * Handler de peticiones asyncronas al back-end api-commons
 *  - Se conecta directamente con el endpoint de sysgetdata
 *  - Recibe una interface genérica T para poder inferir el
 *    tipo de respuesta en el DTO.
 *  - Método doRequest ejecuta la petición
 *  - El body se envia encriptado al backend
 * * ---------- Parametros y Retorno del hook ------------ *
 * @param extraHeaders (opcional)    - envia cabeceras extras.
 * @param fn parametro (obligatorio) - define la funcion de BD a ejecutar
 * @param parametros   (opcional)    - envio de params
 * @returns DTOsysGetData T
 */
export const useQueriesSysgetdata = <T, G>({
  extraHeaders = {},
  fn,
  parametros,
  mode,
}: RequestHttp<G>) => {
  const { bodyEncode } = useBodyEncode();

  const post = async () => {
    const payload = { target: fn, params: parametros };

    showPayload(mode, payload);

    const resp = await fetch(`${API_URL}${Endpoints.ENCODED}`, {
      method: 'POST',
      headers: {
        ...basicHeaders,
        ...extraHeaders,
      },
      body: await bodyEncode(payload),
    });

    return (await resp.json()) as DTOsysGetData<T>;
  };

  return { post };
};
