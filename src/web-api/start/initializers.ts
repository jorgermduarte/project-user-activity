import {startMainMiddlewares} from './main-middlewares.initializer';
import homeRouter from '../route/home.router';


const initializers = {
  startMainMiddlewares: startMainMiddlewares,
  routers: {
    home: homeRouter,
  },
};

export {
  initializers,
};
