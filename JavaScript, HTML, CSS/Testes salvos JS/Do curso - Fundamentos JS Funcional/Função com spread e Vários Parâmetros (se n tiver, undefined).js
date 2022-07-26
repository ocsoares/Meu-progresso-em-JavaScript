const variousNumbersFunctionWithSpread = (...numbers) => { // Coloca TODOS os Elementos passados no ...spread como ARRAY !! <<
    const array = []

    array.push(numbers)
    
    return array;
}

const variousNumbersFunction = (num, numDois, numTres) => {
    if (num === undefined && numDois === undefined && numTres === undefined) {
        return console.log('Passe um Parâmetro !');
    }

    if (numDois === undefined && numTres === undefined) {
        const array = []
        for (let i = 0; i <= num; i++) {
            array.push(i);
        }
        return array;
        //return console.log('numDois e numTres undefined.');
    }

    if (numTres === undefined && num !== undefined && numDois !== undefined) {
        if (num > numDois) {
            while (num > numDois) {
                console.log(num)
                num -= numDois
            }
        }

        else {
            let i;
            const array = [];

            for (i = num; i <= numDois; i++) {
                array.push(i);
            }
            return array;

            //return console.log('Apenas o Terceiro undefined.');

        }

    }

    // Se os Três NÃO forem undefined
    //if(numDois <0)

    if (num < numDois) {
        const array = [];

        while (num < numDois) {
            num = num + numTres
            array.push(num);
        }
        return array;
    }

    if(num > numDois){
        const array = []

        while(num > numDois){
            num = num - numTres
            array.push(num);
        }
        return array;
    }

    //console.log('Os Três NÃO são Undefined !!');
}

console.log(variousNumbersFunction(10, -2, 4));

console.log('\n');

console.log(variousNumbersFunctionWithSpread(1,2,3,10,99));