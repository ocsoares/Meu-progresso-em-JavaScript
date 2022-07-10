"use strict";
// IMPORTANTE: usar tsc arquivo.ts --target es6 = Transpila usando as Variáveis CORRETAS (const, let...) ao invés de var !!
//  OBS: Por algum motivo, as Importações de BIBLIOTECAS BUGAM nesse jeito a cima !!
exports.__esModule = true;
// RETIRAR o "type": "module" do package.json !!! <
// ALTERAR o esModuleInterop em tsconfig.json para false !!! 
// Importar MÓDULOS de BIBLIOTECAS com: import * as ... from '...';  !!!
var express = require("express");
var routes_js_1 = require("./routes.js");
var server = express(); // Variável server Recebe a Função express() !!
var port = 5000;
server.use(express.json()); // Habilita a Leitura de arquivos .json !!
server.use(routes_js_1.routes); // Trazendo para o Servidor as Informações de routes ! (no caso.)
// Porta + Função a ser Executada (no caso, porta 5000 e Arrow Function com console.log) !!
server.listen(port, function () { return console.log("Servidor rodando na porta ".concat(port, " !")); });
