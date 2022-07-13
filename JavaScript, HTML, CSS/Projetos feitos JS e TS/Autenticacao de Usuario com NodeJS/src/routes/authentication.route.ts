    // Rota para Autenticar um Usuário !!

import { Router, Request, Response, NextFunction } from "express";
import userRepository from "../db-repository/user.repository";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";
import JWT from 'jsonwebtoken'; // o import, Nesse caso, pode ser Qualquer nome !!
import { StatusCodes } from "http-status-codes";
import basicAuthenticatorMiddleware from "../middlewares/basic-authenticator.middleware";
import jwtAuthenticatorMiddleware from "../middlewares/jwt-authentication.middleware";

// -----------------------------------------------------------------
    // Informações sobre o JSON Web Token !!
// “iss” O domínio da aplicação geradora do token
// “sub” É o assunto do token, mas é muito utilizado para guarda o ID do usuário
// “aud” Define quem pode usar o token
// “exp” Data para expiração do token
// “nbf” Define uma data para qual o token não pode ser aceito antes dela
// “iat” Data de criação do token
// “jti” O id do token
// -----------------------------------------------------------------

const authenticationRoute = Router();
                // Antes de Executar a Função abaixo, ele vai passar pela Função de Autenticação basicAuthenticatorMiddleware (EXPORTADA) !!
authenticationRoute.post('/auth', basicAuthenticatorMiddleware, async (req: Request, res: Response, next: NextFunction) =>{
    try {
            // Exporta a Autenticação JÁ FEITA de basicAuthenticatorMiddleware !! <<
        const toAuthenticate = req.user;

        if(!toAuthenticate){
            throw new AuthenticatorForbiddenError('Erro na Autenticação ! Tente novamente.', Error);
        }

        // Criando um Token !!  OBS : o Nome dele é o Nome usado para Importar !!
        const jwtPayload = { username: toAuthenticate.username };
        const jwtSecretKey = 'md5';
        const jwtOptions = { subject: toAuthenticate?.uuid }; // ID

                                // ({payload}, 'Secret Key', {opções...})
        const jwtToken =  JWT.sign(jwtPayload, jwtSecretKey, jwtOptions);
        console.log('EMBAIXO');

            // Esse Token vai retornar (Codificado, óbvio) o ID no DB + Usuário + Timastamp de Quando o Token foi Criado !! 
        res.status(StatusCodes.OK).json({ token: jwtToken }); // Enviando o Token ! 
    }
    catch (error) {
        next(error);
    }

    authenticationRoute.post('/auth/validate', jwtAuthenticatorMiddleware, (req: Request, res: Response, next: NextFunction) => {
        // Se o Usuário conseguir passar pelo jwtAuthenticator, é óbvio que o Token dele JÁ É VÁLIDO, Por isso só manda uma resposta de volta !!!

        res.sendStatus(StatusCodes.OK);
    })
});

export default authenticationRoute;