import { CartDispatchType } from './cartStateModel';
import * as actionTypes from "./cartActionTypes"
import { IState } from '../store';
import axios from 'axios';
import { IAlbum } from '../../models/albumModel';

export const addToCart = (id?: string, quantity?: number) => async (dispatch: CartDispatchType, getState: () => IState) => {
    const { data } = await axios.get(`/api/albums/${id}`);

    if (quantity) {
        dispatch({
            type: actionTypes.CART_ADD_ITEM,
            cartItem: {
                album: data,
                quantity
            }
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id: string) => async (dispatch: CartDispatchType, getState: () => IState) => {
    dispatch({
        type: actionTypes.CART_REMOVE_ITEM,
        id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
