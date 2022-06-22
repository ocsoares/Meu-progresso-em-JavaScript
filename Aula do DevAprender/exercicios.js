function aplicaMulta(number){
    let contador = 0;

    if(number === 70){
        console.log('No limite da Velocidade! Desacelere...');
    }

        // A cada 5 km, mais um Ponto é aplicado ! (por isso do / 5 !)
    else if(number > 70){
        console.log('Multado !');
        const pontos = Math.floor((number - 70) / 5); // Pega a quantidade de Pontos com essa divisão (Math.floor para arredondar para Baixo !)

        if(pontos > 8){
            console.log('Limite estourado !!! Carteira suspensa.');
        }
        console.log('TESTE:', pontos);
    }

    else{
        console.log('Abaixo do limite ! Se quiser, acelere.');
    }
}

let velocidade = 115;;
aplicaMulta(velocidade);