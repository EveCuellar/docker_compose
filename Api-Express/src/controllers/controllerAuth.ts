/*import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Usuario, UsuarioModel } from '../models/userModel.js';

const clave = 'fjw43fslkH5h78skjH!@5ksld&k!@76hks'; 

export class ControllerAuth {
  
    static async registrar(req: Request, res: Response) {
        const { nombre, contraseña } = req.body;
    
        if (!nombre || !contraseña) {
            return res.status(400).json({ error: 'Nombre y contraseña son requeridos' });
        }
    
        try {
            const existeUsuario = await UsuarioModel.findOne({ nombre });
            if (existeUsuario) {
                return res.status(400).json({ error: 'Ya existe un usuario con este nombre' });
            }
    
            const contraseñaHasheada = await bcrypt.hash(contraseña, 10);
    
            const nuevoUsuario = new UsuarioModel({ nombre, contraseña: contraseñaHasheada });
    
            await nuevoUsuario.save();
    
            return res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
        } catch (error) {
            return res.status(500).json({ error: 'Hubo un error al registrar el usuario' });
        }
    }
    

    static async logear(req: Request, res: Response) {
        const { nombre, contraseña } = req.body;
    
        if (!nombre || !contraseña) {
            return res.status(400).json({ error: 'Nombre y contraseña son requeridos' });
        }
    
        try {
            const usuario = await UsuarioModel.findOne({ nombre });
            if (!usuario) {
                return res.status(400).json({ error: 'Usuario no encontrado' });
            }
    
            const validaContra = await bcrypt.compare(contraseña, usuario.contraseña);
            if (!validaContra) {
                return res.status(400).json({ error: 'Contraseña incorrecta' });
            }
    
            const token = jwt.sign({ idUsuario: usuario._id }, clave, { expiresIn: '1h' });
    
            return res.json({ token });
        } catch (error) {
            console.error('Error en el login:', error); 
            return res.status(400).json({ error: 'Hubo un error en el proceso de login' });
        }
    }
    
}*/