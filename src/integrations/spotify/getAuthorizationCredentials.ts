
import {spotifyCfg} from './configuration/config';

const getAuthorizationCredentials = () => {
  return {
    response_type: 'code',
    client_id: spotifyCfg.clientId,
    scope: spotifyCfg.scopes,
    redirect_uri: spotifyCfg.redirectUri,
    spotify_authorization_url: spotifyCfg.authorizationUrl,
  };
};

export {
  getAuthorizationCredentials,
};
