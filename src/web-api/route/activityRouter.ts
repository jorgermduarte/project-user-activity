import express = require('express');
import {accessTokenValidator} from '../common/validators/tokenValidator';
import activityController from '../controller/activityController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/me/activity/spotify',
    accessTokenValidator,
    activityController.getSpotifyActivity);

export default router;
