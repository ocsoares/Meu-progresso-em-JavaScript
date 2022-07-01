    // Apertar numa Linha, + ALT e apertar em Outra = Seleciona essa(s) linha(s) e ALTERA ao MESMO Tempo !! 

    const readlineSync = require('readline-sync');

    function jsCalculator(){
        let resultado, stringOperator;
        let number, otherNumber;
    
        number = Number(readlineSync.question('Digite um numero:\n'));
        otherNumber = Number(readlineSync.question('Digite outro numero:\n'));
    
        const getOperator = readlineSync.question('Digite uma operação para fazer com os numeros digitados:\n(+) = Soma  (-) = Subtracao\
        (*) = Multiplicacao  (/) = Divisao\n\n');
    
        switch(getOperator){
            case '+':
            stringOperator = 'soma';
            resultado = number + otherNumber;
            break;
    
            case '-':
            stringOperator = 'subtração';
            resultado = number - otherNumber;
            break;
    
            case '*':
            stringOperator = 'multiplicação';
            resultado = number * otherNumber;
            break;
    
            case '/':
            stringOperator = 'divisão';
            resultado = number / otherNumber;
            break;
        }
    
        console.log(`O resultado da ${stringOperator} é ${resultado} !`);
        console.log('O TIPO DE RESULTADO É:',typeof(resultado));
    
        return resultado; // Pelo o que eu vi, como a Variável resultado RECEBE duas Váriaveis CONVERTIDAS em Números, ela Também se converte
                          // em número !!
    }
    
    jsCalculator();
    
    // console.log('O RETORNO É:', jsCalculator());  - Retorna a Variável result, óbvio
    