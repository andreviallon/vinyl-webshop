import { UserAction, UserDetailsState, UserRegisterAction, UserRegisterState, UserState, UserDetailsAction } from './userStateModel';
import * as actionTypes from './userActionTypes';

const userFromLocalStorage = localStorage.getItem('userInfo');
const initialUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : undefined;


export const initialUserLoginState: UserState = {
    loading: false,
    user: initialUser,
    error: undefined
};

export const initialUserRegisterState: UserRegisterState = {
    loading: false,
    userInfo: undefined,
    error: undefined
};

export const initialUserDetailsState: UserDetailsState = {
    loading: false,
    userDetails: undefined,
    error: undefined,
    updateSuccess: false
};

export const userLoginReducer = (state: UserState = initialUserLoginState, action: UserAction): UserState => {
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

export const userRegisterReducer = (state: UserRegisterState = initialUserRegisterState, action: UserRegisterAction): UserRegisterState => {
    switch (action.type) {
        case actionTypes.USER_REGISTER_REQUEST:
            return { ...state, loading: true, userInfo: undefined, error: undefined }
        case actionTypes.USER_REGISTER_SUCCESS:
            return { ...state, loading: false, userInfo: action.userInfo, error: undefined }
        case actionTypes.USER_REGISTER_FAIL:
            return { ...state, loading: false, userInfo: action.userInfo, error: action.error }
        default: return state;
    };
};

export const userDetailsReducer = (state: UserDetailsState = initialUserDetailsState, action: UserDetailsAction): UserDetailsState => {
    switch (action.type) {
        case actionTypes.USER_DETAILS_REQUEST:
            return { ...state, loading: true, userDetails: undefined, error: undefined }
        case actionTypes.USER_DETAILS_SUCCESS:
            return { ...state, loading: false, userDetails: action.userDetails, error: undefined }
        case actionTypes.USER_DETAILS_FAIL:
            return { ...state, loading: false, userDetails: action.userDetails, error: action.error }
        default: return state;
    };
};

export const userUpdateProfileReducer = (state: UserDetailsState = initialUserDetailsState, action: UserDetailsAction): UserDetailsState => {
    switch (action.type) {
        case actionTypes.USER_UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true, error: undefined }
        case actionTypes.USER_DETAILS_SUCCESS:
            return { ...state, loading: false, userDetails: action.userDetails, error: undefined, updateSuccess: true }
        case actionTypes.USER_DETAILS_FAIL:
            return { ...state, loading: false, error: action.error }
        default: return state;
    };
};
