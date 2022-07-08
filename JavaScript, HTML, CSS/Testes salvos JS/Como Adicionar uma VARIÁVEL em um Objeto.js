let person = {name: 'Pedro', age: 18, country: 'France'};
console.log(person);

    // Declarando a CHAVE (o Nome dela PODIA ser o Mesmo, mas eu quis deixar Diferente)
let newKey = 'myPet';

    // Adicionando a CHAVE newKey (que o Nome dela é myPet), com o CONTEÚDO 'Thor' !! 
person[newKey] = 'Thor'; // ao Invés de Declarar o Conteúdo ('Thor', no caso), podia Também passar uma Variável !!

console.log(person,'\n');
// ---------------------------------------------------------

let simpleObject = {
    name: 'Pedro',
    age: '18',
    country: 'Brazil',
    language: 'Portuguese'
};
console.log(simpleObject);

let otherKey = 'game'; // Criando a Chave
simpleObject[otherKey] = 'GTA V'; // Passando a Chave + Conteúdo ('GTA V', no caso)

console.log(simpleObject);