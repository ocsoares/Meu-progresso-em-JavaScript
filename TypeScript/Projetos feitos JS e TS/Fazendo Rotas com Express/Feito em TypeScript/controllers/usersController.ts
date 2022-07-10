import { Request, Response } from "express"; // Precisa IMPORTAR o Request e o Response e Colocar nos Parâmetros !!
import { arrayDataBase } from "../arraydatabase.js";

export class UsersController { // Ao invés de variável, é uma Classe, e já exporta Direto !!

    createUser(req: Request, res: Response): Response { // ...): Response = Significa que o RETORNO dessa Função vai ser Response !!!
        const fullInformation = req.body;
        const { name, age, bank } = req.body; // Desestruturando as Propriedades do Objeto criado no Thunder Client - Post !

        // Criando Condições para NEGAR o Registro (POST) !!
        if (name.length < 1) return res.status(403).json({ 'message': 'Não é possível cadastrar um nome vazio !' });
        if (age > 150) return res.status(403).json({ 'message': 'Idade inválida !' });
        if (bank.length < 1) return res.status(403).json({ 'message': 'Não é possível cadastrar um Banco vazio !' });

        arrayDataBase.push(fullInformation);

        return res.status(201).json({ 'message:': `User ${name} registered successufully` }); // Se tudo der certo, nesse caso, Retorna o Status Code e a mensagem !
    } // NÃO precisa por vírgula !!!

    showsUsers(req: Request, res: Response) {
        return res.status(200).json(arrayDataBase);
    }
};