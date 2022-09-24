import express = require('express');
import {initializers} from './start/initializers';
import {serverOptions} from './configurations/config';
// eslint-disable-next-line no-unused-vars
import {
  handleExpressErrorMiddleware,
} from './middleware/main/error-handler-middleware';
import {notFoundMiddleware} from './middleware/main/not-found-middleware';

const server = express();
const port = serverOptions.port;

server.use(express.json()); // parsing application/json
server.use(
    express.urlencoded({extended: true}),
); // parsing application/x-www-form-urlencoded
initializers.startMainMiddlewares(server);

server.use('/', [
  initializers.routers.home,
]);
server.use(handleExpressErrorMiddleware);
server.use(notFoundMiddleware);

// start the Express server
server.listen( port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

export {
  server,
};
