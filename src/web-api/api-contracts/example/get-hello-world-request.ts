import {param} from 'express-validator';
import {requestValidator} from '../../common/validators/main-validator';


type getHelloWorldRequestParams = {
    id: number;
}
type getHelloWorldRequestBody = {}

const getHelloWorldRequestValidator = [
  param('id').isInt(),
  requestValidator,
];


export {
  getHelloWorldRequestBody,
  getHelloWorldRequestParams,
  getHelloWorldRequestValidator,
};
