import { Request, Response } from 'express';
import {
	getCart,
	addProductToCart,
	removeProductFromCart,
	clearCart
} from '../services/cart.service';
import Cart from '../models/cart.models';

// mostra tutti i prodotti (funzionante)
export const getCartController = async (req: Request, res: Response) => {
    const userId = "66144f37c750c125fda509fa"; // TODO recuperare id utente dal JWT token
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

// aggiunge un prodotto (funzionante)
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

// rimuove il prodotto dal carrello (funzionante)
export const removeProductFromCartController = async (
	req: Request,
	res: Response
) => {
	const productId= req.params.id; // id del prodotto
	const userId =  "66144f37c750c125fda509fa" // req.params.userId; // id dell'utente associato al carrello (tramite token)

	try {
		const deletedProduct = await removeProductFromCart(userId, productId);
		res.status(200).json({ success: true, data: deletedProduct}); // TODO inserisci carrello aggiornato
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while removing product from cart',
		});
	}
};

// pulisci carrello (funzionante) 
export const removeCartController = async (req: Request, res: Response) => {
	const userId =  "66144d3ecd968b084ebe34c5" // req.params.userId; // id dell'utente associato al carrello (tramite token)
	try {
		await clearCart(userId);
		res.status(200).json({ message: "cart cleared" });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while removing cart',
		});
	}
};

// TODO non richiesto; aggiungi successivamente
/* export const getProduct = async (req: Request, res: Response) => {
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
}; */
