import { Router } from 'express';

import {
	addProductToCartController,
	getCartController,
	getProduct,
	removeCartController,
	removeProductFromCartController,
} from '../controllers/cart.controllers';

export const router = Router();

router.get('/cart', getCartController);
router.get('/cart/:id', getProduct);
router.post('/cart/:id', addProductToCartController);
router.delete('/cart/:id', removeProductFromCartController);
router.delete('/cart', removeCartController);
