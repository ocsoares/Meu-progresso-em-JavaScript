// Arrays <<
// Em JavaScript TAMBÉM é um Objeto ! <<

    // Declarando e Mostrando que Array em JS pode ter Vários Tipos Diferentes dentro !!! <<<<<
const createArray = [15,20,71,30,12]; // Declarando um Array
console.log(createArray); // Printando o Array (nesse caso, mostra o Tamanho dele e os Conteúdos !)
console.log(createArray[2]); // Printando um Array na Posição 2 (lembrando que em Array é 0, 1, 2, ...)

const otherArray = [19,12,'teste',1.82,true,null,'arroz',false]; // Diferente de C, Pode ter Vários Tipos de Dados Diferentes em uma Array
console.log(otherArray);
console.log('Inteiro:', otherArray[1],'String:', otherArray[2],'Float:', otherArray[3],'False:', otherArray[4],'Null:', otherArray[5]);
console.log('O tamanho desse array é:', otherArray.length); // Provando que é um Objeto ! (Porque length é um Comando para Objetos !)
console.log('\n');
// ----------------------------------------------------

    // Criando um Array OBJETO !! <<<<<<

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
// ----------------------------------------------------

    // Adicionando Elementos em uma Array <<<<<<<<<<
    // MESMO o Array sendo const, PODE ser Adicionado Elementos dentro ! <<<<<

const adicionandoAray = [10,8,32];
console.log('Array Inicial:', adicionandoAray);

    // Adicionando no ÍNICIO do Array - Array.unshift(Elemento) - NÃO PRECISA SER APENAS NÚMEROS !! <<<<<<
adicionandoAray.unshift(81); // também podia ser o Valor Dentro de uma Váriavel
console.log('Adicionando no Ínicio do Array:', adicionandoAray);

    // Adicionando em QUALQUER Posição do Array - Array.splice(Posição a ser Adicionado, Deletar um Elemento ou Não (Não é 0), Elemento a adicionar)
    // OBS: O elemento vai ser Adicionado ATRÁS da Posição Informada !! <<<
adicionandoAray.splice(2, 0, 'arroz');
console.log('Adicionando em Qualquer Posição do Array', adicionandoAray);

    // Adicionando no FINAL do Array - Array.push(Elemento) <<<<<
adicionandoAray.push(53.12);
console.log('Adicionando no Final do Array', adicionandoAray);

console.log('\n');
// ----------------------------------------------------


    // Removendo Elementos em uma Array ! <<<<<<<< !!!!!

const removeArray = [7, 32, 'banana', 5.47, 62];
console.log('Array Inicial:', removeArray);

// ----------------------------------------------------
// Removendo Elemento no FINAL da Array ! - Array.pop(); <<<<<<
// const elementoRemovido = removeArray.pop();  - Armazena o Elemento Removido em uma Váriavel !! <<
removeArray.pop();
console.log('Array após Remover o Último elemento:', removeArray);
// ----------------------------------------------------

// ----------------------------------------------------
// Removendo Elemento no ÍNICIO da Array ! - Array.shift(); <<<<<<
// Também Pode ser Armazenado em uma Variável !! <<
removeArray.shift();
console.log('Array após Remover o Primeiro elemento:', removeArray);
// ----------------------------------------------------

// ----------------------------------------------------
// Removendo Elemento de uma Array em QUALQUER Posição ! - Array.splice(Posição a ser Removida, Quantos Elementos serão excluidos) <<<<<<<<
// Também Pode ser Armazenado em uma Váriavel !! <<<<
removeArray.splice(0, 1); // Nesse caso, será Excluído Apenas 1 Elemento !!
console.log('Array após Remover um Elemento em uma Posição Qualquer:', removeArray);

console.log('\n');
// ----------------------------------------------------

// ----------------------------------------------------
// Esvaziando uma Array ! <<<<<<<<<< !!!
const esvaziaArray = ['Carlos', 12, 2034, 'Maria', true, 58.92];
console.log('Array a ser Esvaziado INICIAL:', esvaziaArray);

// Existem Outras Formas Também, mas essa é a Mais Eficiente !! <<<<< !!!
esvaziaArray.length = 0;
console.log('Array após ser Esvaziada:', esvaziaArray);

console.log('\n');
// ----------------------------------------------------

// Copiando uma Array (Tipo Primitivo) <<<<<<<

const copiaArray = [1, 28, 'Hugo', 5.12, true, 49];
console.log(copiaArray);

// ----------------------------------------------------
// Variavel a Receber a Cópia = Array.slice();  - () VAZIOS !! <<<<<<
// Lembrando, apenas para Primitivo, com Objeto NÃO é o correto ! <<
const cloneCopiaArray = copiaArray.slice();
console.log('Clonando com .slice:', cloneCopiaArray);
// ----------------------------------------------------

// ----------------------------------------------------
// Clonando com Spread = [...] <<<<<<<
// Variavel a Receber o Retorno = [...Array a ser clonado] <<
const cloneSpreadCopiaArray = [...copiaArray];
console.log('Clonado com spread:', cloneCopiaArray);

console.log('\n');
// ----------------------------------------------------

// ----------------------------------------------------
// Combinando (Concatenando) Arrays !!! <<<<<<<< !!

const primeiroArray = ['Maria', 21, 1.82]; // Apenas Declarando
const segundoArray = ['Pedro', 34, 1.93];
console.log(primeiroArray);
console.log(segundoArray);

