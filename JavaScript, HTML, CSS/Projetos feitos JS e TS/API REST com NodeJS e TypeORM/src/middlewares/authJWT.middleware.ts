import { NextFunction, Request, Response } from "express";
import { NotFoundError, UnauthorizedError } from "../models/api-error.model";
import jwt from 'jsonwebtoken'
import { AccountRepository } from "../repositories/accountRepository";

// Usado para TIPAR o ID na Função confirmIfAreLogged !!
type JWTPayloadID = {
    id: number
//  iat: number       <-- EXEMPLO, Também poderia usar isso para Pegar o iat do JWT Token !! <<
}

export const authJWTMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // Pega o Token no Cabeçalho ta Aplicação (na Área de Authorization) e Bearer !!
    const { authorization } = req.headers

    if(!authorization) throw new UnauthorizedError('Autenticação inválida !');

    const JWTtoken = authorization.split(' ')[1];
    //const JWTtoken = separateToken[1];    // Linha de Código INÚTIL <<<

    // Verifica se o Token é Válido (se é Assinado com o HASH especificado na Geração dele próprio) !
    // { id } = Desestrutura o ID VÍNCULADO no Hash desse Token !
                        // Token a ser Verificado + Hash de Assinatura (PASSADA no .sign) !!!
    const { id } = jwt.verify(JWTtoken, process.env.JWT_HASH ?? '') as JWTPayloadID // Tipando o ID !!
    //console.log(id)

    // Procura no Banco de Dados o Usuário com o ID Desestruturado do Token !
    const searchUserID = await AccountRepository.findOneBy({ id });

    if (!searchUserID) throw new NotFoundError('ID inexistente !');

    const { person_password: _, ...infoUser } = searchUserID;

        // Se passar por todas as Verificações, o req.user GUARDA as Informações do Usuário logado e manda
        // para quem está Pedindo essa Verificação !!
    // Corrigindo o Erro de Tipagem na Pasta @types em src !!! <<<

    // Esse req Abaixo pode ser Chamado em qualquer Função ! <
    req.user = infoUser // Acho que .user é Convenção usar !
    console.log(req.user);

    // Não precisa Retornar o res., porque vai utilizar o Next, e o return vai ser feito na Função returnInfoUserLogged !! <<
    
    // Pelo o que eu entendi, se passar por Todas as Verificações, o next() permite Prosseguir para a pró-
    // -xima Função (no caso de Middlewares isso fica bem Explícito) !! << 
    next()
}