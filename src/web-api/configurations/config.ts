// eslint-disable-next-line no-unused-vars
import * as dotenv from 'dotenv';
dotenv.config();

const corsOptions = {
  // origin: 'http://localhost:4200',
};

const serverOptions = {
  // eslint-disable-next-line no-undef
  port: process.env.PORT || 3000,
};


export {corsOptions, serverOptions};
