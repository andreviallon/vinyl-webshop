import axios from 'axios';
import { UserDispatchType, UserRegisterDispatchType } from "./userStateModel";
import * as actionTypes from "./userActionTypes";

export const login = (email: string, password: string) => async (dispatch: UserDispatchType) => {
    try {
        dispatch({
            type: actionTypes.USER_LOGIN_REQUEST,
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
    })
}


export const register = (name: string, email: string, password: string) => async (dispatch: UserDispatchType | UserRegisterDispatchType) => {
    try {
        dispatch({
            type: actionTypes.USER_REGISTER_REQUEST,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post('/api/users', { name, email, password });

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
