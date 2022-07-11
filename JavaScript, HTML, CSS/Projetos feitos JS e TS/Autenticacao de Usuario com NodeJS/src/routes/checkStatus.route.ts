import { Router, Request, Response, NextFunction } from "express";

const checkStatus = Router();

checkStatus.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({'message': 'Servidor online !'});
});

export default checkStatus;