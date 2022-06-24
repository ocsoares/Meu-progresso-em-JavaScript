// If, else if, else

let saldoBancario = 250.00;

if(saldoBancario === 700){
    console.log('Saldo no limite! Não gaste mais.');
} // NÃO Precisa utilizar ; no Final dos Colchetes nos If'

else if(saldoBancario > 100 && saldoBancario < 400){
    console.log('Limite distante.\nUtilize seus créditos á vontade.');
}

else if(saldoBancario < 100){
    console.log('Crédito insuficiente!\nDeposite mais.');
}

else{
    console.log('Limite atingido!!');
}

console.log('\n');
// ------------------------------------