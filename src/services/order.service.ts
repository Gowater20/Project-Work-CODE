import Order from '../models/order.model';
import { Iorder } from '../types/order.type';

export const showOrder = async (): Promise<Iorder[]> => {
	try {
		const orders = await Order.find();
		return orders;
	} catch (error) {
		throw new Error('Error while fetching orders');
	}
};

export const showOrderById = async (
	orderId: string
): Promise<Iorder | null> => {
	try {
		const order = await Order.findById(orderId);
		return order;
	} catch (error) {
		throw new Error('Error while fetching order by id');
	}
};

export const addProductToCart = async (orderData: any): Promise<Iorder> => {
	try {
		const order = await Order.create(orderData);
		return order;
	} catch (error) {
		throw new Error('Error while adding product to order');
	}
};

export const removeProductFromCart = async (orderId: string): Promise<void> => {
	try {
		await Order.findByIdAndDelete(orderId);
	} catch (error) {
		throw new Error('Error while removing product from order');
	}
};

export const removeOrder = async (): Promise<void> => {
	try {
		await Order.deleteMany();
	} catch (error) {
		throw new Error('Error while removing order');
	}
};
