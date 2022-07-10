import { Router, Request, Response, NextFunction} from "express";

const sectionsRoute = Router();

    // Pega o ID digitado depois do /url/AQUI 
                                        // esse <{}> depois do Request significa que o Parâmetro do ID VAI ser String (e libera o AutoComplete) !!!
sectionsRoute.get('/sections/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) =>{ // esse : Depois do / APENAS aparece no Código, na URL é apenas a /  !!!
    const sectionsDatabase = [{sections:
    'Pizza, Burger, Pancake...'}];

    const id = req.params.id; // Pega o Valor do ID com req (Requisição) + params.ID (ACHO q Podia ser outro Nome no ID !)

    res.status(200).send({id}); // id entre ({}) !!
});

export default sectionsRoute;