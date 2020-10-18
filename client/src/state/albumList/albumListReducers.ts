import { AlbumListState, AlbumListAction } from "./albumListStateModel";
import * as actionTypes from "./albumListActionTypes";

export const initialAlbumListState: AlbumListState = {
	albums: [],
	loading: false,
	error: undefined
};

export const albumListReducer = (state: AlbumListState = initialAlbumListState, action: AlbumListAction): AlbumListState => {
	switch (action.type) {
		case actionTypes.ALBUM_LIST_REQUEST:
			return { ...state, loading: true };

		case actionTypes.ALBUM_LIST_SUCCESS:
			return { ...state, albums: action.albums, loading: false, error: undefined };
			
		case actionTypes.ALBUM_LIST_FAIL:
			return { ...state, loading: false, error: action.error };

		default: return state;
	};
}
