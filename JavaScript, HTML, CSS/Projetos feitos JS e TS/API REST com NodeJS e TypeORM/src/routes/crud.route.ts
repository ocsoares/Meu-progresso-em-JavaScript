import { Router } from "express";
import { AccountController } from "../controllers/AccountController";
import { BankController } from "../controllers/BankController";
import ShowUsersCrudController from "../controllers/ShowUsersCrudController";

const crudRoute = Router();

crudRoute.get('/users', new ShowUsersCrudController().create);

crudRoute.get('/db/users', new AccountController().showAccounts);
crudRoute.post('/createbank', new BankController().create);
crudRoute.post('/bank/:idBank/associate', new AccountController().createAndAssociateAccountWithBank);
crudRoute.post('/updateaccount/:idAccount', new AccountController().updateAccount);

export default crudRoute;