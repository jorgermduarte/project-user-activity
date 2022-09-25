import express = require('express');
import {WebException} from '../../shared/exceptions/webException';
import {StatusType} from '../common/response/response';

export default {
  getAuthorizationSpotify: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    throw new WebException('Not implemented', StatusType.NotImplemented);
  },
  getAuthorizationSpotifyCallback: (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    throw new WebException('Not implemented', StatusType.NotImplemented);
  },
};
