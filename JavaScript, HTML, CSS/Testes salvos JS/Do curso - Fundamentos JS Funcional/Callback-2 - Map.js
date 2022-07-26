const anyArray = [2,10,3,9,8,23,25];
console.log('Array original:', anyArray);
console.log('\n');

const multiplyByTwo = number => number * 2;

const arrayMultiplyByTwo = anyArray.map(multiplyByTwo);
console.log('Array alterado:', arrayMultiplyByTwo);
console.log('\n');

const arrayNames = ['Maria', 'Gustavo', 'Fernanda', 'Heitor'];
console.log('Array nomes original:', arrayNames);
console.log('\n');

const getFirstCharacter = name => name[0];

const arrayFirstCharacter = arrayNames.map(getFirstCharacter);
console.log('Array alterado:', arrayFirstCharacter);
console.log('\n');

const anyObject = [
    { instrument: 'Geladeira', quant: 7, price: '102.12' },
    { instrument: 'Colchão', quant: 4, price: 54.87 },
    { instrument: null, quant: 9, price: null },
    { instrument: 'Ventilador', quant: 2, price: 91.34 }
]

const getOnlyNamesObject = prop => prop.instrument

const arrayOnlyWithNames = anyObject.map(getOnlyNamesObject);
console.log(arrayOnlyWithNames);
console.log('\n');

const getQuantTimesPrice = prop => prop.quant * prop.price

const arrayWithQuantTimesPrice = anyObject.map(getQuantTimesPrice);
console.log(arrayWithQuantTimesPrice);