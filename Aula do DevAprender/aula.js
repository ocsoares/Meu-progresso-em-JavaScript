// SEMPRE que acabar a Aula no DIA, upar no GitHub até acabar TUDO! (e mudar o nome dos Arquivos e da Pasta)

// Printando no console Web
console.log("Apenas testando"); // Também pode ser com Aspas Duplas, mas as Simples são mais utilizadas!
console.log('\n'); // Pula linha
console.log('teste');
console.log('Pedro\'s House'); // Caso precisar colocar outra Aspas Simples (') dentro da String com Aspas Simples, usar \ antes dessa aspas.
console.log('\n');
// -------------------------------------

// Declarando Variáveis - let (Pode ser Alterada) !
let checkStatus = true; // também podia ser false;  // Variável Boolean
let cadeira; // Varíavel Indefinida  // também podia ser let cadeira = undefined; (MAS NÃO é muito comum usar assim !) 
let resetVariable = null; // Variável VAZIA (pode ser usada para "zerar" Outras Variáveis) 

let age = 21, cep = 203910; // também pode por a Variavel de String junto com os Inteiros, mas prefiro separar assim !
let height = 1.82; // em JavaScript não existe float, nesse caso, é uma Variável de número normal, igual acima !
let fullName = 'Carlos Alberto,';

console.log(fullName, 'com', height, 'de altura, sua idade é', age, 'e seu CEP é', cep);
console.log('\n');
// ------------------------------------

    // Alterando as Variavéis let !!
age = 41;
fullName = 'Pedro Heitor,';
console.log('Novo nome:', fullName, 'com idade de:', age);

// Declarando Variáveis - const (NÃO pode ser Alterada) - Variável Mais utilizada !!
const otherAge = 26;
console.log('Outra idade:', otherAge);
console.log('\n');

    // Exemplo de como NÃO é possível Alterar a Variável (no caso abaixo, da erro) !
// otherAge = 30;
// console.log('Alterando outra idade:', otherAge);
// -----------------------------------

// Declarando Objetos (em C chama-se Estruturas)
const person = {
    name: 'Henrique Diaz', // Atribuir com : ao invés de =   // sempre uma Vírgula no final de cada Item !
    objAge: 37,
    objHeight: 1.87,
    objCep: 1213 // ACHO que no Último NÃO precisa de Vírgula
};

console.log(person); // Printando o que Possuí dentro do Objeto
console.log(person.name); // Para printar um Conteúdo dentro do Objeto = Nome do objeto.Nome do Conteúdo
console.log(person.objAge);
console.log('O usuário', person.name, 'tem', person.objAge, 'anos.');

person.objAge = 12; // Nesse caso, em Objetos, Mesmo sendo const PODE ser Alterada !
console.log(person.objAge); // Printando após ser Alterado
console.log('\n');
// ------------------------------------

// Arrays - em JavaScript, TAMBÉM é um Objeto !
const createArray = [15,20,71,30,12]; // Declarando um Array
console.log(createArray); // Printando o Array (nesse caso, mostra o Tamanho dele e os Conteúdos !)
console.log(createArray[2]); // Printando um Array na Posição 2 (lembrando que em Array é 0, 1, 2, ...)

const otherArray = [19,12,'teste',1.82,true,null,'arroz',false]; // Diferente de C, Pode ter Vários Tipos de Dados Diferentes em uma Array
console.log(otherArray);
console.log('Inteiro:', otherArray[1],'String:', otherArray[2],'Float:', otherArray[3],'False:', otherArray[4],'Null:', otherArray[5]);
console.log('O tamanho desse array é:', otherArray.length); // Provando que é um Objeto ! (Porque length é um Comando para Objetos !)
console.log('\n');
// -----------------------------------

// Funções

    // SEM Parâmetro !
let carro = 'carro preto'; // Variável Original

function changeData(){ // Função que Altera o valor da Variável (no caso, carro)
    carro = 'carro vermelho fosco'
};
console.log(carro); // Printando ANTES de Chamar a Função

