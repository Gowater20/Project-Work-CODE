/* import { IUser } from "../types/user.type";

export const generateToken = (user: IUser): string => {
    const payload = {
        id: user.id?,
        email: user.email,
        // Altri dati dell'utente che potresti voler includere nel token
    };
    return jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: '3d' }); // Assicurati di avere definito JWT_SECRET nel tuo file .env
}; */