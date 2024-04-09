import Cart from '../models/cart.models';
import { Icart } from '../types/cart.type';
import getAll from '../utils/cart.utils'; // Assicurati che il percorso al file con la funzione getAll sia corretto

export const showCart = (cartId: string) => {
	getAll(Cart);
};
export const createCart = (cart: Icart) => {
	return Cart.create(cart);
};

export const updateCart = (cartId: string, cartUpdate: Partial<Icart>) => {
	return Cart.findByIdAndUpdate(cartId, cartUpdate);
};

export const deleteCart = (cartId: string) => {
	return Cart.findByIdAndDelete(cartId);
};
