const minAndMaxFunction = (min, max, time) =>{
    if(min > max){
        [max, min] = [min, max] // Vai INVERTER os Números, Desestruturando e atribuindo o MÍNIMO no MÁXIMO, e vice-versa !!
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const formula = max - min + 1
            const randomNumbers = parseInt(Math.random() * formula) + min // Gera números Aleatórios !! <<
            resolve(randomNumbers)
        }, time);
    })
}
    // Retornando APENAS uma Promise...
// minAndMaxFunction(10,11, 600).then(console.log);

const returnVariousPromises = () => {
    return Promise.all([ // Promise.all + Array + Funções das Promises !! <<
        minAndMaxFunction(10, 40, 200),
        minAndMaxFunction(30, 60, 1000),
        minAndMaxFunction(23, 85, 400),
        minAndMaxFunction(15, 31, 302),
        minAndMaxFunction(87, 102, 3000),
    ])
}

returnVariousPromises().then(console.log) // Por último, Imprimir o ARRAY de Promises feitos !! <<