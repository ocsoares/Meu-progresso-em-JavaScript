// SEMPRE que acabar a Aula no DIA, upar no GitHub até acabar TUDO! (e mudar o nome dos Arquivos e da Pasta)
// DEPOS que acabar TUDO, Separar alguns tópicos Importantes em Arquivos separados !

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
// -----------------------------------------

// Factory Functions = Funções de Fábrica 

    // Usado para Criar uma Função do Mesmo Tipo sempre que Precisar e
    // evitar repetição !!
    // declarar o nome de uma Factory Function usando camelCase (ex. umDoisTresQuatro) !!! 

function makeStudent(name, age, id, discipline){
    const student = {
    // return {   // Também pode ser feito assim porque já retorna o Objeto sem precisar Retornar na Última Linha da Função

    name: name,
    age: age,
    id: id,
    discipline: discipline
    
    // Quando a Variavel no Objeto da Função Recebe o Conteúdo de uma Variável com o MESMO Nome, pode se colocar Apenas uma vez
    // o nome dessa Variavel (ex. Variável name do Objeto Recebe name, que tem o Mesmo Nome mas é PARÂMETRO da Função !)

    // EXEMPLO:

    // name,
    // age,
    // id,
    // discipline

    }

    return student; // Se fosse feito igual Comentado na Segunda Linha da Função, NÃO precisaria desse return !!
}

    // Retornando as Informações da Factory Function para uma Váriavel
const doneStudent = makeStudent('Henrique Silva', 23, 9458, 'Matemática');
// outra variável.. outra variável... etc...

console.log(doneStudent);

for(let key in doneStudent){ // Printando o Conteúdo da Váriavel
    console.log(doneStudent[key]);
}

console.log('\n');
// -----------------------------------------

// Constructor Functions - Funções de Construtor

    // Ao contrário do Factory Function, o Constructor Function NÃO Retorna nada, o Objeto tem que ser Criado !!
    // Declarar o nome de uma Constructor Function usando PascalCase (ex. CincoSeisSeteOito) !!!

function MakeOtherStudent(otherName, otherAge, otherId, otherDiscipline) { // também podia ser o Mesmo Nome das Váriaveis 
    this.name = otherName; // this = Usado para indicar que está USANDO o Objeto Referenciado (nesse caso, está usando o name)
    this.age = otherAge;
    this.id = otherId;
    this.discipline = otherDiscipline;

    // SEM RETORNO !!
}

    // Criando um Novo Objeto a partir das Informações da Constructor Function
const otherStudent = new MakeOtherStudent('Gabriel Feitosa', 28, 5481, 'Geografia'); // new = Cria o Objeto de acordo com os Parâmetros

console.log(otherStudent); // Printando o Objeto

console.log('\n');

for(key in otherStudent){
    console.log(otherStudent[key]);
}

console.log('\n');
// -------------------------------------

// Natureza Dinâmica de Objetos

    // Um Objeto pode ser Alterado facilmente em JavaScript, permitindo que
    // Adicione ou Delete Propriedades de um Objeto !!!

    // Exemplo:
const food = {
    name: 'Lasanha',
    price: 24.90,
    validity: '22/07/2022'
}

console.log(food);

    //Adicionando e Deletando Objetos
food.anyName = 'arroz'; // ADICIONADO
food.newFunction = function(){
    console.log('teste');
}
console.log(food);

delete food.anyName; // DELETADO
delete food.newFunction;
console.log(food);

console.log('\n');
// ---------------------------------

// Clonando Objetos

const objetoOriginal = {
    esporte: 'Futebol',
    objetivo: 'Gol',
    tempo: 90
}
console.log(objetoOriginal);

const objetoClonado = Object.assign({}, objetoOriginal); // Novo Objeto = Objetct.assign({}, Objeto a ser Clonado)
console.log(objetoClonado);
console.log('\n');

    // Clonando MAS Adicionando Algo no Objeto
