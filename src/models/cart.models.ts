import mongoose from 'mongoose';
import { Icart } from '../types/cart.type';

const cartSchema = new mongoose.Schema<Icart>(
	{
		id: { type: String, required: true },
		Iproducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
	},
	{ timestamps: true }
);

const Cart = mongoose.model<Icart>('Cart', cartSchema);

export default Cart;
