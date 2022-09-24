import express = require('express');
import {requestLoggerMiddleware} from '../middleware/main/logger.middleware';

const startMainMiddlewares = (server: express.Express) => {
  server.get('*', requestLoggerMiddleware);
};

export {
  startMainMiddlewares,
};
