import * as actionTypes from "../actions/albumActionTypes";
import { AlbumListState, AlbumListAction, AlbumDetailsAction, AlbumDetailsState } from "../models/AlbumModel";

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

export const initialAlbumDetailsState: AlbumDetailsState = {
  album: {},
  reviews: [],
  loading: false,
  error: undefined
};

export const albumDetailsReducer = (state: AlbumDetailsState = initialAlbumDetailsState, action: AlbumDetailsAction): AlbumDetailsState => {
  switch (action.type) {
    case actionTypes.ALBUM_DETAILS_REQUEST:
      return { ...state, loading: true };

    case actionTypes.ALBUM_DETAILS_SUCCESS:
      return { ...state, album: action.album, reviews: action.reviews, loading: false, error: undefined };
      
    case actionTypes.ALBUM_DETAILS_FAIL:
      return { ...state, loading: false, error: action.error };

    default: return state;
  };
}
