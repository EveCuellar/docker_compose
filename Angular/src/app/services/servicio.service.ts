import { Injectable } from '@angular/core';
import { Animales } from '../../models/Animales';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiURL = 'http://localhost:3000/animales';

  constructor() { }
  
  async getData(): Promise<Array<Animales>> {
    
    return (await axios.get(this.apiURL)).data;
    
  };


  httpPost(body : any): void {
    axios.post(this.apiURL, body)
  };


  httpDelete(data : any): void {
    axios.delete(this.apiURL, { data })
  };



  modificar( body : any){
    axios.put(this.apiURL, body)
  }

}
