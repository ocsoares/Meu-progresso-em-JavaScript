const minAndMaxFunction = (min, max) =>{
    if(min > max){
        [max, min] = [min, max] // Vai INVERTER os Números, Desestruturando e atribuindo o MÍNIMO no MÁXIMO, e vice-versa !!
    }

    return new Promise(resolve => {
        const formula = max - min + 1
        const randomNumbers = parseInt(Math.random() * formula) + min // Gera números Aleatórios !! <<
        resolve(randomNumbers)
    })
}

minAndMaxFunction(10,11) // Retorna, nesse caso, um Número, óbivo...
    .then(num => num + 2) // Pega o Retorno do de Cima e, nesse caso, Soma +2 !! <<
    .then(num => num + 20)
    .then(num => num - 1)
    .then(finalNum => `O número resultante foi: ${finalNum}`)
    .then(console.log);