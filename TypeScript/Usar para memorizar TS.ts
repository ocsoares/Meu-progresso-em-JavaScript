export {}

    // INTERFACES = Como se fosse Structs em C, pode ser usado em Diversos Arquivos DIFERENTES, através da Exportação

    // Para exportar: Antes da Declaração da interface, colocar export !!!
    // Depois de exportar, Ir no Arquivo que vai ser utilizado e Importar com import { Nome da interface } from "./nomedoArquivo";

    //  OBS: Pode-se fazer o Merge de DUAS Interfaces com Propriedades DIFERENTES, Mas com o MESMO Nome (Merge declaration) !!
    //  OBS: Boa Prática: declarar interfaces com I Maiúsculo + Início de Cada palavra Maíusculo !!

interface IUserInfo {
    name: string
    age: number
    id: number
    vip?: boolean // esse ? quer dizer Opcional !!
}

    // Tipo de Variável + Nome da Variável + :Nome da Interface = {}  !!
const user_Maria: IUserInfo = { // TEM que Necessariamente passar TODAS as PROPRIEDADES da Interface (exceto, como é Opcional, a Propriedade com ? ) !!!!
    name: 'Maria',
    age: 27,
    id: 9983,
    vip: true // Nesse caso, como é Opcional ( ? ), poderia Não colocar esse vip !!!
};

const user_Carlos: IUserInfo = {
    name: 'Carlos Silva',
    age: 23,
    id: 653
};

console.log(user_Maria);
console.log(user_Carlos);

console.log('\n');
// -----------------------------------------------------------

// -----------------------------------------------------------
    // Também pode Especificar o que a Propriedade deve Receber DENTRO da Interface
    // Ex:

interface IAccountMember {
    name: string;
    id: number;
    country: string;
    typeAccount: 'common' | 'premium'; // Ou em TypeScript é Apenas com UM  |  !! 
};

const account_zkTron: IAccountMember = {
    name: 'zkTron',
    id: 332,
    country: 'Brasil',
    // typeAccount: 'car'   nesse Exemplo, iria Retornar um Erro !!
    typeAccount: 'common'
};

console.log(account_zkTron);

console.log('\n');
// -----------------------------------------------------------

// -----------------------------------------------------------
    // Estendendo uma interface !!
    // Estender uma interface significa Criar uma NOVA interface com as MESMAS PROPRIEDADES que a Original, MAS ADICIONANDO algu-
    // -mas Propriedas a mais !!
    
    // Usando o Exemplo da interface IAccountMember a cima !!
    // interface Nova interface + extends interface ORIGINAL
interface IStatusAccount extends IAccountMember{
    statusAccount: boolean;
}

    // NÃO Esquecer do Variavel: interface !!!!
const IStatusAccountSituation: IStatusAccount = {
    name: 'Fernando Silva',
    id: 402,
    country: 'Portugal',
    typeAccount: 'common',
    statusAccount: true
};

console.log(IStatusAccountSituation);

console.log('\n');
// -----------------------------------------------------------

// -----------------------------------------------------------
    // Funções com Interface
    //  OBS: Fiz apenas Função com extends porque fora isso, a Função é feita Normalmente !

interface IUser{
    name: string
    password: string
  //permission?: 'admin' | 'owner' | 'super_admin';  - Exemplo citado abaixo !
}

interface IAdmin extends IUser{
    permission: 'admin' | 'owner' | 'super_admin';
}

    // Essa Função checa se é um Usuário Normal ou um Admin !!
    // Poderia ser feita Também colocando o permission como Opcional ( ? ) no IUser, e verificar na Função (ex. if(typeUser.permission) ) se Exstir é ADMIN !! 

    // Usar in porque a Função não vê a Nova Propriedade do extends !! (se fosse Função normal, poderia usar parâmetro.Alguma propriedade !! e Tam-
    // -bém se fosse Apenas UMA Interface na Varíavel, funcionaria Normalmente com .propriedade !!) 
const checkStatusUser = (typeUser: IUser | IAdmin) => {
    if('permission' in typeUser) return console.log('Administrador logado com sucesso.'); // Nesse caso, se tiver a Propriedade permission é Admin !!

    return console.log('Usuário logado com sucesso.');
}

const userGustavo: IUser = {
    name: 'Gustavo Diaz',
    password: 'gu5597'
};

console.log('Checando Usuário:', userGustavo);
checkStatusUser(userGustavo);

console.log('\n');

const adminPedro: IAdmin = {
    name: 'Pedro Carvalho',
    password: 'pc321',
    permission: 'owner'
}

console.log('Checando Admin:', adminPedro);
checkStatusUser(adminPedro);