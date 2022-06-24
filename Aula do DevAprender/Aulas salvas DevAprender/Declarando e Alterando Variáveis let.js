// Declarando Variáveis - let (Pode ser Alterada) !
let checkStatus = true; // também podia ser false;  // Variável Boolean
let cadeira; // Varíavel Indefinida  // também podia ser let cadeira = undefined; (MAS NÃO é muito comum usar assim !) 
let resetVariable = null; // Variável VAZIA (pode ser usada para "zerar" Outras Variáveis) 

let age = 21, cep = 203910; // também pode por a Variavel de String junto com os Inteiros, mas prefiro separar assim !
let height = 1.82; // em JavaScript não existe float, nesse caso, é uma Variável de número normal, igual acima !
let fullName = 'Carlos Alberto,';

console.log(fullName, 'com', height, 'de altura, sua idade é', age, 'e seu CEP é', cep);
console.log('\n');
// ------------------------------------

    // Alterando as Variavéis let !!
age = 41;
fullName = 'Pedro Heitor,';
console.log('Novo nome:', fullName, 'com idade de:', age);