import { AlbumListDispatchType } from './albumListStateModel';

import * as actionTypes from "./albumListActionTypes"
import axios from "axios";

export const listAlbums = () => async (dispatch: AlbumListDispatchType) => {
    try {
        dispatch({ type: actionTypes.ALBUM_LIST_REQUEST });

        const { data } = await axios.get('/api/albums');

        dispatch({
            type: actionTypes.ALBUM_LIST_SUCCESS,
            albums: data
        })
    } catch(err) {
        dispatch({
            type: actionTypes.ALBUM_LIST_FAIL,
            error: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
};
