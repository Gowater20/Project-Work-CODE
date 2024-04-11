import { Request, Response, NextFunction } from 'express';
import { registerUser, matchUser } from '../services/user.service';
import { IUser } from '../types/user.type';
import { Jwt } from 'jsonwebtoken';
import { createSecretToken } from '../utils/user.utils';
import bcrypt from 'bcrypt';

// funzionante

export const Signup = async (req: Request, res: Response) => {
    try {
        const newUser: IUser = req.body;
        const userCreated: IUser = await registerUser(newUser);
        return res.status(200).json({ userCreated });
    } catch (err: any) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
};
//   Funzionante


/* export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            return res.status(400).json({ message: "Wrong email or password" });
        }
        // TODO inserisci token
        //const token = createSecretToken(userByEmail.id!, 30);
        //return res.status(200).json({ user: userByEmail, token });

        return res.status(200).json({ user });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
}; */

// funzionante con token (mia versione)

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await matchUser(email, password);
        if (!user) {
            return res.status(400).json({ message: "Wrong email or password" });
        }

        const secretKey = process.env.JWT_SECRET;

        if (!secretKey) {
            throw new Error('JWT secret key not valid');
        }

        const token = createSecretToken(email.id, 1);
        console.log(token)
        console.log(res.cookie("token", token, {
            httpOnly: false,
            //TODO aggiungi altri sistemi di sicurezza
        }));
        res
            .status(201)
            .json({ message: "User logged", success: true });
    } catch (error) {
        console.error(error);
    }
};

// TODO getUserLogged

// Middleware per verificare l'autenticazione dell'utente
/* export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    // Ottenere il token dal cookie
    const token = req.cookies.token;

    // Verifica se il token è presente
    if (!token) {
        return res.status(401).json({ message: 'Accesso negato. Token non fornito.' });
    }

    try {
        // Verifica il token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };

        // Aggiungi l'ID utente alla richiesta per l'uso successivo nelle route
        req.userId = decoded.id;

        // Passa alla prossima funzione middleware o alla route
        next();
    } catch (error) {
        // Se il token non è valido
        return res.status(403).json({ message: 'Accesso negato. Token non valido.' });
    }
}; */

