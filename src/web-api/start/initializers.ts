import {startMainMiddlewares} from './mainMiddlewaresInitializer';
import activityRouter from '../route/activityRouter';
import authorizationRouter from '../route/authorizationRouter';

const initializers = {
  startMainMiddlewares: startMainMiddlewares,
  routers: {
    activity: activityRouter,
    authorization: authorizationRouter,
  },
};

export {
  initializers,
};
