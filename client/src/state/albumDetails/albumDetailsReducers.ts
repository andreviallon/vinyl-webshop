import { AlbumDetailsState, AlbumDetailsAction } from "./albumDetailsStateModel";
import * as actionTypes from "./albumDetailsActionTypes";

export const initialAlbumDetailsState: AlbumDetailsState = {
  album: undefined,
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