changeData(); // Chama função
console.log(carro); // Printando DEPOIS de Chamar a Função 

console.log('----');

    // COM Parâmetro !
let information = 'Banco de dados';
let item = 'cadeira';

    
function otherChangeData(inputData, receiveData){ // As Variáveis como Parâmetro recebem o valor de any (Qualquer uma, óbvio)
    inputData = receiveData;
    console.log('Retorno da Função:', inputData);

    return inputData;
};

otherChangeData(item, 1); // Executando a Função (que DENTRO dela Imprime o Retorno, Mas NÃO Altera a Variável !)
console.log(item); // A Função NÃO Altera o Valor da Variável !

item = otherChangeData(item, 2); // ATRIBUINDO o Retorno da Função para a Váriavel
console.log(item); // Prova que realmente atribuiu (Diferente do Primeiro que não alterou )

console.log('----');

    // PRINTANDO o Retorno da Função !
function anyChange(data, otherData){ // As Variáveis como Parâmetro recebem o valor de any (Qualquer uma, óbvio)
    data = otherData;
    return data; // Retorno da Função !
};

let otherItem = 'vassoura';

console.log(otherItem);
console.log(anyChange(otherItem, 'cadeira batida 123'));

console.log('----');

    // RECEBENDO Mais de 2 Parâmetros !
let otherCarro = 'carro comum';

function changeCar(color, state){
    otherCarro = color + state; // Parâmetro + Parâmetro...   // RECOMENDADO: No caso de Espaço para Separar Strings, usar ' ' NA FUNÇÃO ! Ex-
                                // -emplo: Parâmetro + ' ' + Parâmetro...
};

console.log(otherCarro);
changeCar('carro verde', ' em estado perfeito'); // O valor dos Parâmetro separados por Vírgula !
console.log(otherCarro);

console.log('----');

    // SEM Retorno !
function voidFunction(){
    console.log('Apenas teste boy!');
};

voidFunction();

console.log('\n');

    // Variavel Recebendo como Valor o Retorno de uma Função !
function doMultiplication(num, mult){
    num *= mult;
    return num;
};

let result = doMultiplication(2,5); // Variavel Recebeu o Retorno da Função (nesse caso, 10)
console.log('O valor da multiplicação é:', result);

console.log('\n');
// ---------------------------

// Diferença entre == e === 

    // Em JavaScript sempre usar TRÊS Iguais para Comparar ! ( === ) (isso também se aplica pro DIFERENTE ( !== ) )
let num = 5, numDois = '5';

    // Nesse caso retorna TRUE !!!
console.log(num, 'é igual ( == ) a', numDois, '?', num == numDois); // Apenas Dois Iguais compara o Valor independente do Tipo da Variavel (se é int, string...), se o re-
                             // -sultado for Igual, mas em Outro Tipo, ele CONVERTE para esse Tipo e Compara !!!

    // Nesse caso, óbvio, retorna FALSE ! (nesse caso, se fosse Apenas 5 (em número) iria Retornar True !)
console.log(num, 'é igual ( === ) a', numDois,'?', num === numDois); // Três Iguais compara o Valor DO MESMO Tipo !

console.log(num, 'é diferente ( != ) de', numDois, '?', num != numDois); // Retorna True, óbvio, porque é o MESMO caso do == 
console.log(num, 'é diferente ( !== ) de', numDois, '?', num !== numDois); // MAIS Utilizado também !!


console.log('\n');
// -------------------------

// Operador Ternário

let saldo = 200.00; // Variavel que vai ser Usada para Comparar
let limite = saldo > 500 ? 'Limite atingido !' : 'Você ainda não alcançou o limite.'; // saldo é Maior que 500 ? se SIM, 'Limite atingi-
                            // -do, se não ( : ), 'Você ainda não alcançou o limite.' (nesse caso, claro)  
console.log(limite); 

console.log('\n');
// ------------------------

// If, else if, else

let saldoBancario = 250.00;

if(saldoBancario === 700){
    console.log('Saldo no limite! Não gaste mais.');
} // NÃO Precisa utilizar ; no Final dos Colchetes nos If'

