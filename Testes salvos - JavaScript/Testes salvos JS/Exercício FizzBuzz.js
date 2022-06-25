// A Função Retorna um valor Diferente dependendo da Condição da Variável

function FizzBuzz(number){
    if(typeof(number) !== 'number'){
        return 'Não é um número!';
    }

    if(number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz';
    }

    if(number % 3 === 0){
        return 'Fizz';
    }

    if(number % 5 === 0){
        return 'Buzz';
    }

    if(number % 3 !== 0 && number % 5 !== 0){
        return number;
    }
}

let anyNumber = 12;
console.log(FizzBuzz(anyNumber));