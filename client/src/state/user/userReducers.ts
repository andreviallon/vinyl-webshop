import { UserAction, UserState } from './userStateModel';
import * as actionTypes from './userActionTypes';

const userFromLocalStorage = localStorage.getItem('userInfo');
const initialUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : undefined;


export const initialCartState: UserState = {
    loading: false,
    user: initialUser,
    error: undefined
};

export const userLoginReducer = (state: UserState = initialCartState, action: UserAction): UserState => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return { ...state, loading: true, user: undefined, error: undefined }
        case actionTypes.USER_LOGIN_SUCCESS:
            return { ...state, loading: true, user: action.user, error: undefined }
        case actionTypes.USER_LOGIN_FAIL:
            return { ...state, loading: false, user: action.user, error: action.error }
        case actionTypes.USER_LOGOUT:
            return { loading: false, user: undefined, error: undefined }
        default: return state;
    };
};
