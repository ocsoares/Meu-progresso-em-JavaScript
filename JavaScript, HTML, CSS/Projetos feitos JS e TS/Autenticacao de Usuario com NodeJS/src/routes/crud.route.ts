import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../db-repository/user.repository";

const crudRoute = Router();

    // Rota para o Banco de Dados (Assíncrono) !!
    //  OBS: Mostra os Usuários do Banco de Dados !
crudRoute.get('/db', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findUsers();

        // Isso aqui serve para ver a Autenticação Básica do HTTP, para ver isso, ir em Thunder Client - GET na
        // URL /db, em Auth e digitar qualquer Usuário e Senha e Send, após isso vai ser Impresso no Console !
        // A autenticação segue o Exemplo de Tipo de Autenticação + usuário:senha, EXEMPLO:   Basic admin:server123 
     //console.log(req.headers['authorization']);

    res.status(200).send(users);
});

crudRoute.get('/db/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try{
        const id = req.params.id;
    
        // Adicionando Banco de Dados:
        // OBS: Passar o ID Registrado no Banco de Dados na URL do Navegador !!
        const dbId = await userRepository.findById(id); // Variável id como Parâmetro !
    
        res.status(200).send(dbId); // O send() envia APENAS 1 Informação !! 
        
    }
    catch(error){
        next(error) // A função next chama a Próxima Função que vai Tratar os Erros (que no caso, é meu error-handlers) !!
    }
});

    // Como é POST, óbvio, precisar Enviar as Requisições pelo Thunder Client - POST !!
crudRoute.post('/db', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

        // Adicionando Banco de Dados !!
        //  OBS: Tem que passar o Usuário e a Senha pelo Thunder Client - POST, e vai Retornar um ID !!
    const newUserFromDB = await userRepository.createNewUser(newUser);

    //console.log(newUser); // Imprime no Console o POST Enviado !

    res.status(StatusCodes.CREATED).send(newUserFromDB); // CREATED = status code 201 - PASSAR O Mouse por cima !!
});

    // PUT = Edita os Dados
    // Como ele Edita um Dado (nesse caso, Usuário) ele precisa saber do ID dele, por isso do <{id}> !!
    //  OBS: Editar pelo link/ID no modo PUT !!
crudRoute.put('/db/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) =>{  // NÃO TA ALTERANDO N SEI PQ !! <<
    const id = req.params.id;

    const changedId = req.body;
    changedId.id = id;

        // Alterar um Usuário por meio do link/ID no Thunder Client - PUT + Alterações a serem feitas !!
    await userRepository.updateAUser(changedId)

    res.status(StatusCodes.OK).send({teste: 'a'});
});

    // Passar pelo link/id !!
crudRoute.delete('/db/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const id = req.params.id;

    await userRepository.deleteAUser(id);

    res.sendStatus(StatusCodes.OK); // Diferente do status() que envia o Status Code e Depois mais alguma Informação, o sendStatus() JÁ En-
                                    // - via DIRETAMENTE o Stauts Code !!
})


export default crudRoute;