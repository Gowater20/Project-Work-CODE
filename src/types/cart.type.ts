import { Schema } from "mongoose";

export interface ICart {
	user: Schema.Types.ObjectId;
	Products: {
		filter(arg0: (product: any) => boolean): {
			push: any;
			id: string;
			name: string;
			price: number;
			quantity: number;
			brand: string;
			sales: number;
		}[]; // aggiunto per indicare che è un array (per typescript)
	};
	push: any;
}



