import { Schema } from "mongoose";

export interface IProduct {
	id: string;
	name: String;
	brand: String;
	quantity: number;
	price: number;
	sale: number;
}