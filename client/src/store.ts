import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { albumListReducer } from './reducers/albumReducers';

const middlewares = [thunk];

const reducer = combineReducers({
    albumList: albumListReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store
