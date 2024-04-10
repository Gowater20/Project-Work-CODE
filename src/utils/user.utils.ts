import jwt from 'jsonwebtoken';

export const createSecretToken = (id: string, days: number) => {
    return jwt.sign({id}, 'secret', {
        expiresIn: days*24*60*60
    });
};