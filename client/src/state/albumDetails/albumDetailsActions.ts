import { AlbumDetailsDispatchType } from "./albumDetailsStateModel";
import axios from "axios";
import * as actionTypes from "./albumDetailsActionTypes";

export const listAlbumDetails = (id: string) => async (dispatch: AlbumDetailsDispatchType) => {
    try {
        dispatch({ type: actionTypes.ALBUM_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/albums/${id}`);

        dispatch({
            type: actionTypes.ALBUM_DETAILS_SUCCESS,
            album: data
        })
    } catch(err) {
        dispatch({
            type: actionTypes.ALBUM_DETAILS_FAIL,
            error: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
};
