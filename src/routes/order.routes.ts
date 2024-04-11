import { Router } from 'express';
import {
	
	createOrderHandler,
	//getOrderById,
	getOrders,
	removeAllOrders,
	removeOrderById,
} from '../controllers/order.controllers';

export const router = Router();
router.get('/', getOrders); // storico ordini utente loggato
router.post('/', createOrderHandler); // crea nuovo ordine dai prodotti presenti nel carrello
router.get('/:id'); // restituisce ordine dall'id order
router.put('/:id', removeOrderById); // aggiorna stato ordine (ADMIN)
router.delete('/:id', removeAllOrders); // cancella stato ordine (ADMIN)
