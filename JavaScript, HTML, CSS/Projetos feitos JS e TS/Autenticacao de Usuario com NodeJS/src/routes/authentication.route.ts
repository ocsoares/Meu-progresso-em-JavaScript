    // Rota para Autenticar um Usuário !!

import { Router, Request, Response, NextFunction } from "express";
import userRepository from "../db-repository/user.repository";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";

const authenticationRoute = Router();

authenticationRoute.post('/auth', async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const authenticationHeader = req.headers['authorization'];
       

        if (!authenticationHeader) {
            throw new AuthenticatorForbiddenError('Erro na autenticação ! Tente novamente.', Error);
        }

        // Verificando a Autenticação
        
        // Nesse caso, irei Separar com Espaço (split) o Tipo da Autenticação + Usuário:Senha !!
        const [ authenticatorType, token ] = authenticationHeader.split(' '); // OBS: o token está CODIFICADO na base64 !!!

            // Se o Tipo da Chave for DIFERENTE de Basic OU a o Token (user:senha) NÃO existir, Retorna Erro !!
        if(authenticatorType !== 'Basic' || !token){
            throw new AuthenticatorForbiddenError('Erro na Autenticação ! Tente novamente.', Error);
        }

            // Decodificando o Token !!                       (para Converter em string, óbvio)
            // Buffer.from(Variável do Token, 'Tipo de Codificação'). toString('Tipo da string') !!!
        const decodedToken = Buffer.from(token, 'base64').toString('utf-8');
        
            // Com a senha já Decodificada acima, ela vai ficar, por EXEMPLO,  admin:admin123, com :  !!!
            // Separando o Usuário e a Senha, Respectivamente, desses :   !!    
        const [ username, password ] = decodedToken.split(':');
        
        if(!username || !password){
            throw new AuthenticatorForbiddenError('Erro na Autenticação ! Tente novamente.', Error);
        }
        
        const toAuthenticate = await userRepository.findByUsernameAndPassword(username, password);
        console.log('Codificado completo:', authenticationHeader,',Tipo do Token:', authenticatorType, ',Token codificado:', token);
        console.log('Token decodificado:', decodedToken, ',Username:', username, ',Password:', password); 
    }
    catch (error) {
        next(error);
    }
});

export default authenticationRoute;