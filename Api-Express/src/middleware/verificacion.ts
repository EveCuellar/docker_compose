import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const clave = 'fjw43fslkH5h78skjH!@5ksld&k!@76hks';

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.status(400).json({ error: 'No hay Token' });
    }else{
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, clave);
            req.user = decoded;
            next(); 
        } catch (error) {
            res.status(400).json({ error: 'Token no valido' });
        }
    } 
};
