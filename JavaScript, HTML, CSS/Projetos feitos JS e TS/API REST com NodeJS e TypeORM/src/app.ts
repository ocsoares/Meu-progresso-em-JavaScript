// IMPORTANTE: Olhar os scripts feitos no package.json para se utilizar no TypeORM (CONFIGURAR o Arquivo do Banco de Dados !!) <<
// Explicação do script migration:generate = comando... -d /Arquivo de Configuração do Banco de Dados + comando... + Local onde as Migra-
// -grations vão ser Armazenadas !!
// Abaixo dele é o Script de Execução desse Script acima !!

//   Colocar no tsconfig para PARAR uns Erros do Typeorm =  "strictPropertyInitialization": false
// LEMBRETE: Tem um Comando que Instala as Pastas e Módulos do Typerom !!

// RELOGAR VSCODE = CTRL + Shit + P + Recarregar janela !!!

// NÃO precisa importar o .env Porque ele está na Pasta Raíz e Pode ser Usado por Todo o projeto !!

import express  from "express";
import { AppDataSource } from "./data-source";
import 'reflect-metadata'; // n sei se precisa disso <

import crudRoute from "./routes/crud.route";
import checkStatus from "./routes/status-server.route";

    // Primeiro aguarda o Banco Dados conectar com a Aplicação, e DEPOIS inicializa o Express, para evitar Erros de conexão !!
AppDataSource.initialize().then(() => {
    const server = express();

    const host = 'http://localhost';
    const port = 5000; // Geralmente NÃO roda nenhuma Aplicação na Porta 5000 !!!
    
        // Configuração Padrão
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    
        // Rotas
    server.use(checkStatus);
    server.use(crudRoute);
    
        // Conectando o Servidor
        //  OBS: Com o Typeorm, essa Função tem que ser o RETORNO (return) !! 
    return server.listen(port, () =>{
        console.log(`Servidor rodando ! Acesse ${host}:${port}`);
    });
});