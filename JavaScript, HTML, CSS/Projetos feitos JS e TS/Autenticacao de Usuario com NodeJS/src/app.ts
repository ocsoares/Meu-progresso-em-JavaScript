    // IMPORTANTE: Coloquei um Script no package.json para Transpilar Automaticamente TODOS os Arquivos.tsc DESSA Pasta para o Diretório dist !!
    // OBS: Para rodar esse script no Terminal: npm run tscdir   !!

    // >>> IMPORTANTE: Coloquei a Conexão com o Banco de Dados (database.ts) no .gitignore para NÃO EXPOR meu Usuário e Senha do DB !!! <<<< 

    // Essa pasta src serve APENAS para o Arquivo BRUTO, de Desenvolvimento !
    //  OBS: VAI pro Git !! <<<

    // Coloquei para DESATIVAR os Comentários quando for Transpilar para JS !!
    // LEMBTRETE: Tentar mudar o target !

    // ../Nome da Pasta/Arquivo = Executa um Arquivo em OUTRA Pasta Atrás !!

    // Iniciando o Desenvolvimento:
// npm init, tsc --init
// npm install --save-dev typescript ( --save-dev para colocar Automaticamente como Dependência de Desenvolvimento no package.json !!)
// npm install --save-dev @types/node
// npm install --save express  ( --save para colocar Automaticamente nas Dependências do package.json !!)
// npm install --save-dev @types/express

import express from 'express';

import usersRoutes from './routes/users.route'; // Nesse caso, NÃO precisa dos {} !!
import sectionsRoute from './routes/getId.route'; 
import crudRoute from './routes/crud.route';
import checkStatus from './routes/checkStatus.route';
import errorHandler from './middlewares/error-handler.middleware';
import authenticationRoute from './routes/authentication.route';
import basicAuthenticatorMiddleware from './middlewares/basic-authenticator.middleware';
import jwtAuthenticatorMiddleware from './middlewares/jwt-authentication.middleware';

const server = express();
const host = 'http://localhost';
const port = 3000;

// -----------------------------------------
    // Esses dois são, na maior parte, Padrões em aplicações Express !
server.use(express.json()) // Permite o Servidor Ler JSON !!!
server.use(express.urlencoded({ extended: true })); // Permite o Servidor Entender o conteúdo da URL !!
// ----------------------------------------
    // IMPORTANTE: A ORDEM NO EXPRESS IMPORTA !!
// OBS: Se colocar uma Função no .use, ela Afeta TODAS as ROTAS abaixo DELA (ex. app.use(basicAuthenticatorMiddleware, checkStatus);  !!!!
// Por esse motivo É IMPORTANTE colocar as Funções em CADA Rota INDEPENDENTE (se não quiser que TODAS as Rotas Tenham o MESMO Método de Aut-
// -enticação, óbvio) !!!

    // Configurando as Rotas (Exportadas !)
server.use(usersRoutes); // Pede para o Servidor (variável server) Usar a Importação usersRoutes !
server.use(sectionsRoute);
server.use(crudRoute); // Autenticadas com Token Basic !
server.use(checkStatus); // Autenticada com Token JWT !!
server.use(authenticationRoute);

    // Configuração dos Handlers de Erro (Sempre no FINAL !!)
server.use(errorHandler);

    // Inicializando o Server
server.listen(port, () => { // Essa Arrow Function serve, nesse caso, se estiver Escutando na Porta 3000, Executa algo !!
    console.log(`Servidor rodando ! Acesse: ${host}:${port} !`);
})