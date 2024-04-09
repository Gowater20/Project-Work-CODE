import mongoose from 'mongoose';
import { Icart } from '../types/cart.type';

const cartSchema = new mongoose.Schema<Icart>(
	{
		id: { type: String, required: true },
		Products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Iproduct' }],
	},
	{ timestamps: true }
);

const Cart = mongoose.model<Icart>('Cart', cartSchema);

export default Cart;
