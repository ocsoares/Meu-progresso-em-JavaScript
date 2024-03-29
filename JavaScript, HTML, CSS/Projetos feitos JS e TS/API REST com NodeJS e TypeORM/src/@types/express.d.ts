    // Criando Módulos para Reescrever alguns Dados do Express !! <<

// IMPORTANTE: Adicionar no tsconfig o Diretório da >PASTA< da MINHA Biblioteca CRIADA de Tipos = typeRoots["diretório..."] !!! <<<<<

import { Account } from "../database/src/entity/Account";

    // Corrigindo o Erro de Tipagem de req.user no Middleware authJWT !!! <<<
declare global {
    namespace Express { // Tem que ser EXATAMENTE Express !! <<
        export interface Request {
            user: Partial<Account> // Tipando com as Mesmas Propriedades que Contém no Usuário (nesse caso, informado na Entity Account) !! <<
                    // Partial porque, nesse caso, irei Retornar as Informações do Usuário SEM A Senha, e como ela foi Definida como OBRIGA-
                    // -TÓRIA, daria ERRO << !!  
            
            userWithIDParameter: Partial<Account>
        }
    }
}