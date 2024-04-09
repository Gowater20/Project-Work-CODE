export interface Icart {
	id: string;
	Iproducts: {
		id: string;
		name: string;
		price: number;
		quantity: number;
		brand: string;
		sales: number;
	};
}
