import express, { Request, Response } from 'express';
import { ControllerAnimal } from '../controllers/controllerAnimal.js';

export const AnimalesRouter = express.Router();

AnimalesRouter.use(express.json());

AnimalesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const animales = await ControllerAnimal.obtenerTodos();
    res.json(animales);
  } catch (error) {
    res.status(500).send('Error al obtener los animales');
  }
});

AnimalesRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const animal = await ControllerAnimal.obtenerPorId(req.params.id);
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).send({ mensaje: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).send('Error al obtener el animal');
  }
});

AnimalesRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { especie, edad, esDomestico } = req.body;
    const nuevoAnimal = await ControllerAnimal.agregar(especie, edad, esDomestico);
    res.status(201).json(nuevoAnimal);
  } catch (error) {
    res.status(500).send('Error al agregar el animal');
  }
});

AnimalesRouter.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const animalActualizado = await ControllerAnimal.actualizar(id, body);
    if (animalActualizado) {
      res.status(200).json(animalActualizado);
    } else {
      res.status(404).send({ mensaje: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).send('Error al actualizar el animal');
  }
});

AnimalesRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const animalEliminado = await ControllerAnimal.eliminar(req.params.id);
    if (animalEliminado) {
      res.status(200).json({ mensaje: 'Animal eliminado' });
    } else {
      res.status(404).send({ mensaje: 'Animal no encontrado' });
    }
  } catch (error) {
    res.status(500).send('Error al eliminar el animal');
  }
});