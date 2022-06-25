const notas = [8,5,7,3,6.5];
calculaMedia(notas);

function calculaMedia(array){

    const tamanhoDaArray = array.length; // Fiz isso para sempre Dividir de acordo com o Total de números Informados (ex. 3 números, div. 3)

    let i;
    let somaTotal = 0;
    let mediaTotal = 0;

    for(i = 0; i<tamanhoDaArray; i++){
        somaTotal += array[i];
    }

        mediaTotal = somaTotal / tamanhoDaArray;
        console.log('A media total de suas', tamanhoDaArray, 'notas foi de', mediaTotal);

        if(mediaTotal >= 4.5 && mediaTotal <= 5){
                    console.log('Voce esta de recuperação!');
                }

        else if(mediaTotal < 5){
            console.log('Voce esta reprovado!');
        }

        else if(mediaTotal > 5){
            console.log('Voce esta aprovado!');
        }

        /* Também podia fazer assim

        if(mediaTotal >= 4.5 && mediaTotal <= 5) return algo...
        else if(mediaTotal < 5) return algo...

        */
        
        return mediaTotal;
}