// ----------------------------------------------------
// Combinando com spread para Arrays = [...]    // Para Objetos é {...} !!! <<<<<
// Variavel a Receber o Retorno = [...Array, ...Array a Combinar] <<
const spreadCombinadosArray = [...primeiroArray, ...segundoArray];
console.log('Array Combinado com spread:', spreadCombinadosArray);
// ----------------------------------------------------

// ----------------------------------------------------
// Com spread Também pode Combinar Modificando !! <<<<<<< !!!
// Variavel a Receber o Retorno = [...Array,Modificação, ...Array a ser Combinado,Modificação] <<
const spreadCombinandoArrayMod = [...primeiroArray, 'arroz', 12, 1.82, true, ...segundoArray, 987, 'feijão'];
console.log('Combinando Array com Spread E MODIFICANDO:', spreadCombinandoArrayMod);
// ----------------------------------------------------

// ----------------------------------------------------
// Combinando com .concat <<<<<<
// Variável a Receber o Retorno da Combinação = Array.concat(Array a ser Combinado (concatenado) ) <<
const combinadosArray = primeiroArray.concat(segundoArray);
console.log('Array Combinado com .concat:', combinadosArray);

console.log('\n');
// ----------------------------------------------------

// Dividir Arrays <<<<<<<<<< !!!
// Utilizando o Array Combinado acima << !

// ----------------------------------------------------
// Váriavel a Receber o Retorno da Array Dividida = Array.slice(Posição Inicial da Divisão, Posição Final) <<
// Sempre divide até a Posição Final MENOS 1 !!! (ex. 3 = 2) < !!!!!
const divididaArray = combinadosArray.slice(0, 3);
console.log(divididaArray);
// ----------------------------------------------------

// ----------------------------------------------------
// Outra utilização do .slice é Dividir uma Array a partir de uma Posição até o FINAL ! <<<<<<<
// Variavel a Receber o Retorno = Array.slice(Dividir da Posição Informada até o FINAl do Array) <<
const otherDivididaArray = combinadosArray.slice(2);
console.log(otherDivididaArray);

console.log('\n');
// ----------------------------------------------------

    // Encontrando Elementos em uma Array (Primitivo) <<<<<

const encontrandoArray = [10,16,47,'feijoada',81,16];
console.log('Array Inicial:', encontrandoArray)

// ----------------------------------------------------
    // Encontrando em qual Posição o Elemento se encontra (0, 1, 2...) - Array.indexOf(Elemento) <<<<<<<<
    // Se o Elemento Informado não existir, a Função Retorna -1 !! <<
console.log(encontrandoArray.indexOf('feijoada'));
// ----------------------------------------------------

// ----------------------------------------------------
    // Procura a Posição da ÚLTIMA Ocorrência de um Elemento - Array.lastIndexOf(Elemento) <<<<<<
    // Se o Elemento Informado NÃO Exister, a Função Retorna -1 !! <<
console.log(encontrandoArray.lastIndexOf(16));
// ----------------------------------------------------

// ----------------------------------------------------
    // Verificando se um Elemento existe no Array - Array.includes(Elemento) <<<<< !!!
    // Retorna true ou false !!  
console.log(encontrandoArray.includes(47));

console.log('\n');
// ----------------------------------------------------

    // Encontrando Elementos por Referência (Array com Objetos) <<<<<<<
    // Esse Método é Mais COMPLICADO, o Mais Fácil é usar Arrow Function !! << !!!

    // Váriavel para guardar = Váriavel do Array Objeto.find(function(Parâmetro){Objeto a ser Encontrado}); <<
    // Se a Propriedade Informada para Retornar Existir, ela Retorna o Objeto INTEIRO !! <<
    // Caso a Propriedade Informada não for Verdade, Retorna undefined !! <<

const referenciaArray = [
    {nome: 'Maria Silva', idade: 21, sexo: 'Feminino'},
    {nome: 'Eduardo Henrique', idade: 26, sexo: 'Masculino'},
    {nome: 'Jennifer Costas', idade: 17, sexo: 'Outro'},
]
    console.log(referenciaArray);

    // Método mais FÁCIL para fazer a Mesma Função abaixo, MAS com Arrow Function <<<<< !!!!!!

    // ----------------------------------------------------
    // Pelo o que eu entendi, ATRÁS da Arrow é o Parâmetro e na FRENTE é o Retorno
const arrowFunction = referenciaArray.find(array => array.sexo === 'Masculino'); // Nesse caso, NÃO precisou da Function e do Retorno !!
    // ----------------------------------------------------

const guardaReferenciaArray = referenciaArray.find(function(array){ // Não Esquecer de Abrir e Fechar {} depos do Parâmetro !!
    return array.sexo === 'Masculino'; // Nesse caso, vai Retornar o Objeto inteiro que contém a propriedade sexo: 'Masculino' !!!
//  return array.sexo === 'Outro'; // Nesse caso, óbvio, iria retornar o Objeto da Jennifer !!!
//  return array.sexo === 'peixe'; // Nesse caso, vai retornar undefined !


}); // Fechar com ; <<

console.log('Retornado:', guardaReferenciaArray); // Printando o Retorno

console.log('\n');
// ---------------------------------------------------

// Função .join <<<<<<
// Coloca um Valor Informado entre o Intervalo de uma Array << !

const joinArray = [1,'Maria',2,3];
console.log(joinArray);

const retornoJoinArray = joinArray.join(', ');
console.log(retornoJoinArray);