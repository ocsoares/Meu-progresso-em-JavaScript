let num = 10, num2 = 7;
let numeroMaior;

function maiorNumero(a, b){
    if(a > b){
        console.log('O número', a, 'é maior que o número', b);
        let result = a;
        return result;
    }

    else{
        console.log('O número', b, 'é maior que o número', a);
        let result = b;
        return result;
    }
}

maiorNumero(num, num2);
numeroMaior = maiorNumero(num, num2);

console.log('Maior número salvo na Váriavel:', numeroMaior);