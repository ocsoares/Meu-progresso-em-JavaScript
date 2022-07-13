    // Extendendo a Declaração do Express !!! (ISSO É PADRÃO, NÃO precisa decorar, apenas fazer) !!!
    //  OBS: Pasta Configurada em tsconfig.json na Função typeRoots !!!

import IUser from "../models/user.model";

declare module 'express-serve-static-core'{
    interface Request{
        user?: IUser;
    }
}