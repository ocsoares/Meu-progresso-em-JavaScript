import { NextFunction, Request, Response } from "express";
import { NotFoundError, UnauthorizedError } from "../models/api-error.model";
import jwt from 'jsonwebtoken';
import { AccountRepository } from "../repositories/accountRepository";

type JWTPayloadID = {
    id: number
}

export const authJWTWithID = async (req: Request, res: Response, next: NextFunction) =>{
    const { authorization } = req.headers
    
    if(!authorization) throw new UnauthorizedError('Autenticação inválida !');

        // Desestruturando desse jeito porque o Nome do Parâmetro NÃO VAI ser fixo !! <<
    const getParameter = req.params
    const getIDParameter = Number(Object.values(getParameter)[0]);

    const JWTtoken = authorization.split(' ')[1]

    const { id } = jwt.verify(JWTtoken, process.env.JWT_HASH ?? '') as JWTPayloadID

    const searchUserID = await AccountRepository.findOneBy({id});

        // Verifica se o ID do Token é Compatível com o PARÂMETRO da URL (EVITA que um Token de um ID acesse OUTRO ID) !! <<
    if(getIDParameter !== id) throw new UnauthorizedError('Autenticação inválida !');

    if(!searchUserID) throw new NotFoundError('ID inválido !'); // ACHO que NÃO precisa disso porque vai Verificar na Próxima Função !! <<

    const {person_password:_, ...userLoginWithID} = searchUserID

    req.userWithIDParameter = userLoginWithID
    console.log('JWT com ID:', userLoginWithID);

    next()
}