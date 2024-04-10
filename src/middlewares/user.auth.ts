import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Funzione per verificare il token JWT
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Estrai il token dalla richiesta
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    // Verifica il token utilizzando la chiave segreta
    const secretKey = "test";
    if (!secretKey) {
        return res.status(500).json({ error: 'JWT secret key not valid' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        // Se il token è valido, aggiungi i dati decodificati alla richiesta e passa alla prossima funzione middleware
        (req as any).decoded = decoded;
        next();
    } catch (error) {
        // Se il token non è valido, restituisci un errore di autorizzazione
        return res.status(401).json({ error: 'Invalid token' });
    }
};