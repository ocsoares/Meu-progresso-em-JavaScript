// Currying = Função que Recebe Múltiplas Funções com UM Parâmetro CADA !! <<

// IMPORTANTE: O this funciona DIFERENTE com Arrows do que com Function normal !! <<

const sumFunctionWithArrow = num => {
    return otherNum =>{
        return anotherNum =>{
            return num + otherNum + anotherNum
        }
    }
}

const returnSumWithArrow = sumFunctionWithArrow(10)(2)(3);
console.log('Currying COM Arrow:', returnSumWithArrow);
console.log('\n');

const sumFunction = num => {
    return function (otherNum){
        return function (anotherNum){
            return num + otherNum + anotherNum
        }
    }
}

const returnSum = sumFunction(10)(2)(3); // Cada Função em UM () SEPARADO !!
console.log('Currying SEM Arrow:', returnSum);
console.log('\n');

const nameFunction = name => {
    return function saldo(number) {
        return 'O saldo de ' + name + ' é: ' + number;
    }
}

    // Nas duas Opções, óbvio, Também pode Usar as Funções de Forma Independente !! <<
const sumOnlyNumAndOtherNum = sumFunction(2)(6);
console.log('Somando APENAS num e otherNum:', sumOnlyNumAndOtherNum(0)); // TEM que passar o ÚLTIMO () aqui para SOMAR junto !! <<
console.log('\n');

const finalNameWithSaldo = nameFunction('Maria');
console.log(finalNameWithSaldo(824.12));
console.log('\n');

    // Função que Recebe uma FUNÇÃO (passada mais abaixo) e Calcula !! <<
// APENAS com Arrow !! <<
const calculateWithArrow = num => { // Recebe um Número
    return otherNum => { // Recebe OUTRO Número
        return calculateFunction => { // Recebe uma FUNÇÃO de Alguma Operação para Calcular !! <<
            return calculateFunction(num, otherNum); // Apenas retorna Depois da Função calcular !
        }
    }
}
    // MAIS Moderno !! <<<<
const calculateWithArrowOneLine = num => otherNum => calculateFunction => calculateFunction(num, otherNum);

const calculate = num =>{
    return function(otherNum){
        return function(calculateFunction){
            return calculateFunction(num , otherNum);
        }
    }
}



const calculateSum = (num, otherNum) => num + otherNum; // NÃO precisa ser o MESMO Nome dos Parâmetros acima, óbvio... <<
const calculateSubtract = (num, otherNum) => num - otherNum;

const subtract = calculateWithArrow(20)(4)(calculateSubtract); // Sem () Porque a Função foi Atribuída a uma Variável, óbvio !! <<
console.log(subtract);
console.log('\n');

const multiply = (num, otherNum) => num * otherNum;
console.log(calculateWithArrowOneLine(2)(3)(multiply));
console.log('\n');

const sum = calculate(2)(10)(calculateSum);
console.log(sum);