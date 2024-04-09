import { Router } from 'express';
export const router = Router();

router.get('/cart', getCart);
router.post('/cart/:id', addProduct);
router.delete('/cart/:id', removeProduct);
router.delete('/cart', removeCart);
