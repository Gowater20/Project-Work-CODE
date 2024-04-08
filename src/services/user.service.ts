import { IUser } from "../types/user.type";
import { User } from "../models/user.models";


// monstra utente dall'id --> MODIFICA CON RICERCA TOKEN
/* 
export const showUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
}; */


// registrazione user
export const registerUser = async (newUser: IUser): Promise<IUser> => {
    const userExists = await User.findOne({ email: newUser.email });
    if (userExists) {
        throw new Error("User already exists");
    }
    // TODO crypt passqword before storing data
    return await User.create(newUser);
};

// login user
export const loginUser = async (email: string, password: string): Promise<IUser | null> => {
    // TODO crypt passqword before querying database
    return await User.findOne({ email: email, password: password })
}





