import { AlbumDispatchType } from "../models/AlbumModel";
import * as actionTypes from "./albumActionTypes"
import axios from 'axios';

export const listAlbums = () => async (dispatch: AlbumDispatchType) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });

        const { data } = await axios.get('/api/albums');

        dispatch({
            type: actionTypes.PRODUCT_LIST_SUCCESS,
            albums: data
        })
    } catch(err) {
        dispatch({
            type: actionTypes.PRODUCT_LIST_FAIL,
            error: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
};
