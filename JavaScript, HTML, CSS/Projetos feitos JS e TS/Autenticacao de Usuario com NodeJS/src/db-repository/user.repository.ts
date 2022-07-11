import IUser from "../models/user.model";
import firstDatabase from "../../database";

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
        const queryToId = ' SELECT uuid, username FROM application_user WHERE uuid = $1 ';

        const valuesId = [uuid]; // Array para os ID !
        const { rows } = await firstDatabase.query<IUser>(queryToId, valuesId);

        // Destrutura o Array para essa Variável !
        // Coloquei esse Any porque NÃO tava reconhecendo o Tipo !
        //const { returnId } = rows;  // ERA pra ser esse mas ta dando Erro não sei por que !!
        
        //return returnId // ERA pra ser esse mas ta dando Erro não sei por que !!
        return rows[0]; // Nesse caso, Funciona com Apenas rows também !
    }
}

    // Com esse new, Exporta uma Instância (Instância = Objeto com os Atributos e os Métodos implementados) !!!
export default new UserRepository(); // Não esquecer dos () !!