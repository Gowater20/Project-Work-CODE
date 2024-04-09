import Cart from '../models/cart.models';
import { Icart } from '../types/cart.type';
import { Product } from '../models/product.models';

export const getCart = async (userId: string): Promise<Icart | null> => {
    try {
        const cart = await Cart.findOne({user: userId});
        return cart;
    } catch (error) {
        console.error('Errore durante il recupero del carrello:', error);
        throw new Error('Errore durante il recupero del carrello');
    }
};

export const addProductToCart = async (
    userId: string,
    productId: string
): Promise<Icart | null> => {
    let cart = await Cart.findOne({user: userId});
    if (!cart) {
        // create a cart for the user
        cart = await Cart.create({
            user: userId,
            Products: [],
        })
    }
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }

    cart.Products.push(product);
    await cart.save();

    return cart;
};

/* 
	export const removeProductFromCart = async (
		productId: string
	): Promise<Icart | null> => {
		try {
			const product = await Product.findById(productId);
			if (!product) {
				throw new Error("Product not found");
			}
	
			const cart = await Cart.findOneAndDelete(product);
	
			return cart;
		} catch(error) {
			throw new Error('Error while adding product to cart');
		}
	}; */


	//clean cart
	export const removeCart = async (): Promise<void> => {
		try {
			await Cart.deleteMany();
		} catch (error) {
			throw new Error('Error while removing cart');
		}
	};
