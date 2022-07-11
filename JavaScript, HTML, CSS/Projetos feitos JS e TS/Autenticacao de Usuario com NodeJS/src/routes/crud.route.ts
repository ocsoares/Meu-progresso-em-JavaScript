import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../db-repository/user.repository";

const crudRoute = Router();

    // Rota para o Banco de Dados (Assíncrono) !!
crudRoute.get('/db', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findUsers();

    res.status(200).send(users);
});

crudRoute.get('/db/:id', async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // Adicionando Banco de Dados:
    // OBS: Passar o ID Registrado no Banco de Dados na URL do Navegador !!
    const dbId = await userRepository.findById(id); // Variável id como Parâmetro !

    res.status(200).send(dbId); // O send() envia APENAS 1 Informação !! 
});

    // Como é POST, óbvio, precisar Enviar as Requisições pelo Thunder Client - POST !!
crudRoute.post('/crud', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(newUser); // Imprime no Console o POST Enviado !

    res.status(StatusCodes.CREATED).send(newUser); // CREATED = status code 201 - PASSAR O Mouse por cima !!
});

    // PUT = Edita os Dados
    // Como ele Edita um Dado (nesse caso, Usuário) ele precisa saber do ID dele, por isso do <{id}> !!
    //  OBS: Editar pelo link/ID no modo PUT !!
crudRoute.put('/crud/:id', (req: Request<{id: string}>, res: Response, next: NextFunction) =>{
    const id = req.params.id;

    const changedId = req.body;
    changedId.id = id;

    res.status(StatusCodes.OK).send({changedId});
});

    // Passar pelo link/id !!
crudRoute.delete('/crud/:id', (req: Request, res: Response, next: NextFunction) => {

    res.sendStatus(StatusCodes.OK); // Diferente do status() que envia o Status Code e Depois mais alguma Informação, o sendStatus() JÁ En-
                                    // - via DIRETAMENTE o Stauts Code !!
})


export default crudRoute;