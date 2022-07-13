    // Middleware = Fornece serviços e recursos em comum à uma Aplicação !

import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";
import MyDatabaseError from "../models/database-error.model";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
    if (error instanceof MyDatabaseError) { // Se for um Erro do Tipo da minha Classe, faz os códigos seguintes...
        console.log(error);
        res.sendStatus(StatusCodes.BAD_REQUEST);
    }
    else if(error instanceof AuthenticatorForbiddenError){
        res.sendStatus(StatusCodes.FORBIDDEN);
    }
    else { // Se não for um Erro do Tipo da minha Classe, faz isso...
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default errorHandler;