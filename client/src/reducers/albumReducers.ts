import * as actionTypes from "../actions/albumActionTypes";
import { AlbumState, AlbumAction } from "../models/AlbumModel";

export const initialAlbumState: AlbumState = {
  albums: [],
  loading: false,
  error: undefined
};

export const albumListReducer = (state: AlbumState = initialAlbumState, action: AlbumAction): AlbumState => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, albums: action.albums, loading: false, error: undefined };
      
    case actionTypes.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.error };

    default: return state;
  };
}
