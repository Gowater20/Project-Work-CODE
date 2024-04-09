import { Model, Document, Types } from 'mongoose';
import Order from '../models/order.model';
import { Iorder } from '../types/order.type';
import getAll from '../utils/order.utils';

export const showOrder = (orderId: string) => {
	return getAll(Order);
};
export const createOrder = (order: Iorder) => {
	return Order.create(order);
};
export const updateOrder = (orderId: string, orderUpdate: Partial<Iorder>) => {
	return Order.findByIdAndUpdate(orderId, orderUpdate);
};
export const deleteOrder = (orderId: string) => {
	return Order.findByIdAndDelete(orderId);
};
