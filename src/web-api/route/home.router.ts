import express = require('express');
import {
  getHelloWorldRequestValidator,
} from '../api-contracts/example/get-hello-world-request';
import homeController from '../controller/home.controller';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:id', getHelloWorldRequestValidator, homeController.home);

export default router;
