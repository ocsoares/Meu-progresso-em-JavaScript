import { NextFunction, Request, Response } from "express";
import { NotFoundError, UnauthorizedError } from "../models/api-error.model";
import jwt from 'jsonwebtoken';
import { AccountRepository } from "../repositories/accountRepository";

type JWTPayloadID = {
    id: number
}

export const authJWTWithID = async (req: Request, res: Response, next: NextFunction) =>{
    const { authorization } = req.headers
    
    if(!authorization) throw new UnauthorizedError('Autenticação com id !');

        // Desestruturando desse jeito porque o Nome do Parâmetro NÃO VAI ser fixo !! <<
    const getParameter = req.params
    const getIDParameter = Object.values(getParameter)[0] 
    console.log(getIDParameter);

    const JWTtoken = authorization.split(' ')[1]

    const { id } = jwt.verify(JWTtoken, process.env.JWT_HASH ?? '') as JWTPayloadID
    console.log(id);

    const searchUserID = await AccountRepository.findOneBy({id})

    if(!searchUserID) throw new NotFoundError('ID inválido !');

    const {person_password:_, ...userLoginWithID} = searchUserID

    req.userWithIDParameter = userLoginWithID
    console.log(userLoginWithID);

    next()
}