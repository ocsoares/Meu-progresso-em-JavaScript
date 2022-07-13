import { Router, Request, Response, NextFunction } from "express";
import jwtAuthenticatorMiddleware from "../middlewares/jwt-authentication.middleware";

const checkStatus = Router();

checkStatus.get('/status', jwtAuthenticatorMiddleware, (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send({'message': 'Servidor online !'});
});

export default checkStatus;