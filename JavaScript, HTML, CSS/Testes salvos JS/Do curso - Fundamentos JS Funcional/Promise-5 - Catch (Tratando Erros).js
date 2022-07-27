const minAndMaxFunction = (min, max, time) =>{
    
    return new Promise((resolve, reject) => { // Usar o >reject< para REJEITAR uma Promise !! <<
        if(min > max){
            reject('Não é permitido o Valor MÍNIMO ser Maior que o MÁXIMO !!') // Se quiser, Também poderia usar Error('string...')
        }
        setTimeout(() => {
            const formula = max - min + 1
            const randomNumbers = parseInt(Math.random() * formula) + min // Gera números Aleatórios !! <<
            resolve(randomNumbers)
        }, time);
    })
}

minAndMaxFunction(200,172, 3000)
    .then(console.log)
    .catch(error => console.log(`Error: ${error}`)) // Tratar o Erro com .catch POR ÚLTIMO, depois dos .then !!