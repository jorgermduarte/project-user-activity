import {Axios} from 'axios';
import {shopifyCfg} from './config';

const shopifyApi = new Axios({
  baseURL: shopifyCfg.baseUrl,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {shopifyApi};
