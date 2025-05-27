import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { UsuarioService } from '../services/user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  nombre = '';
  password = '';

  constructor(private usuarioService: UsuarioService) {}

  async registrar() {
    try {
      const respuesta = await this.usuarioService.registrar(this.nombre, this.password);
      alert(respuesta.mensaje);
    } catch (error: any) {
      alert(error.response?.data?.mensaje || 'Error al registrar usuario');
    }
  }
}