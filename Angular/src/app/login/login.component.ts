import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/user.service';
  
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService) {}

  async ingresar() {
    try {
      const respuesta = await this.usuarioService.comprobar(this.nombre, this.password);
      alert('Iniciando Sesión');
      if (respuesta.token) {
        localStorage.setItem('token', respuesta.token);
      }
    } catch (error: any) {
      alert(error.response?.data?.mensaje || 'Error al ingresar usuario');
    }
  }
}

