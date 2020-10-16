import { combineReducers } from 'redux';
import { AlbumState, AlbumAction } from './types';
import * as actionTypes from "./actionTypes";

const initialState: AlbumState = {
  albums: []
}

const albumReducer = (state: AlbumState = initialState, action: AlbumAction): AlbumState => {
  switch (action.type) {
    default: return state;
  }
}

const reducer = combineReducers({ albumReducer });

export default reducer;
