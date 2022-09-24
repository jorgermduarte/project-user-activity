import express = require('express');
import {requestLogger} from '../../../infrastructure/logger/request-logger';

const requestLoggerMiddleware = function(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) {
  requestLogger.log(request, response);
  next();
};

export {requestLoggerMiddleware};
