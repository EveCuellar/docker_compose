import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  title = 'AngularRedes';
  
  nuevoAnimal: any = { especie: '', edad: 0, esDomestico: 0 }; 
  modAnimal: any = {especie: '', edad: 0, esDomestico: 0};
  mostrarFormulario: boolean = false; 
  animales: any[] = []; 

  idEditando: string | null = null;


  private apiUrl = 'http://localhost:3000/animales'; 
  private apiAddUrl = 'http://localhost:3000/animales/'; 
  private apiDeleteUrl = 'http://localhost:3000/animales';  

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    try {
      const response = await axios.get(this.apiUrl);
      this.animales = response.data;
    } catch (error) {
      console.error('Error al obtener los datos de los animales:', error);
    }
  }

  async eliminarAnimal(id: string): Promise<void> {
    try {
      await axios.delete(`${this.apiDeleteUrl}/${id}`);
      this.animales= this.animales.filter(c => c._id !== id);
      console.log(`Animal eliminado`);
    } catch (error) {
      console.error('Error al eliminar el animal:', error);
    }
  }

  async modAnimalfunc(id: string): Promise<void> {
    try {
      const response = await axios.patch(`${this.apiDeleteUrl}/${id}`, this.modAnimal);
      this.animales = this.animales.map(anim =>
        anim._id === id ? response.data : anim
      );
 
      this.modAnimal = { especie: '', edad: 0, esDomestico: 0};
      this.idEditando = null;
    } catch (error) {
      console.error('Error al modificar el animal', error);
    }
  }
  iniciarModificacion(Animal: any): void {
    this.modAnimal = {
      especie: Animal.especie,
      edad: Animal.edad,
      esDomestico: Animal.esDomestico
    };
    this.idEditando = Animal._id;
  }

  async agregarAnimal(): Promise<void> {
    if (this.nuevoAnimal.especie && this.nuevoAnimal.edad) {
      try {
        const response = await axios.post(this.apiAddUrl, this.nuevoAnimal);
        this.animales.push(response.data);
        this.nuevoAnimal = { especie: '', edad: 0, esDomestico: 0 };
        this.mostrarFormulario = false;
      } catch (error) {
        console.error('Error al agregar el animal:', error);
      }
    } else {
      alert('Por favor complete todos los campos.');
    }
  }
 

}
