import bodyParser from "body-parser"; // ACHO que NÃO precisa aqui, porque JÁ está sendo Utilizado na Rota !!
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response} from "express";
import { BadRequestError, InternalServerError } from "../models/api-error.model";
import { AccountRepository } from "../repositories/accountRepository";
import { CPFRepository } from "../repositories/CPFRepository";
import path from "path";

const __dirname = path.resolve() // Entra na Pasta RAÍZ do projeto !!
const loginHTML = path.join(__dirname, '/src/html/login.html');
const loggedHTML = path.join(__dirname, '/src/html/loginSuccessufull.html');
const loginErrorHTML = path.join(__dirname, '/src/html/loginError.html');

// >>> IMPORTANTÍSSIMO: Por algum motivo, tem DOIS Request e Response, um são do Express e o outro ACHO que é do bodyParser (NA ROTA), então NÃO ESTAVA pe-
// -gando as Configurações do meu express.d.ts Porque Estava com o Request/Response SEM SER O DO Express !! <<<<
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

    async loginAccountHTML(req: Request, res: Response, next: NextFunction){ // ACABAR ISSO, REDIRECIONAR, FAZER SESSION, API CEP e ENVIAR EMAIL !! <<
        const reqBody = req.body as any

        const { email, password } = reqBody

        // if(!email || !password) throw new BadRequestError('Inválido !');

        if(!email || !password){
            console.log('Usuário ou senha vazio !');
            return res.sendFile(loginErrorHTML);
        }

        const searchEmail = await AccountRepository.findOneBy({email}) // Procura por TODAS as Informações no Banco de Dados para o EMAIL ESPECIFICADO !! <<

        // if(!searchEmail) throw new BadRequestError('Email vazio !');

        if(!searchEmail){
            console.log('Email não encontrado !');
            return res.sendFile(loginErrorHTML);
        }

        const searchPassword = await bcrypt.compare(password, searchEmail.password as any);

        if(!searchPassword){
            console.log('Senha incorreta !');
            return res.sendFile(loginErrorHTML);
        }
        
        const { password:_, ...finalLogin } = searchEmail;

        console.log('PASSOU em tudo !');

        req.user = finalLogin;
        req.session.login = finalLogin.username

        console.log('req.user:', req.user);
        console.log('req.session.login:', req.session.login);
        console.log('req.session.id:', req.session.id);

        res.sendFile(loggedHTML);

        next();
    }
}