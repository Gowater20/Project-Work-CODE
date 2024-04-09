/* import { Request, Response } from 'express';
import Order, { IOrder } from '../models/order.model'; // Assicurati che il percorso al modello dell'ordine sia corretto
import { IProduct } from '../types/product.type'; // Assicurati che il percorso al tipo del prodotto sia corretto

export const showOrder = async (req: Request, res: Response): Promise<void> => {
	try {
		const orders: IOrder[] = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const addProductToOrder = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const order: IOrder | null = await Order.findById(id);
		if (!order) return res.status(404).json({ error: 'Order not found' });

		const { name, price }: IProduct = req.body;
		order.products.push({ name, price });
		await order.save();
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const removeProductFromOrder = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const order: IOrder | null = await Order.findById(id);
		if (!order) return res.status(404).json({ error: 'Order not found' });

		const { name }: { name: string } = req.body;
		order.products = order.products.filter(
			(product) => product.name !== name
		);
		await order.save();
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const removeOrder = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		await Order.findByIdAndDelete(id);
		res.status(200).json({ message: 'Order deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};
 */