import IUser from "../models/user.model";
import firstDatabase from "../../database";
import DatabaseError from "../models/database-error.model";
import AuthenticatorForbiddenError from "../models/authenticator-forbidden-error.model";

// OBS: Os $ do Banco de Dados são os Parâmetros a serem passados !!

class UserRepository{

    // async = Transforma em uma Função Assíncrona
    // Promise = Objeto Assíncrono == Pode estar disponível Agora, Depois ou Nunca !!
    //  OBS: Para uma Função Assíncrona funcionar, precisa ter async, Promise e await !

            // <IUser> informar que o Resultado DEVE vir usando, no caso, a Interface IUSER !!
            // [] depois do IUSER = Informa que deve ter uma Lista !    
    async findUsers(): Promise<IUser[]>{
        const queryToUsers = ' SELECT uuid, username FROM application_user ' // Usa apenas o ID e o username do DB, SEM a Senha !!

            // await = Aguarda a Promise ser Resolvida, e DEPOIS Armazena na Variável result !
        const {rows} = await firstDatabase.query<IUser>(queryToUsers); // Executa no Banco de Dados (firstDatabase) a Query que eu programei Acima (queryToUsers) !!

            // Se eu usasse uma Variável Normal no lugar de {rows}, utilizaria o código Abaixo !
        //const returnRows = result.rows // rows = Retorna os Elementos de uma Tabela !!

            // Se deu tudo certo, retorna a(s) Tabela(s) (returnRows). e se der ERRADO retorna Vazio ( [] ) !!
        return rows || [];
    }

                                // SEM [] no IUser !!!
    async findById(uuid: string): Promise<IUser>{                 // $1 = Primeiro Parâmetro !
        try {
            const queryToId = ' SELECT uuid, username FROM application_user WHERE uuid = $1 ';

            const valuesId = [uuid]; // Array para os ID !
            const { rows } = await firstDatabase.query<IUser>(queryToId, valuesId);

            // Destrutura o Array para essa Variável !
            const [returnId] = rows;   // Destruct de Array [] !!!    Mesma coisa que returnId = rows[0] !!!

            return returnId;
        }
        catch (error) {
            console.log(error);
            throw new DatabaseError('Erro ao consultar por ID ! Confira o ID e tente novamente.', error);
        }
    }

            // user: IUser para pode pegar as Propriedades dessa Interface (ex. user.password) !! 
                                    // Como vai vai Retornar um ID, usar Promise<string> !! 
    async createNewUser(user: IUser): Promise<string>{                                          // Após fazer o Novo Usuário, Retorna o uuid gerado !
                                                                                            // OBS: Usar APENAS 'algo...' em Banco de Dados !! 
        const queryToNewUser =  ` INSERT INTO application_user (username, password) VALUES ($1, crypt($2, gen_salt('md5'))) RETURNING uuid `

        const valuesNewUser = [user.username, user.password]; // Parâmetros dos $ !!!

                                       // Vai Retornar um uuid do Tipo string ! 
        const { rows } =  await firstDatabase.query<{uuid: string}>(queryToNewUser, valuesNewUser);
        const [ returnUser ] = rows;

        return returnUser.uuid; // Retorna o novo uuid Gerado !
    }

        // Como ele vai Alterar um Valor JÁ EXISTENTE, NÃO precisa de Retorno !!
        //  OBS: Por isso do Promise<void> !   
    async updateAUser(user: IUser): Promise<void>{ // NÃO TA ALTERANDO N SEI PQ 
                                                                          // WHERE = Indica qual ID será Atualizado !  
        const queryToUpdate = ` UPDATE application_user SET username = $1, password = crypt($2, gen_salt('md5')) WHERE uuid = $3 `
        const valuesUpdate = [user.username, user.password, user.uuid]; 

        await firstDatabase.query(queryToUpdate, valuesUpdate);
    }

    async deleteAUser(uuid: string): Promise<void>{
        const queryToDelete = ` DELETE FROM application_user WHERE uuid = $1 `

        const valuesDelete = [uuid];

        await firstDatabase.query(queryToDelete, valuesDelete);
    }

        // Promessa de Retornar algo IUser, se encontrar alguém com o Nome e a Senha Informada, null SE NÃO encontrar !!
    async findByUsernameAndPassword(username: string, password: string): Promise<IUser[] | null>{
        try {
            const queryToAuthenticate = ` SELECT uuid, username FROM application_user WHERE username = $1 AND password = crypt($2, gen_salt('md5')) `

            const valuesAuthenticate = [username, password];

            // Do tipo IUser, óbvio !  
            const { rows } = await firstDatabase.query<IUser>(queryToAuthenticate, valuesAuthenticate);
            const returnUser = rows; // Pega a Primeira Posição de rows !  ( rows[0] )

            // Retorna o User se achar, SE NÃO, Retorna null !!
            return returnUser || null;

        }
        catch (error) {
            throw new AuthenticatorForbiddenError('Erro na consulta ! Tente novamente.', error);
        }
    }
}

    // Com esse new, Exporta uma Instância (Instância = Objeto com os Atributos e os Métodos implementados) !!!
export default new UserRepository(); // Não esquecer dos () !!