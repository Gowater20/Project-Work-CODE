import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/user.service';
import { IUser } from '../types/user.type';

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

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            return res.status(400).json({ message: "Wrong email or password" });
        }
        return res.status(200).json({ user});
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
};
