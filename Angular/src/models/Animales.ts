export class Animales {
   
    especie: String;
    edad: Number;
    esDomestico: boolean

    constructor(especie: String, edad: Number, esDomestico: boolean) {
        this.especie = especie;
        this.edad = edad;
        this.esDomestico = esDomestico
    }
}