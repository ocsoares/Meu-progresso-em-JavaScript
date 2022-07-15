import IUSer from "../models/user.model";
import failAuthenticatorError from "../models/failAuthenticator-error";
import errorHandler from "../middlewares/error-handler.middleware";
import { NextFunction } from "express";

class crudRepository{

    verifyIsExists = (username: string, password: string) => {
        try{
            const returnUser = [username, password];
            

            return returnUser;
        }
        catch(error){
            throw new failAuthenticatorError('LEAVA', Error)
        }
    }

}

export default new crudRepository;