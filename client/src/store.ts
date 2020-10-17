import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { albumListReducer } from './reducers/albumReducers';

export const rootReducer = combineReducers({
  albumList: albumListReducer
});

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store
