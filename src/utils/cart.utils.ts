import { Model } from 'mongoose';
import { Icart } from '../types/cart.type'; // Assicurati che il percorso al tipo del carrello sia corretto

async function getAll(Cart: Model<Icart>): Promise<Icart[]> {
	try {
		const carts = await Cart.find();
		return carts;
	} catch (error) {
		throw new Error('Error while fetching carts');
	}
}

export default getAll;
