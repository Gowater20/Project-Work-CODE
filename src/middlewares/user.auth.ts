import { Request, Response, NextFunction } from 'express';
import { MongoCursorInUseError } from 'mongodb';
import { User } from '../models/user.models';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//const JWT_SECRET = process.env.JWT_SECRET;

// TODO jwt

/* export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('token', token);

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        if (!JWT_SECRET) {
            throw new Error('JWT secret is not defined');
        }

        const decodedToken: any = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}; */