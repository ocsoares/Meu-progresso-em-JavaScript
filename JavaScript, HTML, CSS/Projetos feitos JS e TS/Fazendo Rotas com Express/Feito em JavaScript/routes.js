    // Importando as Rotas !!
import { Router } from "express";
import { usersController } from "./controllers/usersController.js"; // NÃO esquecer do .js !

const routes = Router(); // Variável routes Recebe a Função Router() !!

routes.get('/usuarios', usersController.showsUsers); // NÃO precisa do () !!! (no caso, showsUser)

routes.post('/usuarios', usersController.createUser);

export {routes}; // Exportando a Variável routes !