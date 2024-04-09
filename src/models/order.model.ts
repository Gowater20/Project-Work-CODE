import mongoose from 'mongoose';
import { Iorder } from '../types/order.type';

const orderSchema = new mongoose.Schema<Iorder>(
	{
		id: { type: String, required: true },
		Icart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
		payment: { method: String },
		status: {
			type: String,
			required: true,
			enum: ['pending', 'processing', 'shipped', 'delivered'],
		},
		total: { type: Number, required: true },
		address: { street: String, city: String, required: true },
		postalcode: { type: Number, required: true },
		phone: { type: Number, required: false },
		notes: { type: String, required: false },
	},
	{ timestamps: true }
);

const Order = mongoose.model<Iorder>('Order', orderSchema);
export default Order;
