import { Request, Response } from 'express';
import {
	showOrder,
	showOrderById,
	removeProductFromCart,
	removeOrder,
	newOrder,
} from '../services/order.service';

export const getOrders = async (req: Request, res: Response) => {
	try {
		const orders = await showOrder();
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while getting orders',
		});
	}
};

export const getOrderById = async (req: Request, res: Response) => {
	const orderId = req.params.id;
	try {
		const order = await showOrderById(orderId);
		if (!order) {
			return res
				.status(404)
				.json({ success: false, error: 'Order not found' });
		}
		res.status(200).json({ success: true, data: order });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while getting order by id',
		});
	}
};

export const createOrder = async (req: Request, res: Response) => {
	const orderData = req.body;
	try {
		const order = await newOrder(orderData);
		res.status(201).json({ success: true, data: order });
	} catch (error) {
		res.status(500).json({
			success: false,
			error: 'Error while creating order',
		});
	}
};

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