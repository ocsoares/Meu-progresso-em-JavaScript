import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import failAuthenticatorError from "../models/failAuthenticator-error";
import crudRepository from "../repository/crud.repository";

const crudRoute = Router();

crudRoute.get('/users', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send({message: 'Esses são os usuários cadastrados !'});
});

crudRoute.post('/register', (req: Request, res: Response, next: NextFunction) =>{
    try{
        const bodyThunder = req.body; // Permite enviar algo pelo Post - Body do Thunder Client !
        const { username, password } = bodyThunder; // Desestrutura, se tiver, o username e o password Passados acima !!
    
        if(!username || !password) throw new failAuthenticatorError('ABOBORA', Error);

            // Teste  
        const teste = crudRepository.verifyIsExists(username, password);
        console.log(teste);
    
        res.status(StatusCodes.CREATED).send({message: ` ${username} cadastrado com a senha ${password} ! `});
    }
    catch(error){
        next(error);
    }

});

export default crudRoute;