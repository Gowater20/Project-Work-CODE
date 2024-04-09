import { Router } from 'express';
import {
	createOrder,
	getOrderById,
	getOrders,
	removeAllOrders,
	removeOrderById,
} from '../controllers/order.controllers';

export const router = Router();
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.delete('/orders/:id', removeOrderById);
router.delete('/orders', removeAllOrders);
