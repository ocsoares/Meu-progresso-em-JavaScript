"use strict";
exports.__esModule = true;
exports.routes = void 0;
// Importando as Rotas !!
var express_1 = require("express");
var usersController_js_1 = require("./controllers/usersController.js"); // NÃO esquecer do .js !
var routes = (0, express_1.Router)(); // Variável routes Recebe a Função Router() !!
exports.routes = routes;
// Criando um NOVO Objeto da Classe UsersController !!!! <<
var usersController = new usersController_js_1.UsersController(); // Tipo + Variável a Receber = new Nome da classe();  !
routes.get('/usuarios', usersController.showsUsers); // Passar o nome da VARIÁVEL, e NÃO precisa do () !!! (no caso, showsUser)
routes.post('/usuarios', usersController.createUser);
