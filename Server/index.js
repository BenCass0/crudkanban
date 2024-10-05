//modify packagejson to support modules in "type"
import express from 'express';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import proyectRoutes from './routes/proyect.routes.js'
const app=express();


app.listen(PORT);

app.use(express.json());
app.use(indexRoutes);

app.use(proyectRoutes);
console.log('Server is running on',PORT);