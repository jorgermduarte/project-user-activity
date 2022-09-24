import express = require('express');
import {validationResult} from 'express-validator';
import {Response, StatusType} from '../response/response';

const requestValidator = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    new Response(request, response)
        .setStatus(StatusType.BadRequest)
        .setErrors(
            errors.array()
                // eslint-disable-next-line max-len
                .map((err) => `[${err.location}][${err.param}] error: ${err.msg}`))
        .send();
  } else {
    next();
  }
};

export {requestValidator};
