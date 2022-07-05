"use strict";
exports.__esModule = true;
// Tipo de Variável + Nome da Variável + :Nome da Interface = {}  !!
var user_Maria = {
    name: 'Maria',
    age: 27,
    id: 9983,
    vip: true // Nesse caso, como é Opcional ( ? ), poderia Não colocar esse vip !!!
};
var user_Carlos = {
    name: 'Carlos Silva',
    age: 23,
    id: 653
};
console.log(user_Maria);
console.log(user_Carlos);
console.log('\n');
;
var account_zkTron = {
    name: 'zkTron',
    id: 332,
    country: 'Brasil',
    // typeAccount: 'car'   nesse Exemplo, iria Retornar um Erro !!
    typeAccount: 'common'
};
console.log(account_zkTron);
console.log('\n');
// NÃO Esquecer do Variavel: interface !!!!
var IStatusAccountSituation = {
    name: 'Fernando Silva',
    id: 402,
    country: 'Portugal',
    typeAccount: 'common',
    statusAccount: true
};
console.log(IStatusAccountSituation);
console.log('\n');
// Essa Função checa se é um Usuário Normal ou um Admin !!
// Poderia ser feita Também colocando o permission como Opcional ( ? ) no IUser, e verificar na Função (ex. if(typeUser.permission) ) se Exstir é ADMIN !! 
// Usar in porque a Função não vê a Nova Propriedade do extends !! (se fosse Função normal, poderia usar parâmetro.Alguma propriedade !! e Tam-
// -bém se fosse Apenas UMA Interface na Varíavel, funcionaria Normalmente com .propriedade !!) 
var checkStatusUser = function (typeUser) {
    if ('permission' in typeUser)
        return console.log('Administrador logado com sucesso.'); // Nesse caso, se tiver a Propriedade permission é Admin !!
    return console.log('Usuário logado com sucesso.');
};
var userGustavo = {
    name: 'Gustavo Diaz',
    password: 'gu5597'
};
console.log('Checando Usuário:', userGustavo);
checkStatusUser(userGustavo);
console.log('\n');
var adminPedro = {
    name: 'Pedro Carvalho',
    password: 'pc321',
    permission: 'owner'
};
console.log('Checando Admin:', adminPedro);
checkStatusUser(adminPedro);
