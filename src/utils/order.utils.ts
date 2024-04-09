import { Model } from 'mongoose';
import { Iorder } from '../types/order.type';

async function getAll(Order: Model<Iorder>) {
	try {
		const orders = await Order.find();
		return orders;
	} catch (error) {
		throw new Error('Error while fetching orders');
	}
}

export default getAll;
