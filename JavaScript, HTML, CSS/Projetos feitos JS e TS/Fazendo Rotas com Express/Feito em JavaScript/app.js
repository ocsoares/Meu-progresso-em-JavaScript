    // Métodos HTTP:
// GET - Ler os dados
// POST - Criar os dados
//PUT/PATCH - Editar os dados existentes
// DELETE - Deletar os dados existentes

// Usando a Extensão Thunder Client para enviar Requisições !!

import express from 'express';
import { routes } from './routes.js';

const server = express(); // Variável server Recebe a Função express() !!
const port = 5000;

server.use(express.json()); // Habilita a Leitura de arquivos .json !!
server.use(routes); // Trazendo para o Servidor as Informações de routes ! (no caso.)

    // Porta + Função a ser Executada (no caso, porta 5000 e Arrow Function com console.log) !!
server.listen(port, () => console.log(`Servidor rodando na porta ${port} !`));