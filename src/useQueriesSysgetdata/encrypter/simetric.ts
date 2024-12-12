import CryptoJS from 'crypto-js'

const AES_KEY_OPTIONS = {
  nBytes: 128/8,
  keySize: 512/32,
  iterations: 2,
}

export const generateAESKey = () => {
  const SECRET = Math.random().toString().replace("0.", "")
  const salt = CryptoJS.lib.WordArray.random(AES_KEY_OPTIONS.nBytes);
  
  const AES_KEY = CryptoJS.PBKDF2(SECRET, salt, { 
    keySize: AES_KEY_OPTIONS.keySize, 
    iterations: AES_KEY_OPTIONS.iterations 
  });    
  
  return AES_KEY.toString(CryptoJS.enc.Base64);
}


export  const simetricEncrypt = (data:string, AES_Key: string) => {
  return CryptoJS.AES.encrypt(data, AES_Key).toString();  
}

