const car = {
    model: 'Civic',
    year: 2004,
    madeIn: 'China'
}

const any = [12, 'Messi', 301, 'Pogba', 'Neymar', 10, 9];

showType(car);
console.log('\n');
showTypeArray(any);

function showType(object){ // Função para o Objeto (no caso, car)

    for(let key in object){
        if(typeof(object[key]) === 'string'){ // No Objeto se Passa o Objeto + Índice !! (no caso, object[key])   // (for in)
            console.log('String encontrada:', object[key]);
        }

        // else{
        //     console.log('Numeros encontrados:', object[key]);
        // }
    }
}

function showTypeArray(object){ // Função para a Array (no caso, any)

    for(let key of object){
        if(typeof(key) === 'number'){ // No Array se Passa APENAS o Índice !! (no caso, key)  // (for of)
            console.log('Número encontrado:', key);
        }

        // else{
        //     console.log('Strings encontradas:', key);
        // }
    }
}