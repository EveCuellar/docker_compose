import mongoose from 'mongoose';

const URL = process.env.MONGO_URI || 'mongodb://localhost:27017/animales';


export const conectar = async () => {
  try {
    await mongoose.connect(URL);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

