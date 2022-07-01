// Função Math

    // Gerando números Aleatórios com Math.random <<<<<

    // Apenas Math.random() gera números Aleatórios entre 0 e 1 !!
console.log(Math.random(10));

console.log('\n');
// >> Tem como fazer também de um número X até Y, mas ainda não sei !! <<

// Maior Valor entre números <<<<<<
const maxNumber = Math.max(12, 31, 24, 9, 10, 12);
console.log(maxNumber);

// Menor Valor entre números <<<<<<<
const minNumber = Math.min(30, 23, 40, 12, 80, 102);
console.log(minNumber);

console.log('\n');

    // Math.ceil = Arredonda um Número para CIMA
    // Math.floor = Arredonda um Número para BAIXO
const a = 10;
const b = 3;

console.log('Divisão NORMAL:', a / b);
console.log('Divisão Arredondando para CIMA:', Math.ceil(a / b));
console.log('Divisão Arredondando para BAIXO:', Math.floor(a / b));

    // TEM MUITO MAIS coisas importantes dessa Função !!
    // --------------------------------------