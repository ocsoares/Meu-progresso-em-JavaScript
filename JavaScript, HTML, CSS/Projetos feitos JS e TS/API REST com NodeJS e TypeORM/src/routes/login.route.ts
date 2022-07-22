import { Router } from "express";
import { LoginAccountController } from "../controllers/LoginAccountController";
import { authJWTMiddleware } from "../middlewares/authJWT.middleware";
import { authJWTWithID } from "../middlewares/authJWT-ID.middleware";


// IMPORTANTE: Usar o Middleware em CADA Rota, OU usar nomeDaRota.use(umMiddleware), e TODOS >ABAIXO< dele serão Afetados por suas Funções !! <<


// POR ALGUM MOTIVO O authJWT ta GLOBAL no código, ta tudo caindo nele ????

const loginRoute = Router();

loginRoute.get('/rota', authJWTWithID, () => {
    console.log('teste');
})

    // Nesse caso, NÃO precisa de Token, pois nessa Rota vai GERAR !! <<
loginRoute.get('/loginteste', new LoginAccountController().login); // Rota para Gerar o Token á um Usuário !!

// COM o Middleware em CADA Rota !! <<
loginRoute.get('/login', authJWTMiddleware, new LoginAccountController().login); // Rota para Gerar o Token á um Usuário !!
loginRoute.get('/confirmlogin', authJWTMiddleware, new LoginAccountController().returnInfoUserLogged);

    // COM nomeDaRota.use(umMiddleware) !! <<
//loginRoute.use(authJWTMiddleware);
loginRoute.get('/confirmlogin', new LoginAccountController().returnInfoUserLogged);
loginRoute.get('/teste/:anyID', authJWTWithID, new LoginAccountController().login); // EXCLUIR <<


export default loginRoute;