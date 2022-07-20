import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { bankRepository } from "../repositories/bankRepository";
import { AccountRepository } from "../repositories/accountRepository";
import { BadRequestError, NotFoundError } from "../models/api-error.model";

// O ID que vai colocar na URL se encontra no Banco de Dados !! <<

    // Tentar SEPARAR em Outro Módulo a Função que ACHA o ID e o Balance !!
    // Tentar fazer um Banco de Dados de LOG's de transferência !! 

export class AccountController{
    async createAndAssociateAccountWithBank(req: Request, res: Response){
            const { person_name, person_password, cpf, balance } = req.body;
            const { idBank } = req.params // Parâmetros da Rota (informado na URL /:algo... ) !!!
    
                                                // findOneWhere já Implementa Diretamente o WHERE, então NÃO precisa do where: , se fosse apen-
                                                // - enas findOne Precisaria !!
            const createdAccount = await bankRepository.findOneBy({id: Number(idBank) }) // Como NÃO aceita string, usei Number no id !!
    
            if(!createdAccount) throw new NotFoundError('Banco não encontrado !')
    
            const associateAccount = AccountRepository.create({
                person_name, // TAMBÉM podia usar : , Mas como é o MESMO nome da Variável em req.body, NÃO precisa !!
                person_password,
                cpf,
                balance,
                bank: createdAccount // Associação com o Banco (informado pelo ID na URL) !!
            })     
    
            if(!person_name || !person_password || !cpf || !balance) throw new BadRequestError();
            if(typeof(person_name) !== 'string' || typeof(person_password) !== 'string' || typeof(cpf) !== 'number' || typeof(balance) !== 'number') throw new BadRequestError();
            
            await AccountRepository.save(associateAccount);
            console.log(associateAccount);
    
            return res.status(StatusCodes.CREATED).json(associateAccount);
    }

    async justCreateAnAccount(req: Request, res: Response){
            const { person_name, person_password, cpf, balance } = req.body

            if(!person_name || !person_password || !cpf || !balance) throw new BadRequestError();
            if(typeof(person_name) !== 'string' || typeof(person_password) !== 'string' || typeof(cpf) !== 'number' || typeof(balance) !== 'number'){
                throw new BadRequestError();
            }
    
            const newAccount = AccountRepository.create({
                person_name,
                person_password,
                cpf,
                balance
            })
    
            await AccountRepository.save(newAccount);
    
            console.log(newAccount);
    
            return res.status(StatusCodes.CREATED).json(newAccount);
    }

    async showAccounts(req: Request, res: Response){
            //const searchAccount = await AccountRepository.find() // Mostra SEM o Relacionamento com o Bank (nesse caso) !!

                // Mostrando os Usuários com RELACIONAMENTO com o Bank (nesse caso) !!
            const searchAccount = await AccountRepository.find({
                relations: {
                    bank: true
                }
            })

            return res.status(StatusCodes.OK).send(searchAccount);
    }

    async updateAccount(req: Request, res: Response){
                            // Se eu quisesse poderia atualizar MAIS coisas da Conta...
            const { person_name, person_password } = req.body
            const { idAccount } = req.params

            const searchAccount = await AccountRepository.findOneBy({id: Number(idAccount)});

            if(!searchAccount) throw new NotFoundError('Essa conta não existe !');

            AccountRepository.update(idAccount, { // Id do que Quer atualizar !
                ...searchAccount, // {...(spread)Variável que RECEBE o Id = para Pegar TUDO o que tem Dentro do Objeto !! }
                
                person_name: person_name, // Propriedades a serem ATUALIZADAS/ALTERADAS !!
                person_password: person_password
            })

                // Por algum motivo ALTERA no Banco de Dados, MAS no Terminal aqui no VSCode só aparece Corretamente depois de Atualizar du-
                // -as vezes !!
            //console.log(searchAccount);
            //return res.status(StatusCodes.OK).json(searchAccount);

            return res.status(StatusCodes.OK).json({message: 'Conta atualizada !'});
    }

