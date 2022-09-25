// eslint-disable-next-line no-unused-vars
import * as dotenv from 'dotenv';
dotenv.config();

const shopifyCfg = {
  // eslint-disable-next-line no-undef
  baseUrl: process.env.SHOPIFY_BASEURL || 'https://api.spotify.com/v1',
  // eslint-disable-next-line no-undef
  clientId: process.env.SHOPIFY_CLIENTID || 'clientId',
  // eslint-disable-next-line no-undef
  clientSecret: process.env.SHOPIFY_CLIENTSECRET || 'clientSecret',
  // eslint-disable-next-line no-undef
  redirectUri: process.env.SHOPIFY_REDIRECTURI || 'redirectUri',
};

export {shopifyCfg};
