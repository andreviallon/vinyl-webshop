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
    return (
        <div>
            <CartDetails match={match} location={location} history={history} />
        </div>
    )
}

export default CartPage
