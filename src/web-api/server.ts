import express = require('express');
import {initializers} from './start/initializers';
import {serverOptions} from './configurations/config';
// eslint-disable-next-line no-unused-vars
import {
  handleExpressErrorMiddleware,
} from './middleware/main/errorHandlerMiddleware';
import {notFoundMiddleware} from './middleware/main/notFoundMiddleware';

const server = express();
const port = serverOptions.port;

server.use(express.json()); // parsing application/json
server.use(
    express.urlencoded({extended: true}),
); // parsing application/x-www-form-urlencoded
initializers.startMainMiddlewares(server);

server.use('/', [
  initializers.routers.activity,
  initializers.routers.authorization,
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
