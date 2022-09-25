import express = require('express');
import {
  getCurrentUserActivity,
} from '../../integrations/spotify/getCurrentUserActivity';
import {
  getSpotifyActivityResponseMapper,
} from '../api-contracts/activity/getSpotifyActivityResponse';
import {Response, StatusType} from '../common/response/response';

export default {
  getSpotifyActivity: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    const accessToken = request.headers['x-access-token'] as string;

    getCurrentUserActivity(accessToken).then( (data) => {
      new Response(request, response)
          .setStatus(StatusType.Ok)
          .setResult(getSpotifyActivityResponseMapper(data))
          .send();
    }).catch( (error) => next(error));
  },
};
