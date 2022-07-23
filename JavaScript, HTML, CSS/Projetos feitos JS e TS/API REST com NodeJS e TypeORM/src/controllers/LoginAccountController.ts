import { Request, Response } from "express";
import { BadRequestError } from "../models/api-error.model";
import { AccountRepository } from "../repositories/accountRepository";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export class LoginAccountController{
    async login(req: Request, res: Response){
        const { cpf, person_password } = req.body;

        if(typeof(person_password) !== 'string' || typeof(cpf) !== 'number') throw new BadRequestError();
        if(!cpf || !person_password) throw new BadRequestError();

            // Além de procurar, nesse caso, pelo CPF, Também PERMITE o acesso as Propriedades do Objeto informado PARA o Usuário DO CPF !
        const searchUser = await AccountRepository.findOneBy({ cpf });
        // console.log(searchUser?.id);
        // console.log(searchUser?.person_name);
        // console.log(searchUser?.balance);
        // console.log(searchUser?.cpf);
        //          ...

        if(!searchUser) throw new BadRequestError('CPF inválido !');

            // Compara uma Senha com o HASH e Retorna um Boolean (true, se estiver Correto, false se estiver Errada) !!
            //  OBS: Nesse caso, COMPARA a Senha informada no Body com a Registrada no Banco de Dados (sem criptografia) do CPF informado !! <<<
        const verifyPassword = await bcrypt.compare(person_password, searchUser.person_password) // (Senha, hash)

        if(!verifyPassword) throw new BadRequestError('Senha inválida !');

            // Se o Usuário passar por todas essas Verificações, significa que ESTÁ LOGADO, então abaixo farei o Token de
            // autenticação desse usuário !! <<

        // -----------------------------------------------------------------

            // Como esse Hash é gerado Constantemente e APENAS nesse Escopo da Função, GUARDEI um FIXO no .env pa-
            // -ra poder utilizar FORA desse Escopo !!! << 

            // Preparando uma Hash para Assinar o JWT baseado no CPF e no Nome do Usuário !
        // const CPFtoString = searchUser.cpf.toString();
        // console.log(CPFtoString);

        // const CPFslice = CPFtoString.slice(2,5);
        // const prepareCPFToEncrypt = CPFslice.concat(CPFslice);
        // console.log(prepareCPFToEncrypt);
        
        // const prepareNameToEncrypt = searchUser.person_name.split(' ')[0];
        // console.log(prepareNameToEncrypt);
        
        // const prepareHash = prepareCPFToEncrypt.concat(prepareNameToEncrypt);
        // console.log(prepareHash);
        
        // const newHashJWT = await bcrypt.hash(prepareHash, 10);
        // console.log(newHashJWT);
        
        // const verifyNewHash = await bcrypt.compare(prepareHash, newHashJWT);
        // console.log(verifyNewHash);
        // -----------------------------------------------------------------
        
            // Nesse caso, o token vai ser Gerado para o ID do Usuário !! 
            //  OBS: O Hash passado, nesse caso, vai ser o Gerado ACIMA baseado no CPF e Nome do Usuário !! 
            //  OBS: A Opção expiresIn além de poder ser passado Números, TAMBÉM pode passar string, ex: '1d', '8h', etc...  
                                                        // Hash ?? '' = Fiz isso porque tava dando um Erro (se a Chave NÃO existir
                                                        //  vai ser uma String VAZIA, mas NUNCA vai ser coloquei só para Arrumar !)                      
        const JWTtoken = jwt.sign({ id: searchUser.id }, process.env.JWT_HASH ?? '', { // Payload + Hash + Opções... !!
            expiresIn: '12h'
        });

            // Tirando a Senha do Usuário com Desestruturação !!
            // Propriedade:_  EXCLUI a Propriedade  !!
            // ...Variável = Nesse caso como tirei a Senha, Retorna TODO o searchUser MAS SEM a Senha !! <<
            
        const { person_password:_, ...infoUser} = searchUser;

            // Retornar os Dados do Usuário SEM A SENHA e o Token Autenticado dele !!
        return res.status(StatusCodes.OK).json({
            infoUser,
            JWTtoken
        });
    }

        // Usar APÓS o Middleware para ver o Retorno das Informações do Usuário (SEM a Senha) !! <<
    async returnInfoUserLogged(req: Request, res: Response){

            // Se conseguir passar pelo JWTtoken (que está na ROTA), pela lógica é um Token VÁLIDO, então apenas RE-
            // -TORNA as Informações do Usuário (SEM A SENHA) !! <<
        return res.json(req.user); // req.user = Feito no Middleware authJWT !! <
    }

    async returnInfoUserLoggedWithID(req: Request, res: Response){
        return res.json(req.userWithIDParameter);
    }
}