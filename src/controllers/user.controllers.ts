import { Request, Response, NextFunction } from 'express';
import { registerUser, matchUser } from '../services/user.service';
import { IUser } from '../types/user.type';
import { createSecretToken } from '../utils/user.utils';

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

// TODO admin register

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
// TODO userInfo

