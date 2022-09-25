import express = require('express');
import {
  authorizationCodeValidator,
} from '../common/validators/authorizationCodeValidator';
import authorizationController from '../controller/authorizationController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/authorization/spotify',
    authorizationController.getAuthorizationSpotify);

router.get('/authorization/spotify/callback',
    authorizationCodeValidator,
    authorizationController.getAuthorizationSpotifyCallback);

export default router;
