import {Axios} from 'axios';
import {spotifyCfg} from './config';

const spotifyApi = new Axios({
  baseURL: spotifyCfg.baseUrl,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {spotifyApi};
