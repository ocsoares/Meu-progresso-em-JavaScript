function makeMaxMinPrice(alert, max, min){
    return {
        alert,
        max,
        min
    }
}

let myPrice = [
    makeMaxMinPrice('Primeiro preço', 100, 90),
    makeMaxMinPrice('Segundo preço', 80, 50),
    makeMaxMinPrice('Terceiro preço', 50, 25)
];

    // Para Array é for of, e para Array Objeto também é !!
    for(let key of myPrice){
        console.log(key);
    }

console.log('\n');


    //EXEMPLO de Array Objeto pronto !!
    // Cada {} é um Objeto DIFERENTE ! Logo, as Propriedades NÃO são as mesmas, porque é Diferente em cada Objeto !!
let price = [ // Não esquecer de abrir e fechar [] !
    {alertUm: 'a', min: 1, max: 2},
    {alertDois: 'b', min: 2, max: 3},
    {alertTres: 'c', min: 3, max: 4}
]; // Não esquecer de fechar com ; 

for(let key of price){
    console.log(key);
}