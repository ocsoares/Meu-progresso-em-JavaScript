// Arrow Functions - Funções de Setas ( => ) <<<<<<<

// É uma forma mais fácil de Declarar Métodos ou o Corpo do Método <<<< !!
// Método = Quando uma Propriedade do Objeto armazena uma Função !! <<

const referenciaArray = [
    {nome: 'Maria Silva', idade: 21, sexo: 'Feminino'},
    {nome: 'Eduardo Henrique', idade: 26, sexo: 'Masculino'},
    {nome: 'Jennifer Costas', idade: 17, sexo: 'Outro'},
]
    console.log(referenciaArray);

    // Pelo o que eu entendi, ATRÁS e na FRENTE da Arrow transforma em Parâmetro, direto ! <<<< !!
    // Esse jeito só Funciona com Função com 1 Parâmetro !!! << !!
    // Caso NÃO Exista Parâmetros, colocar apenas um () vazio Antes da Arrow !! << !!

    // Pelo o que eu entendi, ATRÁS da Arrow é o Parâmetro e na FRENTE é o Retorno <<<< !!!
const arrowFunction = referenciaArray.find(array => array.sexo === 'Masculino'); // Nesse caso, NÃO precisou da Function e do Retorno !!

console.log('Retornado com Arrow Function:', arrowFunction); // Retorna o Objeto inteiro se possuir o .sexo 'Masculino' !!!