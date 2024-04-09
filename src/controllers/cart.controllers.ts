import { Request, Response } from 'express';
import Cart, { ICart } from '../models/cart.models'; // Assicurati che il percorso al modello del carrello sia corretto
import { IProduct } from '../types/product.type'; // Assicurati che il percorso al tipo del prodotto sia corretto

export const showCart = async (req: Request, res: Response): Promise<void> => {
	try {
		const carts: ICart[] = await Cart.find();
		res.status(200).json(carts);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const addProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const cart: ICart | null = await Cart.findById(id);
		if (!cart) return res.status(404).json({ error: 'Cart not found' });

		const { name, price }: IProduct = req.body;
		cart.products.push({ name, price });
		await cart.save();
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const removeProduct = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const cart: ICart | null = await Cart.findById(id);
		if (!cart) return res.status(404).json({ error: 'Cart not found' });

		const { name }: { name: string } = req.body;
		cart.products = cart.products.filter(
			(product) => product.name !== name
		);
		await cart.save();
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const removeCart = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		await Cart.deleteMany();
		res.status(200).json({ message: 'Cart deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
};
