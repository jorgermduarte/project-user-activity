import {query} from 'express-validator';
import {requestValidator} from '../../common/validators/mainValidator';

const authorizationCodeValidator = [
  query('code').notEmpty(),
  requestValidator,
];

export {
  authorizationCodeValidator,
};
