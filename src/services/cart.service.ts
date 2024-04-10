import Cart from '../models/cart.models';
import { ICart } from '../types/cart.type';
import { Product } from '../models/product.models';

export const getCart = async (userId: string): Promise<ICart | null> => {
    try {
        const cart = await Cart.findOne({ user: userId });
        return cart;
    } catch (error) {
        console.error('Errore durante il recupero del carrello:', error);
        throw new Error('Errore durante il recupero del carrello');
    }
};

export const addProductToCart = async (
    userId: string,
    productId: string
): Promise<ICart | null> => {
    let cart = await Cart.findOne({ user: userId });
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


/* 	export const removeProductFromCart = async (
        productId: string | undefined
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


    // non funzionante
export const removeProductFromCart = async (
    userId: string,
    productId: string
): Promise<ICart | null> => {
    try {
        // Trova il carrello dell'utente
        let cart = await Cart.findOne({ user: userId });

        // Se il carrello non esiste, lancia un'eccezione
        if (!cart) {
            throw new Error("Carrello non trovato");
        }

        // Trova il prodotto da rimuovere dal carrello
        const product = await Product.findById(productId);

        // Se il prodotto non esiste, lancia un'eccezione
        if (!product) {
            throw new Error("Prodotto non trovato");
        }

        // Rimuovi il prodotto dall'array Products del carrello
        cart.Products = cart.Products.filter((p:string) => p.toString() !== productId);

        // Salva l'aggiornamento del carrello nel database
        await cart.save();

        // Ritorna l'oggetto cart aggiornato
        return cart;
    } catch (error) {
        // Gestisci gli errori
        console.error("Errore durante la rimozione del prodotto dal carrello:", error);
        return null;
    }
};




//clean cart
export const removeCart = async (): Promise<void> => {
    try {
        await Cart.deleteMany();
    } catch (error) {
        throw new Error('Error while removing cart');
    }
};
