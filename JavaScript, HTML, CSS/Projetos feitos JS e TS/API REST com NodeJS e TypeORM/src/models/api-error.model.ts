import { StatusCodes } from "http-status-codes";

// Modelo de Erro !
export class ApiError extends Error{
    public readonly statusCode: number // Criando um Atributo somente para Leitura para os StatusCodes !!
    constructor(message: string | undefined, statusCode: number){
        super(message);
        this.statusCode = statusCode;

        this.name = 'ErrorAPI'; // Por algum motivo, NÃO está alterando o Nome do Erro quando ele é IGUAL ao NOME DA CLASSE, por isso,
                                    // mudei Manualmente para confirmar e é isso mesmo, se colocar Manualmente 'ApiError', 'BadRequestError',
                                    // ele NÃO funciona !! <<<
    }
}

    // Criando Erros para statusCodes ESPECÍFICOS herdando os Atributos de ApiError !!
    // OBS: Coloquei mensagem como Opcional ! <<

export class BadRequestError extends ApiError{
    constructor(message?: string){
        super(message, StatusCodes.BAD_REQUEST);
        this.name = 'ErrorBadRequest';
    }
}

export class NotFoundError extends ApiError{
    constructor(message?: string){
        super(message, StatusCodes.NOT_FOUND);
        this.name = 'ErrorNotFound';
    }
}
export class  UnauthorizedError extends ApiError{
    constructor(message?: string){
        super(message, StatusCodes.UNAUTHORIZED);
        this.name = 'ErrorUnauthorized';
    }
}