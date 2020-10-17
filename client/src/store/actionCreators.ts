import * as actionTypes from "./actionTypes"
import { IAlbum } from './../models/AlbumModel';
import { AlbumAction, DispatchType } from './types';

export function addAlbum(album: IAlbum) {
	const action: AlbumAction = {
		type: actionTypes.ADD_ALBUM,
    	album
  	};

  	return (dispatch: DispatchType) => {
        dispatch(action);
    };
}

export function removeAlbum(album: IAlbum) {
  	const action: AlbumAction = {
    	type: actionTypes.REMOVE_ALBUM,
    	album
  	};

    return (dispatch: DispatchType) => {
        dispatch(action);
    };
}
