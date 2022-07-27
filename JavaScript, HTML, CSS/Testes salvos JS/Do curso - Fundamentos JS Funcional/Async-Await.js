    // Async/Await = Aguarda uma Promise ser Resolvida para DEPOIS Executar algo !! << 

    // Sem Async/Await !! <<
    const returnNumber = (number, otherNumber, time) =>{
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Imprimindo os números...')
                resolve([number, otherNumber])
    
            }, time);
        })
    }
    
    // returnNumber(11,23, 300)
    //     .then(console.log)
        
    //     .then( () => console.log('\nSegundo .then ...'))
    //     .then( () => returnNumber(20,102, 900))
    //     .then(console.log)
    
    //     .then( () => console.log('\nTerceiro e ultimo .then ...'))
    //     .then( () => returnNumber(10,203, 1200))
    //     .then(console.log)
    
        // Fazendo o mesmo que ACIMA mas Com Async/Await !! <<
    const showsAsync = time =>{
        return new Promise(resolve => {
            setTimeout( () => resolve('>> Resolvendo Async... <<\n'), time);
        })
    }
    
    const asyncReturnNumber = async () => { // NÃO esquecer do async !! <<
        const getShowsAsync = await showsAsync(200); // Como está com await e esse Valor é passado para a Promise abaixo como Retorno, pri-
                                                      // -meiro vai Resolver ESSA Promise, e a Próxima que estiver Chamando !! <<<
    
        await returnNumber(403, 201, 300)
                    .then(any => `${getShowsAsync}` + any) // Por algum motivo, TIRA os Números do Array !! <<
                    .then(console.log)
    
                    .then( () => console.log('\nSegunda Promise...'))
                    .then( () => returnNumber(20,34, 3000))
                    .then(any => `${getShowsAsync}` + any)
                    .then(console.log)
    
                    .then( () => console.log('\nÚltimo .then ...'));
    
        await returnNumber(80, 551, 1500) // Também pode ser feito OUTRO await !! <<
                    .then(any => `${getShowsAsync}` + any)
                    .then(console.log) 
    
                    // return = resolve !! 
                    // Se caso houver algum return no final, para Chamar ele abaixo basta colocar um .then(console.log), no caso, em asyncReturnNumber() !! <<
    }
    
    asyncReturnNumber()