import { AlbumDetailsDispatchType, AlbumListDispatchType } from "../models/AlbumModel";
import * as actionTypes from "./albumActionTypes"
import axios from 'axios';

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
