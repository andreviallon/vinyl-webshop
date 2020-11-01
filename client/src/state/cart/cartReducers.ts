import { CartState, CartAction } from './cartStateModel';
import * as actionTypes from './cartActionTypes';

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const initialCartItems = cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [];

export const initialCartState: CartState = {
    cartItems: initialCartItems
};

export const cartReducer = (state: CartState = initialCartState, action: CartAction): CartState => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            const item = action.cartItem;

            console.log('item', item);
            console.log('state.cartItems', state.cartItems);

            const existItem = state.cartItems.find((cartItem) => cartItem.album._id === item.album._id);

            console.log('existItem', existItem);

            if (existItem) {
                return { ...state, cartItems: state.cartItems.map(cartItem => cartItem.album === existItem.album ? item : cartItem) };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }

        case actionTypes.CART_REMOVE_ITEM:
            return { ...state };
      
        default: return state;
    };
};
