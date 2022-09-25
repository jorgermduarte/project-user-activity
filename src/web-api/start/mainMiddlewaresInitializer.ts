import express = require('express');
import {requestLoggerMiddleware} from '../middleware/main/loggerMiddleware';

const startMainMiddlewares = (server: express.Express) => {
  server.get('*', requestLoggerMiddleware);
};

export {
  startMainMiddlewares,
};
