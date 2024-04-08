/* import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.models';

const JWTMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded: any = jwt.verify(token, process.env.JWT_SECRET || '');
                const user = await User.findById(decoded?.id);
                if (user) {
                    req.user = user;
                    next();
                } else {
                    throw new Error("User not found");
                }
            }/
        } catch (error) {
            throw new Error("Not Authorized token expired. Please Login again");
        }
    } else {
        throw new Error("There is no token attached to header");
    }
};

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.user as { email: string };
    const adminUser = await User.findOne({ email });
    if (adminUser?.role !== "admin") {
        throw new Error("You are not an admin");
    } else {
        next();
    }
};

export { JWTMiddleware, isAdmin };
 */