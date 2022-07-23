import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { BankController } from "../controllers/BankController";
import { authJWTWithID } from "../middlewares/authJWT-ID.middleware";
import { authJWTMiddleware } from "../middlewares/authJWT.middleware";

const crudRoute = Router();

//crudRoute.get('/users', new ShowUsersCrudController().create);

crudRoute.get('/db/users', authJWTMiddleware, new AccountController().showAccounts);

crudRoute.post('/createbank', new BankController().create);
crudRoute.post('/justcreateaccount', new AccountController().justCreateAnAccount);
crudRoute.post('/bank/:idBank/associate', new AccountController().createAndAssociateAccountWithBank);

//crudRoute.use(authJWTWithID); // <-- Por algum motivo, isso aqui deixa esse Middleware GLOBAL no Código, e que resulta em ERRO no Código << !!
crudRoute.put('/updateaccount/:idAccount', authJWTWithID, new AccountController().updateAccount);
crudRoute.put('/rechargeaccount/:idAccount', authJWTWithID, new AccountController().rechargeAccount);
crudRoute.put('/withdrawal/:AccountIDToTransfer', authJWTWithID, new AccountController().withdrawalAccount);

crudRoute.delete('/deleteaccount/:idAccount', new AccountController().deleteAccount);

export default crudRoute;