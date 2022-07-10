    // IMPORTANTE: usar tsc arquivo.ts --target es6 = Transpila usando as Variáveis CORRETAS (const, let...) ao invés de var !!
    //  OBS: Pelo o que eu entendi, ele Transpila EXATAMENTE IGUAL de .ts para .js (ISSO PODE BUGAR !!)

    // RETIRAR o "type": "module" do package.json !!! <
    // ALTERAR o esModuleInterop em tsconfig.json para false !!! 
    // Importar MÓDULOS de BIBLIOTECAS com: import * as ... from '...';  !!!

import * as express from 'express';
import { routes } from './routes.js';

const server = express(); // Variável server Recebe a Função express() !!
const port = 5000;

server.use(express.json()); // Habilita a Leitura de arquivos .json !!
server.use(routes); // Trazendo para o Servidor as Informações de routes ! (no caso.)

    // Porta + Função a ser Executada (no caso, porta 5000 e Arrow Function com console.log) !!
server.listen(port, () => console.log(`Servidor rodando na porta ${port} !`));