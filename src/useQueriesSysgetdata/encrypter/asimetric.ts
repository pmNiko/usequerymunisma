import { JSEncrypt } from 'jsencrypt'

const Encrypter = new JSEncrypt()


export const asimetricEncrypt = (AES_KEY: string, keyEncode: string) => {
  Encrypter.setPublicKey(keyEncode);

  const encoded = Encrypter.encrypt(AES_KEY)

  return encoded;
}
