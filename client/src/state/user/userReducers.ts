import { UserAction, UserState } from './userStateModel';
import * as actionTypes from './userActionTypes';

const userFromLocalStorage = localStorage.getItem('userInfo');
const initialUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : {};


export const initialCartState: UserState = {
    loading: false,
    user: initialUser,
    error: undefined
};

export const userLoginReducer = (state: UserState = initialCartState, action: UserAction): UserState => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case actionTypes.USER_LOGIN_SUCCESS:
            return { ...state, loading: true, user: action.user }
        case actionTypes.USER_LOGIN_FAIL:
            return { ...state, loading: true, user: action.user, error: action.error }
        case actionTypes.USER_LOGOUT:
            return { loading: false, user: undefined, error: undefined }
        default: return state;
    };
};
