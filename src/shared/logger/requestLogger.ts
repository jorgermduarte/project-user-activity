import express = require('express');

interface IRequestLogger {
    log(request: express.Request, response: express.Response): void;
}

// eslint-disable-next-line require-jsdoc
class RequestLogger implements IRequestLogger {
  // eslint-disable-next-line require-jsdoc
  log(request: express.Request, response: express.Response): void {
    console.log(
        `[${new Date().toISOString()}][${request.method}]` +
            ` - ${request.url} `,
    );
  }
}

const requestLogger = new RequestLogger();

export {requestLogger};
