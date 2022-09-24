// eslint-disable-next-line no-unused-vars
import * as dotenv from 'dotenv';
dotenv.config();

const sequelizeOptions = {
  // eslint-disable-next-line no-undef
  user: process.env.MYSQL_USER,
  // eslint-disable-next-line no-undef
  password: process.env.MYSQL_PASSWORD,
  // eslint-disable-next-line no-undef
  host: process.env.MYSQL_HOST,
  // eslint-disable-next-line no-undef
  database: process.env.MYSQL_DATABASE,
};

export {sequelizeOptions};
