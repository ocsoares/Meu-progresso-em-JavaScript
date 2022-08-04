import bodyParser from "body-parser";
import { NextFunction } from "express";
import { BadRequestError } from "../models/api-error.model";

export class HTMLAccountController {
    async createAccountHTML(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as any

        const { username, email, cpf, cep, password } = reqBody

        if(!username || !email || !cpf || !cep || !password) throw new BadRequestError('Dados inválido !');
        if(typeof(username) !== 'string' || typeof(email) !== 'string' || typeof(password) !== 'string' || typeof(cep) !== 'number' || typeof(cpf) !== 'string') throw new BadRequestError('Formato inválido !');

        console.log(reqBody);
        console.log('Testando desestruturado:', username, cpf, email, cpf, cep, password);

        next(); // Colocando Next porque esse Código vai atuar como um Middleware, e depois PASSA (next()) para res.sendFile(loggedHTML) !! <<<

        // RETORNAR A PÁGINA NA ROTA COM res.sendFile.... AQUI N DÁ !! <<
    }

    async loginAccountHTML(req: Request, res: Response, next: NextFunction){

    }
}