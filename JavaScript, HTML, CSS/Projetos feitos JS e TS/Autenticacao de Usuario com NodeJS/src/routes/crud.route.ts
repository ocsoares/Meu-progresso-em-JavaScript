import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const crudRoute = Router();

crudRoute.get('/crud/:id', (req: Request<{id: string}>, res: Response, next: NextFunction) => {

    const id = req.params.id;

    res.status(200).send({id}); // O send() envia APENAS 1 Informação !! 
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