import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const checkStatus = Router();

checkStatus.get('/status', (req: Request, res: Response) =>{
    res.status(StatusCodes.OK).send({'message': 'TESTE DB'});
})

export default checkStatus;