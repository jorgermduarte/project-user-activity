import {
  currentlyPlayingTrackResponse,
// eslint-disable-next-line max-len
} from '../../../integrations/spotify/contracts/getCurrentlyPlayingTrackResponse';

type device = {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
}

type image = {
    height: number;
    url: string;
    width: number;
}

type artist = {
    name: string;
    popularity: number;
    uri: string;
    images: image[];
}

type item = {
    track_number: number;
    explicit: boolean;
    duration_ms: number;
    progress_ms?: number;
    genres?: string[];
    artists?: artist[];
    name: string;
    popularity?: number;
    preview_url?: string;
}

type getSpotifyActivityResponse = {
    is_playing: boolean;
    device?: device;
    item: item;
    shuffle_state?: boolean;
    repeat_state?: string;
}

const getSpotifyActivityResponseMapper =
    (data: currentlyPlayingTrackResponse) => {
      return {
        is_playing: data.is_playing,
        device: {
          id: data.device?.id,
          is_active: data.device?.is_active,
          is_private_session: data.device?.is_private_session,
          is_restricted: data.device?.is_restricted,
          name: data.device?.name,
          type: data.device?.type,
          volume_percent: data.device?.volume_percent,
        },
        item: {
          track_number: data.item.track_number,
          explicit: data.item.explicit,
          duration_ms: data.item.duration_ms,
          progress_ms: data.item.progress_ms,
          genres: data.item.genres,
          name: data.item.name,
          artists: data.item.artists?.map((artist) => {
            return {
              name: artist.name,
              popularity: artist.popularity,
              uri: artist.uri,
              images: artist.images?.map((image) => {
                return {
                  height: image.height,
                  url: image.url,
                  width: image.width,
                };
              }),
            };
          }),
          popularity: data.item.popularity,
          preview_url: data.item.preview_url,
        },
        shuffle_state: data.shuffle_state,
        repeat_state: data.repeat_state,
      } as getSpotifyActivityResponse;
    };

export {getSpotifyActivityResponse, getSpotifyActivityResponseMapper};
