import { Router, Request, Response, NextFunction } from "express";

const usersRoutes = Router();

    // Exporta com default !! E pode também, se quiser, exportar DIRETAMENTE nessa Primeira Linha  !!
usersRoutes.get('/users', (req: Request, res: Response, next: NextFunction) =>{ // Rota para Consultar Usuários !!
    const usersDatabase:any = [{
        name: 'LEWA',
        idade: 43,
        country: 'Brazil'
    }];

    res.status(200).send(usersDatabase);
});

export default usersRoutes;