import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SnackbarMessage from '../components/SnackbarMessage';
import { addToCart } from '../state/cart/cartActions';
import { IState } from '../state/store';

interface Props {
    id: string;
}

const CartPage = ({ match, location, history }: RouteComponentProps<Props>) => {
    const albumId = match.params.id;
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: IState) => state.cart);

    useEffect(() => {
        if(albumId) {
            dispatch(addToCart(albumId, quantity));
        }
    }, [dispatch, albumId, quantity]);


    return (
        <div>
            Cart
        </div>
    )
}

export default CartPage
