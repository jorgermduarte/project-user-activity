import express = require('express');
import {getHelloWorldById} from '../../domain/modules/example/get-hello-world';
import {
  getHelloWorldRequestParams,
} from '../api-contracts/example/get-hello-world-request';
import {
  getHelloWorldResponseMapper,
} from '../api-contracts/example/get-hello-world-response';
import {Response, StatusType} from '../common/response/response';

export default {
  home: async (
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
  ) => {
    const params = request.params as unknown as getHelloWorldRequestParams;
    getHelloWorldById(params.id).then( (data) => {
      new Response(request, response)
          .setStatus(StatusType.Ok)
          .setResult(getHelloWorldResponseMapper(data))
          .send();
    }).catch( (error) => next(error));
  },
};
