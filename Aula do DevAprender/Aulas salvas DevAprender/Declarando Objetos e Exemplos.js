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