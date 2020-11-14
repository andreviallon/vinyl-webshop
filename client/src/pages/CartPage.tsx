import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
