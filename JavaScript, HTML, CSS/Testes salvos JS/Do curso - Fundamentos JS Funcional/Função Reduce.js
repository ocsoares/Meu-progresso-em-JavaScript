    // Reduce = Forma um NOVO >>Array<< de acordo com as Condições especificada !! <<

const anyArray = [2, 10, 43, 193, 53, 37];
console.log('Array comum:', anyArray);
console.log('\n');

    // NOVO Valor a ESQUERDA, Elementos a DIREITA !! <<
const sumNumbers = anyArray.reduce((total, elements) => total + elements); // Retorna um NOVO Array com TODOS os Elementos SOMADOS !! 
console.log('Soma total do Array:', sumNumbers);
console.log('\n');

    // Retorna um NOVO Array com a DIVISÃO de TODO o Array !!
const getAverage = anyArray.reduce((average, elements) => elements / average);
console.log('Dividindo todo o Array:', getAverage);
console.log('\n');

    // Com Função de Parâmetros !!
const parameterFunctionReduce = (total, elements) => total + elements;
const sumNumbersWithParameterFunction = anyArray.reduce(parameterFunctionReduce);
console.log('Somando com Função Parâmetro:', sumNumbersWithParameterFunction)
console.log('\n');

    // Elemento, Índice, Array
    //  OBS: Também tem isso no Filter e no Map !!

    // Acumulador, Elemento, Índice, Array // ACHEI ISSO um pouco Díficil !! <<
const average = (operacao, elements, indice, array) => { // SOMA TODO o Array e DIVIDE pela QUANTIDADE de Elementos !!
    if (indice === array.length - 1) {
        return (operacao + elements) / array.length
    }
    else {
        return operacao + elements
    }
}

const result = anyArray.reduce(average);
console.log('Somando o Array e Dividindo pela QUANTIDADE de Elementos:', result);
console.log('\n');

    // Assim eu Achei mais FÁCIL !
    // Mesmo que o de CIMA !
    // Usando a Função de Soma JÁ Feita !! <<

const easyAverage = sumNumbers / anyArray.length; // Divide a SOMA pela Quantidade de Elementos do Array !! <<
console.log('Media igual o de Cima, MAS mais Fácil:', easyAverage);