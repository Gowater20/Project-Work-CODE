import { Router } from 'express';

export const router = Router();
Router.get('/orders', getOrder);
Router.get('/orders/:id', getOrderById);
Router.post('/orders', addOrder);
Router.delete('/orders/:id', removeOrder);
Router.delete('/orders', removeAllOrder);
