// SEMPRE que acabar a Aula no DIA, upar no GitHub até acabar TUDO! (e mudar o nome dos Arquivos e da Pasta)
// DEPOS que acabar TUDO, Separar os Tópicos em Arquivos separados !

// Pegando Dados de Entrada do Usuário !!!!

    // Modo Correto no Nodejs !! <<<
    // Instalar o Módulo Readline-sync no Projeto (se Não tiver Instalado)
    // Habilitar esse Módulo - const readlineSync = require('readline-sync);    // A Variável const Poderia ser Outro Nome !!
    // Pedir o Input e Armazenar em uma Variável -  const retornoInput = readlineSync.question('Pedir algo como input');
    // node + Nome do Projeto normalmente

    const readlineSync = require('readline-sync');
    const retornoInput = readlineSync.question('Digite seu nome: ');
    console.log('Seu nome é:', retornoInput);


    // SÓ FUNCIONA EM PÁGINA !! NO NODE NÃO !!!!
// const guardaInput = prompt('Digite seu nome:');
// console.log('Seu nome é:', guardaInput);

// Printando no console
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

    // Exemplo de como NÃO é possível Alterar a Variável const (no caso abaixo, da erro) !
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
// -----------------------------------------

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

    // Clonando MAS Adicionando Algo no Objeto  - DENTRO dos {} !!!
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

    // .indexOf = Verifica em qual Posição (index) Determinado Valor COMEÇA no Valor Especificado - Variável.indexOf(algo para Verificar);
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

    // Usado para manter as Strings Formatadas de Acordo com as LINHAS (Mantém Quebra de Linhas, Parágrafos, etc...)
    // Utilizar ( `` )

    //Exemplo

        // Obviamente, podia ser const
    let texto = `Escrevendo uma linha
    qualquer para ver
            a String funcionando
        !`

    console.log(texto);

    console.log('\n');

    // Adicionando algo Dentro desse Tipo de String
    // Utilizar ${Váriavel, Operação Matemática, Função, etc...}

    const adicionandoTexto = 'Caiu na rede é peixe';
    const numeroTexto = 1821;
     
    texto = `Escrevendo uma linha >TEXTO ADICIONADO: ${adicionandoTexto}<
    qualquer para ver
        >NUMERO ADICIONADO: ${numeroTexto}<    a String funcionando
        !       ${10+2}`
        // Permito usar Outras funcionalidades também, como por exemplo, Funções.

    console.log(texto)

    console.log('\n');
// ------------------------------------------

// Algumas maneiras de Declarar uma Data (tem Outras também !)

    // Usar new Date();
    // Pelo o que eu vi, se a Data for Inválida ele Retorna Invalid Date !!!

    // Mostra a Data Atual
const primeiraData = new Date();
console.log(primeiraData);

    // Define a Data a ser Mostrada (Passar em String !!)
const segundaData = new Date('September 10 2009 18:32') // Mês + Dia + Ano + Horário (ex. 16:40)
console.log(segundaData);

    // Outra forma de Definir a Data a ser Mostrada (em números !!)
const terceiraData = new Date(2005,01,23,15,51) // Ano + Mês + Dia + Horas + Minuto (o MÊS conta a partir do 0,  0 = Janeiro, 1 = Fevereiro, etc...)
console.log(terceiraData);

console.log('\n');

    // Funcionalidades (Métodos) para Date !!

    //  Altera o ANO de uma Data (Mesmo sendo const !!!) - Variável da Data.setFullYear(ano);
terceiraData.setFullYear(2050);
console.log('Alterando:', terceiraData);

    // Converte uma Data para String - Variável da Data.toDateString();
console.log(terceiraData.toDateString());

    // Mostra o Padrão de Horário Atual (no caso do Brasil, Horário de Brasília) - Variável da Data.toTimeString();
console.log(terceiraData.toTimeString());

    // Mostra como a Data é Informada no Banco de Dados - Variável da Data.toISOString();
console.log(segundaData.toISOString());

console.log('\n');
// -----------------------------------------------

// Arrays 
// Em JavaScript TAMBÉM é um Objeto !

const createArray = [15,20,71,30,12]; // Declarando um Array
console.log(createArray); // Printando o Array (nesse caso, mostra o Tamanho dele e os Conteúdos !)
console.log(createArray[2]); // Printando um Array na Posição 2 (lembrando que em Array é 0, 1, 2, ...)

const otherArray = [19,12,'teste',1.82,true,null,'arroz',false]; // Diferente de C, Pode ter Vários Tipos de Dados Diferentes em uma Array
console.log(otherArray);
console.log('Inteiro:', otherArray[1],'String:', otherArray[2],'Float:', otherArray[3],'False:', otherArray[4],'Null:', otherArray[5]);
console.log('O tamanho desse array é:', otherArray.length); // Provando que é um Objeto ! (Porque length é um Comando para Objetos !)
console.log('\n');

    // Criando um Array OBJETO !!

    // Cada {} é um Objeto DIFERENTE ! Logo, as Propriedades NÃO são as mesmas, porque é Diferente em cada Objeto !!
