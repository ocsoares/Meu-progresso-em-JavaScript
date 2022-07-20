import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { AccountController } from "../controllers/AccountController";
import { BankController } from "../controllers/BankController";
import { ApiError, BadRequestError, NotFoundError } from "../models/api-error.model";

const crudRoute = Router();

crudRoute.get('/', (req: Request, res: Response) => {
    //console.log(ApiError);
    throw new ApiError('mamao', StatusCodes.ACCEPTED);
});

//crudRoute.get('/users', new ShowUsersCrudController().create);

crudRoute.get('/db/users', new AccountController().showAccounts);

crudRoute.post('/createbank', new BankController().create);
crudRoute.post('/justcreateaccount', new AccountController().justCreateAnAccount);
crudRoute.post('/bank/:idBank/associate', new AccountController().createAndAssociateAccountWithBank);

crudRoute.put('/updateaccount/:idAccount', new AccountController().updateAccount);
crudRoute.put('/rechargeaccount/:idAccount', new AccountController().rechargeAccount);
crudRoute.put('/withdrawal/:AccountIDToTransfer', new AccountController().withdrawalAccount);

crudRoute.delete('/deleteaccount/:idAccount', new AccountController().deleteAccount);


export default crudRoute;