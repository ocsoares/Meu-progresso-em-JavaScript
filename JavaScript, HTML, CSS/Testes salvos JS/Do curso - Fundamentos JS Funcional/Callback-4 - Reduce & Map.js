const anyObject = [
    { name: 'Maria Silva', height: 1.50, age: 12 },
    { name: 'Carlos Alves', height: 1.90, age: 19 },
    { name: 'Gustavo Malhorca', height: 1.86 , age: 10},
    { name: 'Hugo Tavarez', height: 1.72, age: 25 }
]

const getOnlyAge = prop => prop.age // Pega APENAS a Propriedade .age desse Array Objeto e coloca em um Array !! <<
const getSumAge = (total, prop) => total + prop // SOMA TODO esse Array ! // Sem .age porque, óbvio, vai somar em um ARRAY, não em um Objeto !! <<

const returnSumAge = anyObject.map(getOnlyAge).reduce(getSumAge);
console.log('Retorno de Todos os .age SOMADOS:', returnSumAge);

    // FAZENDO A MESMA COISA QUE ACIMA, só que por Etapas ( - eficiente ) !! <<

    // Apenas pegando as Idades do Array Objeto e colocando em um Array !
// const getOnlyAge = prop => prop.age

// const arrayOnlyAge = anyObject.map(getOnlyAge);
// console.log('Apenas a Idade:', arrayOnlyAge);
// console.log('\n');

//     // SOMANDO as Idades desse Array !!
// const getTotalAge = (total, prop) => total + prop

// const getTotalAgeArray = arrayOnlyAge.reduce(getTotalAge);
// console.log('Soma de Todo o Array:', getTotalAgeArray);