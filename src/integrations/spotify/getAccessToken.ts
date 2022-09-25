import {WebException} from '../../shared/exceptions/webException';
import {StatusType} from '../../shared/types/statusType';
import {spotifyCfg} from './configuration/config';
import {Buffer} from 'buffer';
import axios from 'axios';
import querystring = require('querystring');

const getAccessToken = (code: string) => {
  const basicToken = (
    Buffer.from(spotifyCfg.clientId + ':' + spotifyCfg.clientSecret)
        .toString('base64')
  );
  const requestUrl = `${spotifyCfg.authorizationUrl}/api/token?`;

  return axios.request(
      {
        method: 'POST',
        url: requestUrl +
        querystring.stringify({
          code: code,
          redirect_uri: spotifyCfg.redirectUri,
          grant_type: 'authorization_code',
        }),
        headers: {
          'Authorization': `Basic ${basicToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
      }).then((response) => {
    if (response.status == StatusType.Ok) {
      const accessToken = response.data.access_token;

      return accessToken;
    } else {
      throw new WebException(
          'Error getting the user access token',
          StatusType.BadRequest,
      );
    }
  }).catch((error) => {
    throw new WebException(error, StatusType.InternalServerError);
  });
};

export {getAccessToken};
