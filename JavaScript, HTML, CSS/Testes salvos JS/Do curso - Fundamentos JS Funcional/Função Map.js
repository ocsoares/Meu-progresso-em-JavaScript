    // Função Map = Transforma um >>ARRAY<< em OUTRO Array com o MESMO Tamanho !! <<

const arrayNumbers = [1, 2, 5, 10, 12, 6, 20];

    // Parâmetro = TODOS os Elementos do Array !! <<
const multiplyElementsByTwo = arrayNumbers.map(element => element * 10);

console.log('Original:', arrayNumbers) // Provando que NÃO altera o Array Original !! <<
console.log('\n');

console.log('Alterado:', multiplyElementsByTwo);
console.log('\n');

const students = [
    { name: 'Pedro Alves', grade: 8.12 },
    { name: 'Maria Silva', grade: 4.19 },
    { name: 'Heitor Fonchez', grade: 7.83 },
    { name: 'Yury Lopes', grade: 8.59 },
]

const roundGradesSchool = students.map(elements => Math.floor(elements.grade))

console.log('Round grades:', roundGradesSchool);
console.log('\n');


    // Pegando só uma Propriedade de um Objeto em um Array !!
const getOneProp = students.map(elements => elements.grade);
console.log('getOneProp:', getOneProp);
console.log('\n');

    // Vários Maps !! <<
const otherGetOneProp = element => element.grade // Funciona MESMO não aparecendo como Função Disponível !!

    // DEPOIS que Pegar A Propriedade (igual Acima), pode fazer Vários Maps igual Abaixo (TEM que ser Função ) !!
const variousMap = students.map(otherGetOneProp).map(Math.floor);
console.log('variousMap:', variousMap);