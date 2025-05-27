import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  async registrar(nombre: string, contraseña: string) {
    const response = await axios.post('http://localhost:3000/auth/register', {
      nombre,
      contraseña
    });
    return response.data;
  }
  async comprobar (nombre: string, contraseña: string) {
    const response = await axios.post('http://localhost:3000/auth/login', {
      nombre,
      contraseña
    });
    return response.data;
  }
}