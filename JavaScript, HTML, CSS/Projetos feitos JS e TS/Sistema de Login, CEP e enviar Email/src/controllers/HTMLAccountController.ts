import bodyParser from "body-parser"; // ACHO que NÃO precisa aqui, porque JÁ está sendo Utilizado na Rota !!
import bcrypt from 'bcrypt';
import { NextFunction } from "express";
import { BadRequestError, InternalServerError } from "../models/api-error.model";
import { AccountRepository } from "../repositories/accountRepository";
import { CPFRepository } from "../repositories/CPFRepository";

export class HTMLAccountController {
    async createAccountHTML(req: Request, res: Response, next: NextFunction){
        const reqBody = req.body as any

        const { username, email, cpf, cep, password, passwordConfirmation } = reqBody // O NOME dessas Variáveis são definidas em name="..." no HTML !! <<< 

        if(!username || !email || !cpf || !cep || !password) throw new BadRequestError('Dados inválidos !');
        if(typeof(username) !== 'string' || typeof(email) !== 'string' || typeof(cpf) !== 'string' || typeof(cep) !== 'string' || typeof(password) !== 'string') throw new BadRequestError('Dados inválidos !');

        const usernameRegex = /[a-zA-Z\u00C0-\u00FF ]+/i
        if(!username.match(usernameRegex)) throw new BadRequestError ('Usuário inválido !');

        const validateEmail = (mail: any) => {
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
        }
        if(!validateEmail(email)) throw new BadRequestError('Email inválido !');

        const CPFRegex = /[0-9]/;
        if(!cpf.match(CPFRegex)) throw new BadRequestError('CPF inválido !');

        const CEPRegex = /[0-9]/; // APENAS Números !! <<
        if(!cep.match(CEPRegex)) throw new BadRequestError('CEP inválido !');

        if(passwordConfirmation !== password) throw new BadRequestError('As senhas não coincidem !');

        const searchUsername = await AccountRepository.findOneBy({username});
        if(searchUsername) throw new BadRequestError('Usuário existente !');

        const searchEmail = await AccountRepository.findOneBy({email});
        if(searchEmail) throw new BadRequestError('Email existente !');

        const searchCEP = await AccountRepository.findOneBy({cep});
        if(searchCEP) throw new BadRequestError('CEP existente !');

        // ACHO que pode ter a MESMA SENHA no Banco de Dados, então NÃO verifiquei !! <<

        const searchCPF = await CPFRepository.findOneBy({cpf});
        if(searchCPF) throw new BadRequestError('CPF existente !');

        const encryptPassword = await bcrypt.hash(password, 10);

        if(!encryptPassword) throw new InternalServerError();

        const saveAccountHTML = AccountRepository.create({
            username,
            email,
            cep,
            password: encryptPassword
        })

        const saveNameAndCPFHTML = CPFRepository.create({
            name: username,
            cpf
        })

        await AccountRepository.save(saveAccountHTML);

        await CPFRepository.save(saveNameAndCPFHTML);

        console.log(reqBody);
        console.log('Testando desestruturado:', username, cpf, email, cpf, cep, password, passwordConfirmation);

        next(); // Colocando Next porque esse Código vai atuar como um Middleware, e depois PASSA (next()) para res.sendFile(loggedHTML) !! <<<

        // RETORNAR A PÁGINA NA ROTA COM res.sendFile.... AQUI N DÁ !! <<
    }

    async loginAccountHTML(req: Request, res: Response, next: NextFunction){

    }
}