const objetoClonadoAdicionado = Object.assign({
    player: 'Messi',
    player2: 'Cristiano Ronaldo'
}, objetoOriginal);

console.log(objetoClonadoAdicionado);

console.log('\n');

    // Outro Método (Spread = {...Objeto a ser clonado}
const spreadClone = {...objetoOriginal};
console.log(spreadClone);

console.log('\n');
// -------------------------------

// Função Math

    // Gerando números Aleatórios com Math.random

    // Apenas Math.random() gera números Aleatórios entre 0 e 1 !!
console.log(Math.random(10));

console.log('\n');
    // >> Tem como fazer também de um número X até Y, mas ainda não sei !! <<

    // Maior Valor entre números
const maxNumber = Math.max(12,31,24,9,10,12);
console.log(maxNumber);

    // Menor Valor entre números
const minNumber = Math.min(30,23,40,12,80,102);
console.log(minNumber);

console.log('\n');

    // TEM MUITO MAIS coisas importantes dessa Função !!
// --------------------------------------

// Strings

    // Tipos de String

    // Tipo Primitivo   - Mais utilizado
const primitiveString = '"Tipo primitivo !"'; // Óbvio que as Aspas Duplas DENTRO da String já com ' ' Conta como caracter
console.log(primitiveString);
console.log(typeof(primitiveString));
console.log('\n');                              // OS DOIS Tipos de Strings podem ser usados como Objeto ! (objeto.AlgumaFunção)

    // Tipo Objeto
const objectString = new String ('Tipo objeto !');
console.log(objectString);
console.log(typeof(objectString));

console.log('\n');

    // Verificando a String em Determinada Posição
console.log('O sexto caracter na string:',primitiveString, 'é:', primitiveString[6]);

    // Algumas Funções Mais utilizadas em String
    // A MAIORIA Também Pode ser usada em Números, Arrays, etc... <<

    // .lenght = Verifica o tamanho   
console.log('O tamanho da string:', primitiveString, 'é:', primitiveString.length);

    // .includes = Verifica se Determinado Valor existe na Variável - Variável.includes(algo para Verificar);
    // Retorna true ou false !!
console.log(primitiveString.includes('primitivo')); // No caso de Strings, compara Caracter com Caracter (pq se passar primi dá TRUE !!)

    // .startsWith = Verifica se Determinado Valor COMEÇA com o Valor Especificado ! - Variável.startsWith(algo para Verificar);
    // Retorna true ou false !!
console.log(primitiveString.startsWith('arroz'));

    // .endsWith = Verifica se Determinado Valor TERMINA com o Valor Especificado ! - Variável.endsWith(algo para Verificar);
    // Retorna true ou false !!
console.log(primitiveString.endsWith('primitivo !"'));

    // .indexOf = Verifica em qual Posição (index) Determinado Valor COMEÇA no Valor Especificado - Variável.endsWith(algo para Verificar);
    // Em caso de ERRO, retorna -1 (Pelo o que eu vi)
console.log(primitiveString.indexOf('Tipo')); // Nesse caso, a palavra Tipo nessa String começa A PARTIR do 1 Caracter (0, 1, 2...) !!!

    // .replace = Troca um Determinado Valor por Outro - Variável.replace(Valor EXISTENTE, Novo Valor);
    // Pelo o que eu vi, se o Valor for Repetido MAIS de uma Vez, Troca apenas a Primeira Aparição !
    // Pelo o que eu vi também, quando o Valor informado NÃO Existe, ele retorna o Valor original.
console.log(primitiveString.replace('Tipo', 'teste boy'));

    // .trim = Retira os espaços excedentes (no COMEÇO ou no FINAL) em uma String - Variável.trim();
console.log(primitiveString.trim()); 

    // .split = Separa Determinado Valor quando encontra o Valor Informado - Váriavel.split(Valor Informado);
console.log(primitiveString.split('i')); // Nesse caso, Separa Sempre que encontrar o Caracter i

console.log('\n');
// -----------------------------------------

// Template Literal