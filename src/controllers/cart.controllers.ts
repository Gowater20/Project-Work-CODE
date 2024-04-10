import { Request, Response } from 'express';
import {
	getCart,
	addProductToCart,
	removeCart,
	removeProductFromCart
} from '../services/cart.service';

// da rivedere (non funzionante)
export const getCartController = async (req: Request, res: Response) => {
    const userId = req.body.userId; // TODO recuperare id utente dal JWT token
	try {
        const cart = await getCart(userId);
        if (!cart) {
            return res.status(404).json({ success: false, error: 'Carrello non trovato' });
        }
        res.status(200).json({ success: true, data: cart });
    } catch (error) {
        console.error('Errore durante la gestione della richiesta del carrello:', error);
        res.status(500).json({ success: false, error: 'Errore durante la gestione della richiesta del carrello' });
    }
};

// da rivedere (non funzionante)
export const addProductToCartController = async (
	req: Request,
	res: Response
) => {
	const productId = req.params.id;
	const userId = req.body.userId; // TODO recuperare id utente dal JWT token
	try {
		const cart = await addProductToCart(userId, productId);
		res.status(200).json({ success: true, data: cart });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			error: 'Error while adding product to cart',
		});
	}
};

// da rivedere (non funzionante)
export const removeProductFromCartController = async (
	req: Request,
	res: Response
) => {
	const productId= req.params.id; // id del prodotto
	const userId = req.params.userId; // id dell'utente associato al carrello

	try {
		const cart = await removeProductFromCart(userId, productId);
		res.status(200).json({ success: true, data: cart });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while removing product from cart',
		});
	}
};

// da rivedere (non funzionante)
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
