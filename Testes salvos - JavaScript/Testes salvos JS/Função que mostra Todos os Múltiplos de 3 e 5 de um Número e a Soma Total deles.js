let number = 13;

somaMultiplos(number);

function somaMultiplos(max){
    let i;
        
    let multiplosTres = 0;
    let multiplosCinco = 0;
    let totalMultiplos = 0;

    for(i = 1; i<= max; i++){ // i = 1 para Não Dividir o número 0 !
        

        if(i % 3 === 0){
            console.log('O número', i, 'é divisível por 3!');
            multiplosTres += i;
        }

        if(i % 5 === 0){
            console.log('O número', i, 'é divisível por 5!');
            multiplosCinco += i;
        }
    }

        totalMultiplos = multiplosTres + multiplosCinco;
        console.log('A soma de todos os múltiplos foi:', totalMultiplos);

        return totalMultiplos;
}