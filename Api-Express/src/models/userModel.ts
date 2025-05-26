import mongoose, { Schema, Document } from 'mongoose';

export interface Usuario extends Document {
    nombre: string;
    contraseña: string;
}

const usuarioSchema = new mongoose.Schema<Usuario>({
    nombre: String,
    contraseña: String
});

export const UsuarioModel = mongoose.model<Usuario>('usuarios', usuarioSchema);