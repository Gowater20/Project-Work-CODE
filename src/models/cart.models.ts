import mongoose from 'mongoose';
import { Icart } from '../types/cart.type';

const cartSchema = new mongoose.Schema<Icart>(
	{
		user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
		},
		Products: [{ 
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Product', 
			required: true,
		}],
	},
	{ timestamps: true }
);

const Cart = mongoose.model<Icart>('Cart', cartSchema);

export default Cart;
