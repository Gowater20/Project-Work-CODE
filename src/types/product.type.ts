import { Schema } from "mongoose";

export interface IProduct {
	_id?: string;
	name: String;
	brand: String;
	quantity: number;
	price: number;
	sale: number;
}