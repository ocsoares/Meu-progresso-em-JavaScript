import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { ApiError } from "../models/api-error.model";

                                    // Agregando os Dois Tipos de Erros para pode utilizar o .statusCode !!
export const errorMiddleware = (
    error: Error & Partial<ApiError>, // Torna os Atributos de um valor informado OPCIONAL !! 
    req: Request,
    res: Response,
    next: NextFunction // Por algum motivo TEM que ter o next: NextFunction, MESMO ele NÃO sendo lido !
) => {

        // Se error.statusCode EXISTIR, atribua a Variável statusCode, SE NÃO (ou se for Undefined ou Nulo) Retorna o status code 500 !! 
        //  OBS: Se NÃO o statuscode não existir, vai Retornar 500 porque foi um Erro Inesperado !!
    const statusCode = error.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;

        // Se o statusCode existir, envia a mensagem enviada no throw da Função, SE NÃO, envia Internal Server Error !!
    const message = error.statusCode ? error.message : 'Internal Server Error';

        // Se existir uma mensagem, Retorna o statusCode E a Mensagem (tem situações que não precisa de mensagem...) !!
    if(message){
        // Retorna o statusCode no .status, e esse statusCode vai ser passado no throw da Função que está chamando !!
    return res.status(statusCode).json({message}); // A mensagem TAMBÉM vai ser passada na Função que está chamando !!
    }

        // Se NÃO existir uma mensagem, Retorna APENAS o statusCode !!
    return res.sendStatus(statusCode);
}


// import { NextFunction, Request, Response } from "express"
// import { StatusCodes } from "http-status-codes"
// import failAuthenticatorError from "../models/failAuthenticator-error"

// const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
//     if(error instanceof failAuthenticatorError){
//         res.sendStatus(StatusCodes.BAD_REQUEST);
//     }
//     else{
//         res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// export default errorHandler;