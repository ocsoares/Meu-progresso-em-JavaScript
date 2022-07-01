    // São Funções que são Passadas como Argumento para OUTRAS Funções 

    const algumCalculo = function (anyFunction, number, otherNumber){
        return anyFunction(number,otherNumber);
    }
    
    const somar = function (number, otherNumber){
        return number + otherNumber;
    }
    
    const subtracao = function(number, otherNumber){
        return number - otherNumber;
    }
    
    const calculaSoma = algumCalculo(somar, 10, 20);
    console.log(calculaSoma);
    
    const calculaSubtracao = algumCalculo(subtracao, 20, 5);
    console.log(calculaSubtracao);