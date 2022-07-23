import { Request, Response, Router } from "express";
import { LoginAccountController } from "../controllers/LoginAccountController";
import { authJWTMiddleware } from "../middlewares/authJWT.middleware";
import { authJWTWithID } from "../middlewares/authJWT-ID.middleware";

// IMPORTANTE: Usar o Middleware em CADA Rota, OU usar nomeDaRota.use(umMiddleware), e TODOS >ABAIXO< dele serão Afetados por suas Funções !! <<


// POR ALGUM MOTIVO O authJWT ta GLOBAL no código, ta tudo caindo nele ????

const loginRoute = Router();

// COM o Middleware em CADA Rota !! <<

                        // Pelo que parece, SÓ da para usar o Response se TIVER o Request !! <<
loginRoute.get('/melancia', (req: Request, res: Response) => res.json({message: 'rota da melancia !'}));

loginRoute.get('/login', new LoginAccountController().login); // Rota para Gerar o Token á um Usuário !!
loginRoute.get('/confirmlogin', authJWTMiddleware, new LoginAccountController().returnInfoUserLogged);
loginRoute.get('/confirmlogin/:idAccount', authJWTWithID, new LoginAccountController().returnInfoUserLoggedWithID);

    // COM nomeDaRota.use(umMiddleware) !! <<
//loginRoute.use(authJWTMiddleware); // <-- Por algum motivo, isso aqui deixa esse Middleware GLOBAL no Código, e que resulta em ERRO no Código << !!
loginRoute.get('/confirmlogin', new LoginAccountController().returnInfoUserLogged);

export default loginRoute;