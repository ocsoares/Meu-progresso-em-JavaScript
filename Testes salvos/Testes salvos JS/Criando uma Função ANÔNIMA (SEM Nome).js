const ifAreEqual = function(number, otherNumber){ // A Função, nesse caso, NÃO vai receber um Nome, pois o Nome dela 
    if(number === otherNumber) return 'are equals';    // vai ser o Nome da Variável (ifAreEqual, no caso) !!

    return 'not are equals';
}

console.log(ifAreEqual(12,12));
console.log(ifAreEqual(13,12));