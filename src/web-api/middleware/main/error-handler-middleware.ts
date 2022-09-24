import express = require('express');
import {WebException} from '../../common/exceptions/web-exception';
import {Response, StatusType} from '../../common/response/response';

// eslint-disable-next-line max-len
const handleExpressErrorMiddleware = (error: Error | WebException, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (error && error instanceof WebException) {
    new Response(req, res)
        .setMessage(error.message)
        .setStatus(error.statusType)
        .send();
  } else if (error) {
    new Response(req, res)
        .setErrors([error.message])
        .setStatus(StatusType.InternalServerError)
        .send();
  } else {
    next();
  }
};

export {
  handleExpressErrorMiddleware,
};

