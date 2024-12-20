export const basicHeaders = {
  'Content-Type': 'application/json;charset=utf-8',
};

const DOMAIN = process.env.REACT_APP_DOMAIN! ?? 'http://dev.smandes.gov.ar';

export const API_URL = DOMAIN + '/api/sysgetdata';

export const Endpoints = {
  CIPHER_KEY: '/cipher-key',
  ENCODED: '/encoded',
};
