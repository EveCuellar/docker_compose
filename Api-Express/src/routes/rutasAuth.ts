import express, { Request, Response } from 'express';
import { ControllerAuth } from '../controllers/controllerAuth.js';


export const AuthRouter = express.Router();

AuthRouter.use(express.json());

AuthRouter.post('/login', async (req: Request, res: Response) => {
    try {
        await ControllerAuth.logear(req, res);
    }
    catch (error) {
        res.status(400).json({ error: 'ERROR' });
    }
});

AuthRouter.post('/register', async (req: Request, res: Response) => {
    try {
        await ControllerAuth.registrar(req, res);
    }
    catch (error) {
        res.status(400).json({ error: 'ERROR' });
    }
});
