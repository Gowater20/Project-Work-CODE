import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Non funzionante 
/* export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
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
}; */


// Middleware per verificare il token e ottenere le informazioni dell'utente
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Ottenere il token dal cookie
    const token = req.cookies.token;
    console.log("che cazzo è", token);

    // Verifica se il token è presente
/*     if (!token) {
        return res.status(401).json({ message: 'Accesso negato. Token non fornito.' });
    }

    try {
        // Verifica il token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string, role: string };

        // Aggiungi le informazioni dell'utente alla richiesta per l'uso successivo nelle route
        req.user = {
            id: decoded.id,
            role: decoded.role
        };

        // Passa alla prossima funzione middleware o alla route
        next();
    } catch (error) {
        // Se il token non è valido
        return res.status(403).json({ message: 'Accesso negato. Token non valido.' });
    } */
};

/* // Esempio di utilizzo del middleware per una route
router.get('/user', verifyToken, (req: Request, res: Response) => {
    // Utilizza le informazioni dell'utente dalla richiesta
    const userId = req.user.id;
    const userRole = req.user.role;

    // Puoi quindi utilizzare userId e userRole per ottenere le informazioni dell'utente dal tuo sistema di autenticazione
    // E quindi restituire le informazioni dell'utente come desiderato
    res.status(200).json({ userId, userRole });
}); */
