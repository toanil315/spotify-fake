import { trackService } from "../../../service/TrackService";
import { STATUS_CODE } from "../../../utils/config";

export const searchTrackAction = (name, limit, offset = 0) => {
    return async (dispatch) => {
        try {
            const {data, status} = await trackService.searchTrackService(name, limit, offset);
            if(status === STATUS_CODE.SUCCESS) {
                return data;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}

export const getTopTracksAction = (limit)=> {
    return async (dispatch) => {
        try {
            const {data, status} = await trackService.getTopTracksService(limit);
            if(status === STATUS_CODE.SUCCESS) {
                const arrPromise = [];
                (data.tracks.items.slice(0, 15)).forEach(item => {
                    //arrPromise.push(trackService.getTrackDetail(item.track.id)); cach nay chuoi!!!
                    arrPromise.push(
                        dispatch(getTrackDetailAction(item.track.id))
                    );
                });
                const result = await Promise.all(arrPromise);
                return result;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}

export const getTrackDetailAction = (id) => {
    return async (dispatch) => {
        try {
            const {data, status} = await trackService.getTrackDetail(id);
            if(status === STATUS_CODE.SUCCESS) {
                return data;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}

export const getTrackRelatedArtistAction = (id) => {
    return async (dispatch) => {
        try {
            const {data, status} = await trackService.getTrackRelatedArtist(id);
            if(status === STATUS_CODE.SUCCESS) {
                return data.tracks;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}

export const getFeaturedPlayListsAction = (limit) => {
    return async(dispatch) => {
        try {
            const {data, status} = await trackService.getFeaturedPlayLists(limit);
            if(status === STATUS_CODE.SUCCESS) {
                return data.playlists.items;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}

export const getPlayListDetailAction = (id) => {
    return async (dispatch) => {
        try {
            const {data, status} = await trackService.getPlayListDetail(id);
            if(status === STATUS_CODE.SUCCESS) {
                return data;
            }
        }
        catch(error) {
            console.log("error: ", error);
        }
    }
}