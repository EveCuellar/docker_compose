import express from 'express';
import { AnimalesRouter } from './routes/rutasAnimales.js';
import { AuthRouter } from './routes/rutasAuth.js';
import { conectar } from './db/mongo.js';
import { verificarToken } from './middleware/verificacion.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/animales", verificarToken, AnimalesRouter);
app.use("/auth", AuthRouter)

conectar();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


