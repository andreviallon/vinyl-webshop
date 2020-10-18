import { ICartItem } from "../../models/cartModel";

export type CartState = {
	cartItems: ICartItem[];
};

export type CartAction = {
	type: string;
	cartItem: ICartItem;
};

export type CartDispatchType = (args: CartAction) => CartAction
