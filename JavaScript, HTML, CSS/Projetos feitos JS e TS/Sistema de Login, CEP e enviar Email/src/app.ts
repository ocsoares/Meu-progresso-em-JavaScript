// IMPORTANTE: Por algum motivo NÃO estava encontrando o 'process' de .env, então Resolvi alterando em 'types' no tsconfig.json colo-
// -cando "types": ["node"] !! <<

import 'dotenv/config'
import express from 'express';
import { AppDataSource } from './database';
import { errorMiddleware } from './middlewares/error.middleware';
import checkStatusRoute from './routes/check-status.route';
import crudRoute from './routes/crud.route';

AppDataSource.initialize().then(() => { // POR ALGUM MOTIVO o Erro ainda está sendo Imprimido no console e NÃO no Thunder !! << 
    const server = express();
    
    const host = 'http://localhost';
    const port = 5000;

    server.use(express.json());
    server.use(express.urlencoded({extended: true}));

    server.use(checkStatusRoute);
    server.use(crudRoute);

    server.use(errorMiddleware);

    return server.listen(port, () => {
        console.log(`Servidor online na rota: ${host}:${port} !`);
    })
})