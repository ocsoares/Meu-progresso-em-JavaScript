    // IMPORTANTE: Coloquei um Script no package.json para Transpilar Automaticamente TODOS os Arquivos.tsc DESSA Pasta para o Diretório dist !!
    // OBS: Para rodar esse script no Terminal: npm run tscdir   !!

    // Essa pasta src serve APENAS para o Arquivo BRUTO, de Desenvolvimento !
    //  OBS: VAI pro Git !! <<<

    // Coloquei para DESATIVAR os Comentários quando for Transpilar para JS !!
    // LEMBTRETE: Tentar mudar o target !

    // ../Nome da Pasta/Arquivo = Executa um Arquivo em OUTRA Pasta Atrás !!

    // Iniciando o Desenvolvimento:
// npm init, tsc init
// npm install --save-dev typescript ( --save-dev para colocar Automaticamente como Dependência de Desenvolvimento no package.json !!)
// npm install --save-dev @types/node
// npm install --save express  ( --save para colocar Automaticamente nas Dependências do package.json !!)
// npm install --save-dev @types/express

import express from 'express';

import usersRoutes from './routes/users.route'; // Nesse caso, NÃO precisa dos {} !!
import sectionsRoute from './routes/getId.route'; 
import crudRoute from './routes/crud.route';
import checkStatus from './checkStatus.route';

const server = express();
const host = 'http://localhost';
const port = 3000;

// -----------------------------------------
    // Esses dois são, na maior parte, Padrões em aplicações Express !
server.use(express.json()) // Permite o Servidor Ler JSON !!!
server.use(express.urlencoded({ extended: true })); // Permite o Servidor Entender o conteúdo da URL !!
// ----------------------------------------

    // Configurando as Rotas (Exportadas !)
server.use(usersRoutes); // Pede para o Servidor (variável server) Usar a Importação usersRoutes !
server.use(sectionsRoute);
server.use(crudRoute);
server.use(checkStatus);

    // Inicializando o Server
server.listen(port, () => { // Essa Arrow Function serve, nesse caso, se estiver Escutando na Porta 3000, Executa algo !!
    console.log(`Servidor rodando ! Acesse: ${host}:${port} !`);
})