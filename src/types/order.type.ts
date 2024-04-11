import { Document, Schema, ObjectId } from 'mongoose';


export interface IOrder {
    _id?: string;
    cart: Schema.Types.ObjectId;
    //status: string;
    name:string,
    surname:string,
    address: string;
    city: string;
    region: string;
    state: string;
    postalCode: string;
    createdAt?: Date;
    updatedAt?: Date;
}
