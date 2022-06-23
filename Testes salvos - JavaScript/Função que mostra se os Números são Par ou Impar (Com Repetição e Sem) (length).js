function numeroParOuImpar(number){

    let i;

    for(i = 0; i<number.length; i++){ // Para descobrir o Tamanho do Array

    if(number[i] % 2 === 0){
        console.log('O numero informado é par!');
    }

    else{
        console.log('O numero informado é impar!');
    }

    }
}

function numeroParImparFor(max){
    let i;
    
    for(i = 0; i<=max; i++){
        if(i % 2 == 0){
            console.log('O número', i, 'é PAR !');
        }

        else{
            console.log('O número', i, 'é IMPAR !');
        }
    }
}

const num = [10, 12, 11, 15];
numeroParOuImpar(num);
console.log('\n');

const number = 10;
numeroParImparFor(number);