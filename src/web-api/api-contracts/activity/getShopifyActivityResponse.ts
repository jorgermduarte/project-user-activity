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
    artists: artist[];
    name: string;
    popularity?: number;
    preview_url?: string;
}

type getShopifyActivityResponse = {
    is_playing: boolean;
    device: device;
    item: item;
    shuffle_state: boolean;
    repeat_state: string;
}


const getShopifyActivityResponseMapper =
    (data: getShopifyActivityResponse) => {
      return {
        is_playing: data.is_playing,
        device: data.device,
        item: data.item,
        shuffle_state: data.shuffle_state,
        repeat_state: data.repeat_state,
      } as getShopifyActivityResponse;
    };

export {getShopifyActivityResponse, getShopifyActivityResponseMapper};
