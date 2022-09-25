import {startMainMiddlewares} from './mainMiddlewaresInitializer';
import activityRouter from '../route/activityRouter';

const initializers = {
  startMainMiddlewares: startMainMiddlewares,
  routers: {
    activity: activityRouter,
  },
};

export {
  initializers,
};
