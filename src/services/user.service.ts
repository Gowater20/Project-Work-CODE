import { IUser } from "../types/user.type";
import { User } from "../models/user.models";
import bcrypt from 'bcrypt';

export const registerUser = async (newUser: IUser): Promise<IUser> => {
    const userExists = await User.findOne({ email: newUser.email });
    if (userExists) {
        throw new Error("User already exists");
    }

    // Hash della password prima di salvarla nel database
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const user = await User.create({ ...newUser, password: hashedPassword });

    return user;
};

// login user
export const loginUser = async (email: string, password: string): Promise<IUser | null> => {
    // Trova l'utente per l'email
    const user = await User.findOne({ email });

    // Se l'utente non esiste, restituisci null
    if (!user) {
        return null;
    }

    // Verifica la password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Se la password è valida, restituisci l'utente
    if (isPasswordValid) {
        return user;
    }

    // Se la password non è valida, restituisci null
    return null;
};
