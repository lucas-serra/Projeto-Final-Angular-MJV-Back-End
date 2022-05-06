import './config/env';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { conection } from './database/config';

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, async ()=>{
    const connectionResult = await conection;
    console.log(`status da conexão: ${connectionResult.isConnected ? 'Online':'offline'}`)
    console.log(`Servidor disponivel na porta ${port}`)
})