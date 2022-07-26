    // Promise = Promessa de algo que vai ser Retornado no FUTURO !! <<
    // OBS: Promise é uma Function !! <<
    console.log('Typeof de Promise:', typeof(Promise));
    console.log('\n');
    
                                // Função a ser Chamada quando quiser CUMPRIR a Promise !! <<
                                //  OBS: Por convenção, é Comum usar o Nome dessa Função de resolve !! <<<
                                //  OBS: Só pode Receber UM Valor, se quiser Receber mais, passar um OBJETO !! <<
    const createPromise = new Promise( // NÃO esquecer do new !! <<
        resolve => resolve('Retornando minha Promise !'), {
    });
    console.log('Promise criada:', createPromise);
    
        // Retornando a Promise Criada quando o Valor passado for Cumprido !! <<
        //  OBS: .then Recebe uma Função com o MESMO Valor da Promise NO PARÂMETRO !!
    createPromise.then(valuePromise => console.log('Retorno real:', valuePromise));
    console.log('\n');
    
    const createdPromiseWithObject = new Promise( (resolve => resolve({
        name: 'Maria Clara',
        age: 22,
        height: 1.93
    })));
    console.log('Promise criada com Objeto:', createdPromiseWithObject);
                                                                                    // Passar o Elemento do Objeto a ser Acessado !! <<
    createdPromiseWithObject.then(valuePromise => console.log('Retorno real com Objeto:', valuePromise.age, '\n'));
    
        // Promise com Vários .then e Função !!
        //  OBS: A Modificação feita em um .then PASSA para o Próximo !!
        // Usando o createdPromiseWithObject !! <<
    
    const anyFunction = string => string.name;
    const lowerCaseFunction = char => char + '\n' + char.toLowerCase(); // O valor do Parâmetro INICIALMENTE é o Valor do .then ACIMA !! <<<
    const returnHeight = prop => prop + '\n' + prop[0];
    const returnFinal = prop => prop +  '\nFinal dos .then !';
    
    const otherCreatedPromiseWithObject = new Promise( (resolve => resolve({
        name: 'Maria Clara',
        age: 22,
        height: 1.93
    }))).then(anyFunction) // TAMBÉM PODE fazer assim DIRETO !! <<
        .then(lowerCaseFunction)
        .then(returnHeight)
        .then(returnFinal)
        .then(console.log) // Pelo oq eu entendi, SÓ PODE Imprimir no FINAL dos .then !!! <<<<<<< // OBS: SEM os () !! <<<<
                            // OBS: any => console.log(any) É A MESMA coisa que: APENAS .then(console.log) !! <<<