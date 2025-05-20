import URL_FRAGMENT from "../constants/urlFragmentConstant";

export const getTrackPath = (trackId: string) => {
    return `/${URL_FRAGMENT.TRACK}/${trackId}`;
}   

export const getArtistPath = (artistId: string) => {
    return `/${URL_FRAGMENT.ARTIST}/${artistId}`;
}

export const getAlbumPath = (albumId: string) => {
    return `/${URL_FRAGMENT.ALBUM}/${albumId}`;
}

export const getExplorePath = () => {
    return `/${URL_FRAGMENT.EXPLORE}`; 
}

export const getLibraryPath = () => {
    return `/${URL_FRAGMENT.LIBRARY}`;
}
