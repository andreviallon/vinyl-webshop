import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { albumDetailsReducer } from './albumDetails/albumDetailsReducers';
import { AlbumDetailsState } from './albumDetails/albumDetailsStateModel';
import { albumListReducer } from './albumList/albumListReducers';
import { AlbumListState } from './albumList/albumListStateModel';
import { cartReducer } from './cart/cartReducers';
import { CartState } from './cart/cartStateModel';
import { userLoginReducer } from './user/userReducers';
import { UserState } from './user/userStateModel';

export interface IState {
    albumList: AlbumListState,
    albumDetails: AlbumDetailsState,
    cart: CartState,
    userLogin: UserState
}

export const rootReducer = combineReducers({
    albumList: albumListReducer,
    albumDetails: albumDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store
