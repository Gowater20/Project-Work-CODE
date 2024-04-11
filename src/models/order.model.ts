import mongoose, { Schema, Document } from 'mongoose';
import { IOrder } from '../types/order.type';
import { ICart } from '../types/cart.type';
const orderSchema = new Schema<IOrder>(
    {
        _id: { type: Schema.Types.ObjectId, required: true },
        cart: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
        //status: { type: String, default: 'pending' },
		name: { type: String, required: true },
		surname: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        region: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true }
    },
    { timestamps: true }
);

// Modello per l'ordine
const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
