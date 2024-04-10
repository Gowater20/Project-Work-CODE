import { NextFunction, Request, Response } from 'express';
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
//   Funzionante (senza token)


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

// funzionante (con token)

/* export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.json({ message: "All fields are required" });
        }

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
}; */


// aggiunte al login da implementare 

/* export const Login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "All fields are required" });
        }
        const user = await findUserByEmail(email);
        if (!user) {
            return res.json({ message: "Incorrect email or password" });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: "Incorrect password or email" });
        }

        const token = createSecretToken(user.id);
        res.cookie("token", token, {
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User logged in successfully", success: true });
        next();
    } catch (error) {
        console.error(error);
    }
}; */
// TODO getUserLogged

// da implementare 


/* export const Logout = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie("token");
        res
            .status(200)
            .json({ message: "User logged out successfully", success: true });
        next();
    } catch (error) {
        console.error(error);
    }
}; */