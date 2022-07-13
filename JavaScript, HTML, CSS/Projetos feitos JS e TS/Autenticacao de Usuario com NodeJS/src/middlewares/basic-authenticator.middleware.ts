import { Request, Response, NextFunction } from "express";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";
import userRepository from "../db-repository/user.repository";

const basicAuthenticatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try{
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
                                                                    //,password  - TIREI pq tá dando algum Erro na Senha em user.repository !! <<
        const toAuthenticate = await userRepository.findByUsernameAndPassword(username);
        console.log('Codificado completo:', authenticationHeader,',Tipo do Token:', authenticatorType, ',Token codificado:', token);
        console.log('Token decodificado:', decodedToken, ',Username:', username, ',Password:', password); 
        console.log('EMCIMA');

        if(!toAuthenticate){
            throw new AuthenticatorForbiddenError('Erro na Autenticação ! Tente novamente.', Error);
        }
        
            // Código para Confirmar que o Usuário está Autenticado (Basta colocar isso em Qualquer Rota que queira Autenticar) !!! << 
        req.user = toAuthenticate;
        next(); // Se conseguir Autenticar, ele PASSA para a Função que está Chamando ESSA !!

        console.log('TESTANDOOO');
    }
    catch(error){
        next(error);
    }

};

export default basicAuthenticatorMiddleware;