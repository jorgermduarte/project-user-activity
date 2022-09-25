import express = require('express');
import {StatusType} from '../common/response/response';
import querystring = require('querystring');
import {
  getAuthorizationCredentials as getSpotifyAuthorizationCredentials,
} from '../../integrations/spotify/getAuthorizationCredentials';
import {
  getAccessToken as getSpotifyAccessToken,
} from '../../integrations/spotify/getAccessToken';
import {Response} from '../common/response/response';

export default {
  getAuthorizationSpotify: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    const authorizationSpotifySettings = getSpotifyAuthorizationCredentials();
    response.redirect(
        `${authorizationSpotifySettings.spotify_authorization_url}/authorize?` +
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
    const code = request.query.code as string;
    getSpotifyAccessToken(code).then((accessToken) => {
      new Response(request, response)
          .setStatus(StatusType.Ok)
          .setResult({
            access_token: accessToken,
          })
          .send();
    }).catch((error) => {
      next(error);
    });
  },
};
