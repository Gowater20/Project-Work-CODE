import { Router } from 'express';
import {
	createOrder,
	getOrderById,
	getOrders,
	removeAllOrders,
	removeOrderById,
} from '../controllers/order.controllers';

export const router = Router();
router.get('/', getOrders); // storico ordine utente loggato
router.post('/', getOrderById); // crea nuovo ordine dai prodotti presenti nel carrello
router.get('/:id', createOrder); // restituisce ordine dall'id order
router.put('/:id', removeOrderById); // aggiorna stato ordine (ADMIN)
router.delete('/:id', removeAllOrders); // cancella stato ordine (ADMIN)
