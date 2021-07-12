import { ID_OF_TOP_PLAYLIST, SEARCH_TYPE } from "../utils/config";
import BaseService from "./BaseService";

class TrackService extends BaseService {
    searchTrackService = (name,limit) => {
        return this.get(`https://api.spotify.com/v1/search?q=${name}&type=${SEARCH_TYPE}&limit=${limit}`);
    }
    getTopTracksService = () => {
        return this.get(`https://api.spotify.com/v1/playlists/${ID_OF_TOP_PLAYLIST}`);
    }
    getTrackDetail = (id) => {
        return this.get(`https://api.spotify.com/v1/tracks/${id}`);
    }
    getTrackRelatedArtist = (id) => {
        return this.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=VN`);
    }
    getFeaturedPlayLists = (limit) => {
        return this.get(`https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`);
    }
    getPlayListDetail = (id) => {
        return this.get(`https://api.spotify.com/v1/playlists/${id}`);
    }
}

export const trackService = new TrackService();