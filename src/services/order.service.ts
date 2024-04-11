import Cart from '../models/cart.models';
import Order from '../models/order.model';
import { ICart } from '../types/cart.type';
import { IOrder } from '../types/order.type';
import mongoose, { Document, Schema, ObjectId } from 'mongoose';


export const showOrder = async (userId: string): Promise<IOrder[]> => {
	try {
		const orders = await Order.find();
		return orders;
	} catch (error) {
		throw new Error('Error while fetching orders');
	}
};

export const showOrderById = async (
	orderId: string
): Promise<IOrder | null> => {
	try {
		const order = await Order.findById(orderId);
		return order;
	} catch (error) {
		throw new Error('Error while fetching order by id');
	}
};


export const addCartToOrder = async (cartId: object): Promise<ICart | any> => {
	try {
		//crea un nuovo ordine
		const order = await Order.create({ cartId });

		await order.save();
		console.log("questo è l'ordineeeeee", order)

		// Restituisci l'ordine aggiornato
		return order;
	} catch (error) {
		// Gestisci gli errori
		console.error("Order not created", error);
		return null;
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
