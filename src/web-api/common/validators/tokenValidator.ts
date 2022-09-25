import {header} from 'express-validator';
import {requestValidator} from '../../common/validators/mainValidator';

const accessTokenValidator = [
  header('x-access-token').notEmpty(),
  requestValidator,
];

export {
  accessTokenValidator,
};
