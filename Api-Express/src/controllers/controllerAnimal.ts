import { AnimalModel } from "../models/animalModel.js";
import express, { Request, Response } from 'express';
import { Types } from 'mongoose';

export class ControllerAnimal {
  
  static async agregar(especie: string, edad: number, esDomestico: boolean) {
    const newAnimal = new AnimalModel({ especie, edad, esDomestico });
    return await newAnimal.save();
  }

  static async obtenerTodos() {
    return await AnimalModel.find();
  }

  static async obtenerPorId(id: string) {
    return await AnimalModel.findById(id).exec();
  }

  static async actualizar(id: string, body: any) {
    return await AnimalModel.findByIdAndUpdate(id, body, { new: true });
  }

  static async eliminar(id: string) {
    return await AnimalModel.findOneAndDelete({ _id: new Types.ObjectId(id) });
  }
}