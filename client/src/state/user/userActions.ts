import axios from 'axios';
import { UserDispatchType } from "./userStateModel";
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