else if(saldoBancario > 100 && saldoBancario < 400){
    console.log('Limite distante.\nUtilize seus créditos á vontade.');
}

else if(saldoBancario < 100){
    console.log('Crédito insuficiente!\nDeposite mais.');
}

else{
    console.log('Limite atingido!!');
}

console.log('\n');
// ------------------------------------

// Switch Case

let opcao = 2; // 2, 3;

console.log('1 - Entrar\n2 - Resetar email\n3 - Resetar Senha\n');

switch(opcao){
    case 1:
    console.log('Voce logou com sucesso!');
    break;
    
    case 2:
    console.log('Voce solicitou para resetar o email, faça os passos fornecidos.');
    break

    case 3:
    console.log('Voce solicitiou para resetar sua senha, cheque o email cadastrado e siga os passos.');
    break;

    default:
    console.log('Selecione uma opcao correta !');
}

console.log('\n');
// --------------------------------

// Laços de Repetição

    // For
let numbers = [1,2,3,4,5,6,13,21,20];
let contadorPar = 0, contadorImpar = 0;
let i;

for(i = 0; i<3; i++){
    console.log("Testando o laço de repetição For !!");
}

for(i = 0; i<9; i++){
    if(numbers[i] % 2 === 0){
        console.log('O numero', numbers[i], 'é par!');
        contadorPar++;
    }

    else{
        console.log('O numero', numbers[i], 'é impar!');
        contadorImpar++;
    }
}

console.log('Foram detectados', contadorPar, 'numeros pares !');
console.log('Foram detectados', contadorImpar, 'números impares!');

console.log('\n');

    // While
let j = 0;

while(j < 3){
    console.log('Repetindo no looping while...', j+1);
    j++;
}

console.log('\n');

    // Do While

let k = 0;

do{
    console.log('Repetindo no Do While...', k+1);
    k++;

}while(k <3)

console.log('\n');

    // For In (ESSE EH NOVO PRA MIM !!)
    // Busca Informações Dentro de um Objeto !
    // NÃO Altera !!

const footballPlayer = {
    fName: 'Lewandowski',
    fAge: 34,
    fHeight: 1.82
};

    // Variavel key usada como Índice !   // Nesse caso, ele vai imprimir TODOS as Propriedades (Variáveis) dentro do Objeto !
for(let key in footballPlayer){ // for(Variável do índice in Objeto)
    console.log(key); // Imprimindo as Propriedades
}

    console.log('\n');

    // Quando NÃO Sabe o Nome da Propriedade ! (ex. Arrays !!)
for(let key in footballPlayer){
    console.log(key, footballPlayer['fAge']); // Nesse caso, ele vai mostrar o conteúdo da Propriedade Fornecida em TODAS as Outras !!
                    // em caso de + de Uma Propriedade passada, vai retornar a ÚLTIMA ! (ex. ['fAge', 'fName']  , Retona fName !!!)  
}

    console.log('\n');

    // Quando SABE o Nome da Propriedade !   
for(let key in footballPlayer){
    console.log(key, footballPlayer.fName); // Mesma coisa que o de cima, MAS usando . depois do Nome do Objeto !
}

    console.log('\n');

     // Provando que NÃO Altera !!
     console.log(footballPlayer.fName)
    console.log(footballPlayer.fAge);
    console.log(footballPlayer.fHeight);

    console.log('\n');

for(let key in footballPlayer){
    console.log(key, footballPlayer[key]); // (Índice, Nome do Objeto[Índice])  // Dessa Maneira, mostra as Propriedades Seguidas do Conteú-
                                           // -do Respectivo de cada uma !!
}

    console.log('\n');

    // For Of (Esse também é novo pra mim !!!)
    // Melhor para se Utilizar em Arrays !
    // Ele mostra Mais FACILMENTE o Conteúdo de uma Array !

const footballNames = ['Lewandowski', 'Neymar', 'Messi', 'Cristiano Ronaldo'];

for(let key of footballNames){
        console.log(key);
    }

    console.log('\n');

    // ...