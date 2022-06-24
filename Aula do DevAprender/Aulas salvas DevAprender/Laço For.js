// For
let numbers = [1,2,3,4,5,6,13,21,20];
let contadorPar = 0, contadorImpar = 0;
let i;

for(i = 0; i<3; i++){
    console.log("Testando o laço de repetição For !!");
}

for(i = 0; i<9; i++){
    if(numbers[i] % 2 === 0){
        console.log('O numero', numbers[i], 'é par!');
        contadorPar++;
    }

    else{
        console.log('O numero', numbers[i], 'é impar!');
        contadorImpar++;
    }
}

console.log('Foram detectados', contadorPar, 'numeros pares !');
console.log('Foram detectados', contadorImpar, 'números impares!');