import express = require('express');
import {WebException} from '../../shared/exceptions/webException';
import {StatusType} from '../common/response/response';
import querystring = require('querystring');
import {
  getAuthorizationCredentials as getSpotifyAuthorizationCredentials,
} from '../../integrations/spotify/getAuthorizationCredentials';

export default {
  getAuthorizationSpotify: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    const authorizationSpotifySettings = getSpotifyAuthorizationCredentials( );
    response.redirect(authorizationSpotifySettings.spotify_authorization_url +
    querystring.stringify(
        {
          response_type: authorizationSpotifySettings.response_type,
          client_id: authorizationSpotifySettings.client_id,
          scope: authorizationSpotifySettings.scope,
          redirect_uri: authorizationSpotifySettings.redirect_uri,
        },
    ));
  },
  getAuthorizationSpotifyCallback: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    throw new WebException('Not implemented', StatusType.NotImplemented);
  },
};
