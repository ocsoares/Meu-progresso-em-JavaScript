// Currying = Função que Recebe Múltiplas Funções com UM Parâmetro CADA !! <<

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