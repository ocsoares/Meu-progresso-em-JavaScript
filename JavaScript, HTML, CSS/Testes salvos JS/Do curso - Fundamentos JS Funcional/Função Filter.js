// Função Filter = Filtra o >>ARRAY<< pela Condição especificada !! <<
//  OBS: O Resultado desse Filtro SEMPRE vai ser do Mesmo Tamanho do Array OU Menor, óbvio...

const anyArray = [71, 5, 10, 8, 1, 121];
console.log('Array comum:', anyArray);

const getLessThanFifteen = anyArray.filter(elements => elements < 15); // Exemplo
console.log('Menor que Quinze:', getLessThanFifteen);

const getPairNumbers = anyArray.filter(elements => elements % 2 === 0)
console.log('Números pares:', getPairNumbers);
console.log('\n');

const withArrayObject = [
    { name: 'Gustavo Couto', grade: 9.12 },
    { name: 'Willian Carvalho', grade: 3.54 },
    { name: 'Yuri Souza', grade: 1.97 },
    { name: 'Heitor Francisco', grade: 6.32 }
]
    // Retorna o OBJETO INTEIRO Dentro do >Array< !!
const getPositiveAverage = withArrayObject.filter(elements => elements.grade >= 5);
console.log(getPositiveAverage);
console.log('\n');

    // Retornando APENAS uma Propriedade do retorno de Filter (pq vem em Objeto) !! <<
const getOnlyNumbers = getPositiveAverage.map(elements => elements.grade);
console.log(getOnlyNumbers);
console.log('\n');

    // Função como Parâmetro (bom para quando Muitas Funções Recebem o MESMO Parâmetro) !! <<
const parameterFunction = elements => elements.grade <= 4;
const getAverageWithParameterFunction = withArrayObject.filter(parameterFunction);
console.log(getAverageWithParameterFunction)