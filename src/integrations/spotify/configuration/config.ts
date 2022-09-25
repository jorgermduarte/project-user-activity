// eslint-disable-next-line no-unused-vars
import * as dotenv from 'dotenv';
dotenv.config();

const spotifyCfg = {
  // eslint-disable-next-line no-undef
  baseUrl: process.env.SPOTIFY_BASEURL || 'https://api.spotify.com/v1',
  // eslint-disable-next-line no-undef
  clientId: process.env.SPOTIFY_CLIENTID || 'clientId',
  // eslint-disable-next-line no-undef
  clientSecret: process.env.SPOTIFY_CLIENTSECRET || 'clientSecret',
  // eslint-disable-next-line no-undef
  redirectUri: process.env.SPOTIFY_REDIRECTURI || 'redirectUri',
  scopes: 'user-read-private user-read-email user-read-currently-playing',
  // eslint-disable-next-line no-undef
  authorizationUrl: process.env.SPOTIFY_AUTHORIZATION_URL || 'https://accounts.spotify.com',
};

export {spotifyCfg};
