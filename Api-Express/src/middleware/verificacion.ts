import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const clave = 'fjw43fslkH5h78skjH!@5ksld&k!@76hks';

export const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(400).json({ error: 'No hay Token' });
        return;
    }

    jwt.verify(token, clave, (err, user) => {
        if (err) {
          res.status(403).json({ message: 'Token inválido o expirado' });
          return;
        }
        (req as any).user = user;
        next();
    });
};
