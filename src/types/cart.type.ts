export interface Icart {
	id: string;
	Products: {
		filter(arg0: (product: any) => boolean): {
			push: any;
			id: string;
			name: string;
			price: number;
			quantity: number;
			brand: string;
			sales: number;
		};
		push: any;
	};
}
