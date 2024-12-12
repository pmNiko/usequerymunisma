import { Mode } from '../../interfaces';
import { API_URL, Endpoints, basicHeaders } from '../constant';

/** Recupera la PUBLIC_KEY de la api */
export const getCipherKey = async () => {
  try {
    const res = await fetch(`${API_URL}${Endpoints.CIPHER_KEY}`, {
      method: 'POST',
      headers: { ...basicHeaders },
    });

    if (res.status !== 200) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    const result = await res.json();

    const cipherKey = result.cipherKey;

    return cipherKey;
  } catch (error) {
    console.error(error);
  } finally {
    // console.log('Fin del request de cipher key');
  }
};

/** Muestra el payload por consola si el mode y el environment es 'development' */
export const showPayload = (mode: Mode = 'prod', payload: any) => {
  if (mode === 'develop' && process.env.NODE_ENV === 'development') {
    console.log({ payload });
  }
};
