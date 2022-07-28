const anyArray = [10,99,203,84,2430,81,203,84,743];

const orderNumbers = anyArray.sort( (number, otherNumber) => number - otherNumber) // Não sei pq disso, mas Funciona
console.log('Números ordenados:', orderNumbers);
console.log('\n');

const maxNumberInArray = array => Math.max.apply(null, array);
console.log('Maior número no Array:', maxNumberInArray(anyArray));

const minNumberInArray = array => Math.min.apply(null, array);
console.log('Menor número no Array:', minNumberInArray(anyArray));

const filterArrayFunction = numbers => numbers < 100;
const filterArray = anyArray.filter(filterArrayFunction);
console.log('Números MENORES que 100 no Array:', filterArray);