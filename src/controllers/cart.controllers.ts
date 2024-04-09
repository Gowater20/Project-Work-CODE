import { Request, Response } from 'express';
import {
	getCart,
	addProductToCart,
	removeProductFromCart,
	removeCart,
	getProductFromCart,
} from '../services/cart.service';

export const getCartController = async (req: Request, res: Response) => {
	try {
		const cart = await getCart();
		if (!cart) {
			return res
				.status(404)
				.json({ success: false, error: 'Cart not found' });
		}
		res.status(200).json({ success: true, data: cart });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while fetching cart',
		});
	}
};

export const addProductToCartController = async (
	req: Request,
	res: Response
) => {
	const { id } = req.params;
	const productData = req.body;
	try {
		const cart = await addProductToCart(id, productData);
		res.status(200).json({ success: true, data: cart });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while adding product to cart',
		});
	}
};

export const removeProductFromCartController = async (
	req: Request,
	res: Response
) => {
	const { id } = req.params;
	const productName = req.body.name;
	try {
		const cart = await removeProductFromCart(id, productName);
		res.status(200).json({ success: true, data: cart });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while removing product from cart',
		});
	}
};

export const removeCartController = async (req: Request, res: Response) => {
	try {
		await removeCart();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while removing cart',
		});
	}
};
export const getProduct = async (req: Request, res: Response) => {
	const productId = req.params.id;
	try {
		const product = await getProductFromCart(productId);
		if (!product) {
			return res
				.status(404)
				.json({ success: false, error: 'Product not found in cart' });
		}
		res.status(200).json({ success: true, data: product });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while fetching product from cart',
		});
	}
};
