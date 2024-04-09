import Cart from '../models/cart.models';
import { Icart } from '../types/cart.type';

export const getCart = async (): Promise<Icart | null> => {
	try {
		const cart = await Cart.findOne();
		return cart;
	} catch (error) {
		throw new Error('Error while fetching cart');
	}
};

export const addProductToCart = async (
	cartId: string,
	productData: any
): Promise<Icart | null> => {
	try {
		const cart = await Cart.findById(cartId);
		if (!cart) {
			throw new Error('Cart not found');
		}
		cart.Products.push(productData);
		await cart.save();
		return cart;
	} catch (error) {
		throw new Error('Error while adding product to cart');
	}
};

export const removeProductFromCart = async (
	cartId: string,
	productName: string
): Promise<Icart | null> => {
	try {
		const cart = await Cart.findById(cartId);
		if (!cart) {
			throw new Error('Cart not found');
		}
		cart.Products = cart.Products.filter(
			(product) => product.name !== productName
		);
		await cart.save();
		return cart;
	} catch (error) {
		throw new Error('Error while removing product from cart');
	}
};

export const removeCart = async (): Promise<void> => {
	try {
		await Cart.deleteMany();
	} catch (error) {
		throw new Error('Error while removing cart');
	}
};

export const getProductFromCart = async (productId: string): Promise<any> => {
	try {
		const cart = await Cart.findOne({ 'products.id': productId });
		if (!cart) {
			return null;
		}
		const product = cart.products.find(
			(product) => product.id === productId
		);
		return product;
	} catch (error) {
		throw new Error('Error while fetching product from cart');
	}
};
