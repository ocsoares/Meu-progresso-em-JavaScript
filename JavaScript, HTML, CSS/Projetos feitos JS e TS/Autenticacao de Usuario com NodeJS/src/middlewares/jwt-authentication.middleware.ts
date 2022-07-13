    // Autenticação Bearer = Autenticação por TOKEN (no caso, gerado pelo Basic Authenticator) !!
    // Thunder Client - Auth - Bearer = Token + Prefixo ( Prefixo SEMPRE é Bearer ) !!!

import { Request, Response, NextFunction } from "express";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";
import JWT from 'jsonwebtoken';
import userRepository from "../db-repository/user.repository";

    
const jwtAuthenticatorMiddleware = async (req: Request, res: Response, next:NextFunction) => {
    try{

        const authenticatorHeader = req.headers['authorization'];

        if(!authenticatorHeader){
            throw new AuthenticatorForbiddenError('Erro na autenticação ! Tente novamente.', Error);
        }

        const [ authenticatorType, token ] = authenticatorHeader.split(' ');
        console.log('Type:', authenticatorType, ', Token:', token);

        if(authenticatorType !== 'Bearer' || !token){
            throw new AuthenticatorForbiddenError('Erro na autenticação ! Tente novamente', Error);
        }

        try{
            // Verifica se o Token é VÁLIDO e depois Retorna o Payload desse Token !!
                                // (token, 'private key') !!!
            // .verify Retorna sempre um Objeto OU UMA STRING !
        const tokenPayload = JWT.verify(token, 'md5');
        
            // Confirmando se o Payload é do Tipo Objeto ou String !!
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
            throw new AuthenticatorForbiddenError('Erro na autenticação ! Tente novamente.', Error);
        }
        
            // Pega o ID do Usuário !  
        const returnId =  tokenPayload.sub;

        const toAuthenticate = await userRepository.findById(returnId);

        req.user = toAuthenticate; // Se passar por Todas as Verificações, retorna a Autenticação para quem Chamou !!
        next(); 
        }
        catch(error){
            throw new AuthenticatorForbiddenError('Erro na autenticação ! Tente novamente.', Error);
        }
    }
    catch(error){
        next(error);
    }
}

export default jwtAuthenticatorMiddleware;