let price = [ // Não esquecer de abrir e fechar com [] !
    {sessaoUm: 'Você está na primeira sessão !', maxPrice: 90, minPrice: 40},
    {sessaoDois: 'Você está na segunda sessão!', maxPrice: 80, minPrice: 50},
    {sessaoTres: 'Você está na terceira sessão!', maxPrice: 50, minPrice: 35}
]; // Não esquecer de fechar com ; 

// Para decorrer todo o Conteúdo dessa Array
for(let key of price){
    console.log(key);
}

// console.log(price[1]) // Imprimindo, por exemplo, o Segundo Objeto (0, 1, 2...)

console.log('\n');

    // Adicionando Elementos em uma Array
    // MESMO o Array sendo const, PODE ser Adicionado Elementos dentro !

const adicionandoAray = [10,8,32];
console.log('Array Inicial:', adicionandoAray);

    // Adicionando no ÍNICIO do Array - Array.unshift(Elemento) - NÃO PRECISA SER APENAS NÚMEROS !!
adicionandoAray.unshift(81); // também podia ser o Valor Dentro de uma Váriavel
console.log('Adicionando no Ínicio do Array:', adicionandoAray);

    // Adicionando em QUALQUER Posição do Array - Array.splice(Posição a ser Adicionado, Deletar um Elemento ou Não (Não é 0), Elemento a adicionar)
    // OBS: O elemento vai ser Adicionado ATRÁS da Posição Informada !!
adicionandoAray.splice(2, 0, 'arroz');
console.log('Adicionando em Qualquer Posição do Array', adicionandoAray);

    // Adicionando no FINAL do Array - Array.push(Elemento)
adicionandoAray.push(53.12);
console.log('Adicionando no Final do Array', adicionandoAray);

console.log('\n');

    // Removendo Elementos em uma Array !
    const removeArray = [7,32,'banana', 5.47, 62];
    console.log('Array Inicial:',removeArray);
    
        // Removendo Elemento no FINAL da Array ! - Array.pop();
        // const elementoRemovido = removeArray.pop();  - Armazena o Elemento Removido em uma Váriavel !!
    removeArray.pop();
    console.log('Array após Remover o Último elemento:',removeArray);
    
        // Removendo Elemento no ÍNICIO da Array ! - Array.shift();
        // Também Pode ser Armazenado em uma Variável !!
    removeArray.shift();
    console.log('Array após Remover o Primeiro elemento:',removeArray);
    
        // Removendo Elemento de uma Array em QUALQUER Posição ! - Array.splice(Posição a ser Removida, Quantos Elementos serão excluidos)
        // Também Pode ser Armazenado em uma Váriavel !!
    removeArray.splice(0,1); // Nesse caso, será Excluído Apenas 1 Elemento !!
    console.log('Array após Remover um Elemento em uma Posição Qualquer:', removeArray);
    
    console.log('\n');
    
        // Esvaziando uma Array !
    const esvaziaArray = ['Carlos', 12, 2034, 'Maria', true, 58.92];
    console.log('Array a ser Esvaziado INICIAL:', esvaziaArray);
    
        // Existem Outras Formas Também, mas essa é a Mais Eficiente !!
    esvaziaArray.length = 0;
    console.log('Array após ser Esvaziada:',esvaziaArray);
    
    console.log('\n');
    
        // Copiando uma Array (Tipo Primitivo)
    const copiaArray = [1,28,'Hugo',5.12,true,49];
    console.log(copiaArray);
    
        // Variavel a Receber a Cópia = Array.slice();  - () VAZIOS !!
        // Lembrando, apenas para Primitivo, com Objeto NÃO é o correto !
    const cloneCopiaArray = copiaArray.slice();
    console.log('Clonando com .slice:',cloneCopiaArray);
    
        // Clonando com Spread = [...]
        // Variavel a Receber o Retorno = [...Array a ser clonado]
    const cloneSpreadCopiaArray = [...copiaArray];
    console.log('Clonado com spread:',cloneCopiaArray);
    
    console.log('\n');
    
        // Combinando (Concatenando) Arrays !!!
    const primeiroArray = ['Maria', 21, 1.82];
    const segundoArray = ['Pedro', 34, 1.93];
    console.log(primeiroArray);
    console.log(segundoArray);
    
        // Combinando com spread para Arrays = [...]    // Para Objetos é {...} !!!
        // Variavel a Receber o Retorno = [...Array, ...Array a Combinar]
    const spreadCombinadosArray = [...primeiroArray, ...segundoArray];
    console.log('Array Combinado com spread:',spreadCombinadosArray);
    
        // Com spread Também pode Combinar Modificando !!
        // Variavel a Receber o Retorno = [...Array,Modificação, ...Array a ser Combinado,Modificação]
    const spreadCombinandoArrayMod = [...primeiroArray,'arroz',12,1.82,true,...segundoArray,987,'feijão'];
    console.log('Combinando Array com Spread E MODIFICANDO:',spreadCombinandoArrayMod);
    
        // Combinando com .concat
        // Variável a Receber o Retorno da Combinação = Array.concat(Array a ser Combinado (concatenado) )
    const combinadosArray = primeiroArray.concat(segundoArray);
    console.log('Array Combinado com .concat:',combinadosArray);
    
    console.log('\n');
    
        // Dividir Arrays
        // Utilizando o Array Combinado acima
    
        // Váriavel a Receber o Retorno da Array Dividida = Array.slice(Posição Inicial da Divisão, Posição Final)
        // Sempre divide até a Posição Final MENOS 1 !!! (ex. 3 = 2)
        const divididaArray = combinadosArray.slice(0, 3);
        console.log(divididaArray);
    
        // Outra utilização do .slice é Dividir uma Array a partir de uma Posição até o FINAL !
        // Variavel a Receber o Retorno = Array.slice(Dividir da Posição Informada até o FINAl do Array)
        const otherDivididaArray = combinadosArray.slice(2);
        console.log(otherDivididaArray);
    
    console.log('\n');

