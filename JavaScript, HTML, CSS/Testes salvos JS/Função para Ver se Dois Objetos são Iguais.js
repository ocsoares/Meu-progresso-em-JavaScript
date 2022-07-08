function makeAdress(street, cep, type, numberHome){
    return {
        street,
        cep,
        type,
        numberHome
    }
}

    // Consegue ver o Objeto da Função acima!
function ifAreEquals(adress, otherAdress){

    if(adress.street === otherAdress.street && adress.cep === otherAdress.cep 
        && adress.type === otherAdress.type && adress.numberHome === otherAdress.numberHome){
        console.log('IGUAIS!!');
    }
    else{
        console.log('DIFERENTES !');
    }
}

    // Modificar as Propriedades para ver o Resultado (Igual ou Diferente)
const firstAdress = makeAdress('a', 1, 'b', 2);
const secondAdress = makeAdress('a', 1, 'b', 2);

ifAreEquals(firstAdress, secondAdress);