// Apertar numa Linha, + ALT e apertar em Outra = Seleciona essa(s) linha(s) e ALTERA ao MESMO Tempo !! 

const readlineSync = require('readline-sync');

function ifAreEqual(number, otherNumber) {
    let result, resultEqual, resultBigger, resultLess;

    result = number + otherNumber;

    if (number === otherNumber) {
        resultEqual = 'são iguais';
    }

    else {
        resultEqual = 'não são iguais';
    }

    if (number + otherNumber > 10) {
        resultBigger = 'maior que 10';
    }

    else {
        resultBigger = 'menor que 10';
    }

    if (number + otherNumber < 20) {
        resultLess = 'menor que 20';
    }

    else {
        resultLess = 'maior que 20';
    }

    console.log(`Os numeros ${number} e ${otherNumber} ${resultEqual}. Sua soma é ${result}, que é ${resultBigger} e ${resultLess}`);
}

ifAreEqual(12, 7);