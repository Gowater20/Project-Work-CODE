import { createProduct, deleteProduct, showAllProducts, showProduct, upGrateProduct } from "../services/product.services";
import { IProduct } from "../types/product.type";
import { Request, Response } from "express";


export const getProductById = async (req: Request, res: Response) => {
	try {
		const products = await showProduct(req.params.id);
		if (products) {
			res.status(200).json(products);
		} else {
			throw new Error("product not found");
		}
	} catch {
		res.status(404).json("message: errore");
	}
};

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await showAllProducts();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json("message:errore");
	}
};

export const addProduct = async (req: Request, res: Response) => {
	try {
		const newProduct: IProduct = await createProduct(req.body);
		res.status(200).json({
			message: "User added successfully",
			newProduct,
		});
	} catch (error) {
		res.status(400).json("Bad Request");
	}
};

export const updateProduct = async (req: Request, res: Response) => {
	try {
		const products = await upGrateProduct(req.params.id);
		res.status(200).json({message: "product modify", products});
	} catch (error) {
		res.status(500).json("message:errore");
	}
};

export const deletedProduct = async (req: Request, res: Response) => {
	try {
		const product = await deleteProduct(req.params.id);
		res.status(200).json({ message: "product deleted", product });
	} catch (errore) {
		res.status(400).json("bad request");
	}
};
