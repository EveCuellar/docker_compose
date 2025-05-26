import mongoose, { Schema, Document } from 'mongoose';

export interface Animal extends Document {
    especie: string;
    edad: number;
    esDomestico: boolean;
}

const animalSchema = new mongoose.Schema<Animal>({
    especie: String,
    edad: Number,
    esDomestico: Boolean
});

export const AnimalModel = mongoose.model<Animal>('animales', animalSchema);
