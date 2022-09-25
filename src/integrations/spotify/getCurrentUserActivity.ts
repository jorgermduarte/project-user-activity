import {WebException} from '../../shared/exceptions/webException';
import {StatusType} from '../../shared/types/statusType';
import {shopifyApi} from './configuration/axiosInstance';
import {
  currentlyPlayingTrackResponse,
} from './contracts/getCurrentlyPlayingTrackResponse';

const getCurrentUserActivity = (accessToken: string) => {
  return shopifyApi.request({
    method: 'get',
    url: '/me/player/currently-playing',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  }).then((response) => {
    if (response.status == StatusType.Ok) {
      const data = response.data as currentlyPlayingTrackResponse;
      console.log(data);
      return data;
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