    async deleteAccount(req: Request, res: Response){
        const { idAccount } = req.params

        const searchAccount = await AccountRepository.findOneBy({id: Number(idAccount)});

        if(!searchAccount) throw new NotFoundError('Essa conta não existe !');

        AccountRepository.delete(idAccount);

        return res.status(StatusCodes.OK).json({message: 'Conta deletada com sucesso !'});
    }

    async rechargeAccount(req: Request, res: Response){
        const { balance } = req.body;
        const { idAccount } = req.params;

        if(balance === 0) throw new BadRequestError('Não é possível depositar 0 !');
        if(balance < 0) throw new BadRequestError('Não é possível depositar um número negativo !');
        if(!balance || typeof(balance) !== 'number') throw new BadRequestError;

        const searchAccount = await AccountRepository.findOneBy({id: Number(idAccount)});

        if(!searchAccount) throw new NotFoundError();

            // Pegando o Balanço ATUAL do ID Especificado !
        const searchBalance = await AccountRepository.find({
            select: ["balance"],
            where: {
                id: Number(idAccount)
            }
        })

            // Desestruturando e Somando o Balance da Conta ATUAL SOMADO ao Balance Depositado !!
        const [Account] = searchBalance
        const getBalance = Number(Account.balance);
        const newBalance = Number(balance) + getBalance;
        

        if(!searchAccount) throw new NotFoundError('Conta não encontrada !');

        await AccountRepository.update(idAccount, {
            ...searchAccount,
            balance: newBalance // Balance Antigo SOMADO ao Balance DEPOSITADO !!
        })

        return res.status(StatusCodes.CREATED).json({message: `${balance} foram depositados na sua conta com sucesso !`});
    }

    async withdrawalAccount(req: Request, res: Response){ // FALTA TERMINAR AS VERIFICAÇÕES (se tiver mais...) !!
            const {yourAccountID, transfer } = req.body
            const { AccountIDToTransfer } = req.params;
    
            if(transfer === 0) throw new BadRequestError('Não é possível transferir 0 !');
            if(!yourAccountID || !transfer) throw new BadRequestError();
            if(typeof(yourAccountID) !== 'number' || typeof(transfer) !== 'number') throw new BadRequestError();
            
            const searchYourAccountID = await AccountRepository.findOneBy({id: Number(yourAccountID)});
    
            if(!searchYourAccountID) throw new NotFoundError('Conta não encontrada !');
            
            const searchYourBalance = await AccountRepository.find({
                select: ["balance"],
                where: {
                    id: Number(yourAccountID)
                }
            })
    
            const [ Account ] = searchYourBalance;
            const yourAccountBalance = Number(Account.balance);
    
            const searchOtherAccountID = await AccountRepository.findOneBy({id: Number(AccountIDToTransfer)});
    
            if(!searchOtherAccountID) throw new BadRequestError();
    
            const searchOtherAccountBalance = await AccountRepository.find({
                select: ["balance"],
                where: {
                    id: Number(AccountIDToTransfer)
                }
            })
            
            const [ otherAccount ] = searchOtherAccountBalance;
            const otherAccountBalance = Number(otherAccount.balance);
    
                // Depois de pegar o ID e o Balanço DAS DUAS CONTAS, agora por último vou atualizar...
    
                    // SUA Conta
            const newBalanceYourAccount = yourAccountBalance - transfer;

            if(newBalanceYourAccount < 0) throw new BadRequestError('Saldo insuficiente !');
            
            await AccountRepository.update(yourAccountID, { // Conta que vai ter o Balanço SACADO !
                ...searchYourAccountID,
                balance: newBalanceYourAccount
            })

                    // OUTRA Conta
            const newBalanceOtherAccount = otherAccountBalance + transfer;
            
            await AccountRepository.update(AccountIDToTransfer, {
                ...searchOtherAccountID,
                balance: newBalanceOtherAccount
            })
    
            return res.status(StatusCodes.OK).json({message: `R$${transfer} foram transferidos para a conta ${AccountIDToTransfer} !` });
    }
}