console.log('\n');

    // Encontrando Elementos em uma Array (Primitivo)
const encontrandoArray = [10,16,47,'feijoada',81,16];
console.log('Array Inicial:', encontrandoArray)

    // Encontrando em qual Posição o Elemento se encontra (0, 1, 2...) - Array.indexOf(Elemento)
    // Se o Elemento Informado não existir, a Função Retorna -1 !!
console.log(encontrandoArray.indexOf('feijoada'));

    // Procura a Posição da ÚLTIMA Ocorrência de um Elemento - Array.lastIndexOf(Elemento)
    // Se o Elemento Informado NÃO Exister, a Função Retorna -1 !!
console.log(encontrandoArray.lastIndexOf(16));

    // Verificando se um Elemento existe no Array - Array.includes(Elemento)
    // Retorna true ou false !!  
console.log(encontrandoArray.includes(47));

console.log('\n');

    // Encontrando Elementos por Referência (Array com Objetos)
    // Váriavel para guardar = Váriavel do Array Objeto.find(function(Parâmetro){Objeto a ser Encontrado});
    // Se a Propriedade Informada para Retornar Existir, ela Retorna o Objeto INTEIRO !!
    // Caso a Propriedade Informada não for Verdade, Retorna undefined !!

const referenciaArray = [
    {nome: 'Maria Silva', idade: 21, sexo: 'Feminino'},
    {nome: 'Eduardo Henrique', idade: 26, sexo: 'Masculino'},
    {nome: 'Jennifer Costas', idade: 17, sexo: 'Outro'},
]
    console.log(referenciaArray);

const guardaReferenciaArray = referenciaArray.find(function(array){ // Não Esquecer de Abrir e Fechar {} depos do Parâmetro !!
    return array.sexo === 'Masculino'; // Nesse caso, vai Retornar o Objeto inteiro que contém a propriedade sexo: 'Masculino' !!!
//  return array.sexo === 'Outro'; // Nesse caso, óbvio, iria retornar o Objeto da Jennifer !!!
//  return array.sexo === 'peixe'; // Nesse caso, vai retornar undefined !


}); // Fechar com ;

console.log('Retornado:', guardaReferenciaArray); // Printando o Retorno

console.log('\n');
// ------------------------------------------------------

// Arrow Functions - Funções de Setas ( => )
// É uma forma mais fácil de Declarar Métodos ou o Corpo do Método
// Método = Quando uma Propriedade do Objeto armazena uma Função !!

    // Usando o mesmo exemplo acima de referenciaArray
console.log(referenciaArray);

    // Fazendo a MESMA Função para Verificar se o Objeto Informado Existe, MAS com Arrow Functions <<<
    // Pelo o que eu entendi, ATRÁS e na FRENTE da Arrow transforma em Parâmetro direto !
    // Esse jeito só Funciona com Função com 1 Parâmetro !!!
    // Caso NÃO Exista Parâmetros, colocar apenas um () vazio Antes da Arrow !!

    // Pelo o que eu entendi, ATRÁS da Arrow é o Parâmetro e na FRENTE é o Retorno
const arrowFunction = referenciaArray.find(array => array.sexo === 'Masculino'); // Nesse caso, NÃO precisou da Function e do Retorno !!

console.log('Retornado com Arrow Function:', arrowFunction);

console.log('\n');
// ---------------------------------------------

// forEach em Arrays
// Pode ser usado no lugar do for of
// Fácil para Mostrar o Conteúdo da Array + o Índice de Cada Um

const forEachArray = ['macarrão', 12, 'Gustavo', 1.82, 137];
console.log(forEachArray);

    // Mostrando o Conteúdo da Array + Índice da Cada Um
forEachArray.forEach((array, index) => console.log(array, index));

console.log('\n');
// --------------------------------------------------

        // COLOCAR ISSO NO ARQUIVO DE ARRAY !!
// Função .join
// Coloca um Valor Informado entre o Intervalo de uma Array

const joinArray = [1,'Maria',2,3];
console.log(joinArray);

const retornoJoinArray = joinArray.join(', ');
console.log(retornoJoinArray);

console.log('\n');
// -----------------------------------------------------