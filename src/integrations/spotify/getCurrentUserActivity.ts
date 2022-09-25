import axios from 'axios';
import {WebException} from '../../shared/exceptions/webException';
import {StatusType} from '../../shared/types/statusType';
import {spotifyCfg} from './configuration/config';
import {
  currentlyPlayingTrackResponse,
} from './contracts/getCurrentlyPlayingTrackResponse';

const getCurrentUserActivity = (accessToken: string) => {
  return axios.request({
    method: 'get',
    url: `${spotifyCfg.baseUrl}/me/player/currently-playing`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  }).then((response) => {
    if (response.status == StatusType.Ok) {
      return response.data as currentlyPlayingTrackResponse;
    } else {
      throw new WebException(
          'Error getting current user activity',
          StatusType.BadRequest,
      );
    }
  }).catch((error) => {
    throw new WebException(error, StatusType.InternalServerError);
  });
};

export {getCurrentUserActivity};
