import { Router } from 'express';

import {
	addProductToCartController,
	getCartController,
	//getProduct,
	removeCartController,
	removeProductFromCartController,
} from '../controllers/cart.controllers';

export const router = Router();

router.get('/', getCartController); // get all products by cart
// TODO da implementare
// router.get('/:id', getProduct); // get product by cart
router.post('/add/:id', addProductToCartController); // add product to cart
router.delete('/remove/:id', removeProductFromCartController); // remove product from cart
router.delete('/clear', removeCartController); // remove all products from cart
