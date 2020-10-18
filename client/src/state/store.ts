import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { albumDetailsReducer } from './albumDetails/albumDetailsReducers';
import { AlbumDetailsState } from './albumDetails/albumDetailsStateModel';
import { albumListReducer } from './albumList/albumListReducers';
import { AlbumListState } from './albumList/albumListStateModel';
import { cartReducer } from './cart/cartReducers';
import { CartState } from './cart/cartStateModel';

export interface IState {
    albumList: AlbumListState,
    albumDetails: AlbumDetailsState,
    cart: CartState
}

export const rootReducer = combineReducers({
    albumList: albumListReducer,
    albumDetails: albumDetailsReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store
