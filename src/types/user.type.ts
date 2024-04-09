import { Schema } from "mongoose";
export interface IUser {
    //id creato automaticamente da mongodb
    name: String;
    surname: String;
    email: string;
    password: string;
    card?: Schema.Types.ObjectId;
    cart?: Schema.Types.ObjectId;
    birthdate: string;
    role: string;
}