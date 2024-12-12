
export const basicHeaders = { 'Content-Type': 'application/json;charset=utf-8' };

const DEFAULT = 'http://staging.smandes.gov.ar/api-commons/sysgetdata';

const API_DEFINED = process.env.REACT_APP_API_COMMONS && process.env.REACT_APP_API_COMMONS + '/sysgetdata' 

export const API_URL = API_DEFINED || DEFAULT;

export const Endpoints = {
  CIPHER_KEY: "/cipher-key",
  ENCODED: "/encoded",
};