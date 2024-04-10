export interface Iorder {
	_id?: string;
	ICart: {
		id: string;
	};
	payment: {
		method: string;
	};
	status: string;
	total: number;
	createdAt: Date;
	updatedAt: Date;
	address: {
		street: string;
		city: string;
	};
	postalcode: number;
	phone: number;
	notes: string;
}
