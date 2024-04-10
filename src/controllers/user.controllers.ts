import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/user.service';
import { IUser } from '../types/user.type';
import { Jwt } from 'jsonwebtoken';
import { createSecretToken } from '../utils/user.utils';

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

// funzionante

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            return res.status(400).json({ message: "Wrong email or password" });
        }

        const secretKey = process.env.JWT_SECRET;

        if (!secretKey) {
            throw new Error('JWT secret key not valid');
        }

        const token = createSecretToken(email.id!, 300);
        return res.status(200).json({ user: email, token });
        console.log(token);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

// TODO getUserLogged