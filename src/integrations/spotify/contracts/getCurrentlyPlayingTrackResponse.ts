type currentlyPlayingTrackQuery = {
    market?: string;
    additional_types?: string;
}

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

type currentlyPlayingTrackResponse = {
    is_playing: boolean;
    device?: device;
    item: item;
    shuffle_state?: boolean;
    repeat_state?: string;
}


export {currentlyPlayingTrackQuery, currentlyPlayingTrackResponse};
