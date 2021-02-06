import axios from 'axios';
import { UserDetailsDispatchType, UserDispatchType, UserRegisterDispatchType, UserUpdateProfileDispatchType } from "./userStateModel";
import * as actionTypes from "./userActionTypes";
import { IState } from '../store';
import { IUser } from '../../models/userModel';

export const login = (email: string, password: string) => async (dispatch: UserDispatchType) => {
    try {
        dispatch({
            type: actionTypes.USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } =  await axios.post('/api/users/login', { email, password, config });

        dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            user: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.USER_LOGIN_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    } 
};

export const logout = () => async (dispatch: UserDispatchType) => {
    localStorage.removeItem('userInfo');

    dispatch({
        type: actionTypes.USER_LOGOUT
    });
}


export const register = (name: string, email: string, password: string) => async (dispatch: UserDispatchType | UserRegisterDispatchType) => {
    try {
        dispatch({
            type: actionTypes.USER_REGISTER_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('/api/users', { name, email, password }, config);

        dispatch({
            type: actionTypes.USER_REGISTER_SUCCESS,
            userInfo: data
        });

        dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            user: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: actionTypes.USER_REGISTER_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
};

export const getUserDetails = (id: string) => async (dispatch: UserDetailsDispatchType, getState: () => IState) => {
    try {
        dispatch({
            type: actionTypes.USER_DETAILS_REQUEST
        });

        const { userLogin: { user } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        }

        const { data } = await axios.get(`/api/users/${id}`, config);

        dispatch({
            type: actionTypes.USER_DETAILS_SUCCESS,
            userDetails: data
        })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            //dispatch(logout())
            //Create logout function
        }
        dispatch({
            type: actionTypes.USER_DETAILS_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const updateUserProfile = (updatedUser: Partial<IUser>) => async (dispatch: UserUpdateProfileDispatchType, getState: () => IState) => {
    try {
        dispatch({
            type: actionTypes.USER_UPDATE_PROFILE_REQUEST
        });

        const { userLogin: { user } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        }

        const { data } = await axios.put(`/api/users/profile`, updatedUser, config);

        console.log('data', data);

        dispatch({
            type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
            userDetails: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.USER_UPDATE_PROFILE_FAIL,
            error: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};
