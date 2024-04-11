import { Request, Response } from 'express';
import Cart from '../models/cart.models';
import {
	showOrder,
	removeProductFromCart,
	removeOrder,
	newOrder,
	addCartToOrder,
} from '../services/order.service';
import { removeCartController } from './cart.controllers';
import { clearCart } from '../services/cart.service';
import Order from '../models/order.model';

// da testare
export const getOrders = async (req: Request, res: Response) => {
	const userId = req.body.userId;
	try {
		const orders = await showOrder(userId);
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while getting orders',
		});
	}
};


// crea nuovo ordine
export const createOrderHandler = async (req: Request, res: Response) => {
    const { name, surname, address, city, region, state, postalCode} = req.body;
    
    try {
        // Ottieni il carrello dell'utente
		const userCart = "6616a9ffca4167fcca78d422"
		//TODO inserisci dati dal token
		// TODO cerca carrello dall'utente loggato
        const cart = await Cart.findById(userCart)
        
        // Verifica se il carrello contiene prodotti
        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ success: false, error: 'Cart is empty' });
        }
        // Create the new order
        const newOrder = await addCartToOrder({cart})
        // Rimuovi i prodotti acquistati dal carrello
/*         await Promise.all(cart.products.map(async (product) => {
            await clearCart;
        })); */

        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        console.error("Errore durante la creazione dell'ordine:", error);
        res.status(500).json({ success: false, error: 'Errore durante la creazione dell\'ordine' });
    }
};

// da testare
export const removeOrderById = async (req: Request, res: Response) => {
	const orderId = req.params.id;
	try {
		await removeProductFromCart(orderId);
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while deleting order',
		});
	}
};

// da testare
export const removeAllOrders = async (req: Request, res: Response) => {
	try {
		await removeOrder();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while deleting all orders',
		});
	}
};

















/* export const createOrderHandler = async (req: Request, res: Response) => {
    const { name, surname, address, city, region, state, postalCode} = req.body;
    
    try {
        // Ottieni il carrello dell'utente
		const userCart = "6616a9ffca4167fcca78d422"
		//TODO inserisci dati dal token
		// TODO cerca carrello dall'utente loggato
        const cart = await Cart.findById({userCart})
        
        // Verifica se il carrello contiene prodotti
        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ success: false, error: 'Cart is empty' });
        }
		// Crea un nuovo ordine utilizzando i dati del carrello e l'indirizzo di spedizione
        const newOrderData = {
            Cart: cart._id,
            Order
        };
        // Create the new order
        const newOrder = await Order.create(newOrderData);
        // Rimuovi i prodotti acquistati dal carrello
/*         await Promise.all(cart.products.map(async (product) => {
            await clearCart;
        })); */
/* 
        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        console.error('Errore durante la creazione dell\'ordine:', error);
        res.status(500).json({ success: false, error: 'Errore durante la creazione dell\'ordine' });
    }
};  */