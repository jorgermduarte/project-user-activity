import express = require('express');
import authorizationController from '../controller/authorizationController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/authorization/spotify',
    authorizationController.getAuthorizationSpotify);

router.get('/authorization/spotify/callback',
    authorizationController.getAuthorizationSpotifyCallback);

export default router;
