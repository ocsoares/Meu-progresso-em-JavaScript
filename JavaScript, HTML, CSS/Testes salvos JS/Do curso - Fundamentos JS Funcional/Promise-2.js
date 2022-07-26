// const waitFunction = time => Promise(function(resolve){ // Tentar colocar uma Arrow Function <<<
//     setTimeout( () => resolve{
//         resolve()
//     } )
// })

        // ASSÍNCRONO !! <<
const waitFunction = time => new Promise(resolve => { // NÃO esquecer do new !! <<
    setTimeout(() => {
        console.log('Executando a promise, aguarde...');
        resolve('Promise concluída ! Status = true') // o .then vai ser Chamado !! <<
    }, time);
})

// waitFunction(3000).then(console.log); // Para acessar o Conteúdo DENTRO do resolve(), PRECISA passar o .then e Imprimir !! <<
// console.log('\n');

    // Promise Chamando OUTRA Promise !! <<
waitFunction(3000) // Tempo usado para Esperar no setTimeout...
    .then(console.log)

    .then(() => waitFunction(3000)) // Usar () => Função da Promise !!
    .then(console.log) // Imprimir em seguida o Conteúdo (SE TIVER, claro...)

    .then(() => waitFunction(7000))
    .then(console.log);