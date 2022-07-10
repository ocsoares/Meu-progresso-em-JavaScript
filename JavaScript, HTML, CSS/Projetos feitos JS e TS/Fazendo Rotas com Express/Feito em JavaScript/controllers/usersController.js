    // Separando em Arquivos as Funções !!
    // ACHO que NÃO é possível fazer com Arrow Function (Fiz e deu Erro) !!

import { arrayDataBase } from "../arraydatabase.js";

const usersController = {
        // req = request,   res = response !
        // o .json APENAS Retorna algo na Tela, ele NÃO cria nenhum Dado !!
    createUser (req, res){ // post = para Criar algum Dado
        const fullInformation = req.body; // Pegando todas as Informações do Objeto informado no Thunder Client - Post!!
        const {name, age, bank} = req.body; // Desestruturando as Propriedades do Objeto criado no Thunder Client - Post !
    
            // Criando Condições para NEGAR o Registro (POST) !!
        if(name.length < 1) return res.status(403).json({'message': 'Não é possível cadastrar um nome vazio !'});
        if(age > 150) return res.status(403).json({'message': 'Idade inválida !'});
        if(bank.length < 1) return res.status(403).json({'message': 'Não é possível cadastrar um Banco vazio !'});
    
        arrayDataBase.push(fullInformation); // Enviando a Desestruturação acima para o Banco de Dados (no caso, arrayDataBase)!
    
        return res.status(201).json({'message:': `User ${name} registered successufully`}); // Se tudo der certo, nesse caso, Retorna o Status Code e a mensagem !
    },

    showsUsers (req, res){ // Nome da Rota + Arrow Function a Executar !
        return res.status(200).json(arrayDataBase) // Retorna a response OK (status code 200) e o Conteúdo de arrayDataBase, no caso. (com o .json)
    }
};

export { usersController };