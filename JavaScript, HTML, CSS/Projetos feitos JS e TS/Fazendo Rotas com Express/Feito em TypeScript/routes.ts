    // Importando as Rotas !!
    import { Router } from "express";
    import { UsersController } from "./controllers/usersController.js"; // NÃO esquecer do .js !
    
    const routes = Router(); // Variável routes Recebe a Função Router() !!

        // Criando um NOVO Objeto da Classe UsersController !!!! <<
    const usersController = new UsersController(); // Tipo + Variável a Receber = new Nome da classe();  !
    
    routes.get('/usuarios', usersController.showsUsers); // Passar o nome da VARIÁVEL, e NÃO precisa do () !!! (no caso, showsUser)
    
    routes.post('/usuarios', usersController.createUser);
    
    export {routes}; // Exportando a Variável routes !