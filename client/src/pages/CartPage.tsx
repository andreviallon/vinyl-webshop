import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/cart/cartActions';
import { IState } from '../state/store';
import CartDetails from '../components/CartDetails';

interface Props {
    id: string;
}

const CartPage = ({ match, location, history }: RouteComponentProps<Props>) => {
    const albumId = match.params.id;
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: IState) => state.cart);

    const removeFromCartHandler = (id: string) => {
        // dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    useEffect(() => {
        if(albumId) {
            dispatch(addToCart(albumId, quantity));
        }
    }, [dispatch, albumId, quantity]);


    return (
        <div>
            <CartDetails cartItems={cartItems}/>
        </div>
    )
}

export default CartPage
