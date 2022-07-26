const anyObject = [
    { name: 'Maria Silva', height: 1.50, age: 12, haveInternet: true },
    { name: 'Carlos Alves', height: 1.90, age: 19, haveInternet: false },
    { name: 'Gustavo Malhorca', height: 1.86 , age: 10, haveInternet: true },
    { name: 'Hugo Tavarez', height: 1.72, age: 25, haveInternet: false }
]

const getInternetSituation = prop => prop.haveInternet === true; // Filter
const getAge = prop => prop.age // Map
const getHeight = prop => prop.height
  // Reduce

    // Retornando os Objetos dentro do Array que estão na Condição do filter (getInternetSituation) !! <<
const returnInternetSituation = anyObject.filter(getInternetSituation);
console.log(returnInternetSituation);
console.log('\n');

const getFilterAndAge = anyObject.filter(getInternetSituation).map(getAge)
console.log(getFilterAndAge);
console.log('\n');

const addMapHeight = anyObject.filter(getInternetSituation).map(getHeight).concat(getFilterAndAge);
console.log(addMapHeight);
console.log('\n');

const sumArray = (total, element) => total + element

    // SOMANDO todo o Array (Idade e Altura) e Dividindo pela Quantidade de Elementos do Array !! <<
const returnSumArray = addMapHeight.reduce(sumArray) / addMapHeight.length;
console.log(returnSumArray);