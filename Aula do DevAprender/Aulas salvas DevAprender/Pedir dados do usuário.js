// Pegando Dados de Entrada do Usuário !!!!

    // Modo Correto no Nodejs !! <<<
    // Instalar o Módulo Readline-sync no Projeto (se Não tiver Instalado)
    // Habilitar esse Módulo - const readlineSync = require('readline-sync);    // A Variável const Poderia ser Outro Nome !!
    // Pedir o Input e Armazenar em uma Variável -  const retornoInput = readlineSync.question('Pedir algo como input');  (Exemplo !!)
    // node + Nome do Projeto normalmente

    const readlineSync = require('readline-sync');
    const retornoInput = readlineSync.question('Digite seu nome: ');
    console.log('Seu nome é:', retornoInput);


    // SÓ FUNCIONA EM PÁGINA !! NO NODE NÃO !!!!
// const guardaInput = prompt('Digite seu nome:');
// console.log('Seu nome é:', guardaInput);