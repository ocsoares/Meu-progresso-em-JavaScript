// Funções

    // SEM Parâmetro ! <<<<<<<<<<<
let carro = 'carro preto'; // Variável Original

function changeData(){ // Função que Altera o valor da Variável (no caso, carro)
    carro = 'carro vermelho fosco'
};
console.log(carro); // Printando ANTES de Chamar a Função

changeData(); // Chama função
console.log(carro); // Printando DEPOIS de Chamar a Função 

console.log('----');
// -------------------------------------

    // COM Parâmetro ! <<<<<<<<<<<<<<
let information = 'Banco de dados';
let item = 'cadeira';


function otherChangeData(inputData, receiveData) { // As Variáveis como Parâmetro recebem o valor de any (Qualquer uma, óbvio)
    inputData = receiveData;
    console.log('Retorno da Função:', inputData);

    return inputData;
};

otherChangeData(item, 1); // Executando a Função (que DENTRO dela Imprime o Retorno, Mas NÃO Altera a Variável !)
console.log(item); // A Função NÃO Altera o Valor da Variável !

    // Alterando o Valor da Variável !   OBS: A Variável Altera porque RECEBE o Retorno da Função !!!
item = otherChangeData(item, 'Alterando');
// -------------------------------------
    

    // PRINTANDO o Retorno da Função ! <<<<<<<<<<<<
function anyChange(data, otherData){ // As Variáveis como Parâmetro recebem o valor de any (Qualquer uma, óbvio)
    data = otherData;
    return data; // Retorno da Função !
};

let otherItem = 'vassoura';

console.log(otherItem);
console.log(anyChange(otherItem, 'cadeira batida 123'));

console.log('----');
// -------------------------------------

    // RECEBENDO Mais de 2 Parâmetros ! <<<<<<<<<<
let otherCarro = 'carro comum';

function changeCar(color, state){
    otherCarro = color + state; // Parâmetro + Parâmetro...   // RECOMENDADO: No caso de Espaço para Separar Strings, usar ' ' NA FUNÇÃO ! Ex-
                                // -emplo: Parâmetro + ' ' + Parâmetro...
};

console.log(otherCarro);
changeCar('carro verde', ' em estado perfeito'); // O valor dos Parâmetro separados por Vírgula !
console.log(otherCarro);

console.log('----');
// -------------------------------------

    // SEM Retorno ! <<<<<<<<<<<
function voidFunction(){
    console.log('Apenas teste boy!');
};

voidFunction();

console.log('\n');

    // Variavel Recebendo como Valor o Retorno de uma Função ! <<<<<<<<<<
function doMultiplication(num, mult){
    num *= mult;
    return num;
};

let result = doMultiplication(2,5); // Variavel Recebeu o Retorno da Função (nesse caso, 10)
console.log('O valor da multiplicação é:', result);

console.log('\n');
// -----------------------------------------