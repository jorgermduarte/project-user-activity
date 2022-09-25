
import express = require('express');
import {Response, StatusType} from '../../common/response/response';

const notFoundMiddleware = function(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) {
  new Response(request, response)
      .setMessage('Endpoint doesn\'t exist')
      .setStatus(StatusType.NotImplemented)
      .send();
};

export {notFoundMiddleware};
