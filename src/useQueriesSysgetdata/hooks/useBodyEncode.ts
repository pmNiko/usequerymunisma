import { asimetricEncrypt } from '../encrypter/asimetric';
import { generateAESKey, simetricEncrypt } from '../encrypter/simetric';
import { getCipherKey } from '../helper';


export const useBodyEncode = () => {
  const aesKey = generateAESKey()

  const bodyEncode = async(params: {}) => {
    const cipherKey = await getCipherKey();

    const payload = simetricEncrypt(JSON.stringify(params), aesKey);
    const encoded = asimetricEncrypt(aesKey, cipherKey);  

    return JSON.stringify({payload, encoded})

  }
 
  return {
    bodyEncode
  }
}