    // Erro SEM Função !! <<<
    //  OBS: Para Ler os Erros (uncaught) no Console do Node.js, usar no Console node--trace-uncaught + Nome do Arquivo !!!! <<<

    try { // Tenta Executar esse Bloco de comandos, se der algum Erro, vai para o catch !! 
        const notString = true;
        const yesString = 'banana';
    
        if (typeof (notString) !== 'string') throw 'Digite uma String ! Erro detectado.'; // throw = Se cair na Condição, LANÇA uma Exceção (no caso, uma mensage) !! (throw = lançar)
    
        console.log('É uma String ! Sem erros detectados.'); // Se Não cair no Erro, Executa isso <<
    }
        // O nome da Variável Podia ser Qualquer nome, mas usam Mais error OU err !!!
    catch (error) { // Pega o Erro do throw e faz alguma coisa
        console.log(error); // Imprime o Erro lançado pelo throw
    
        //throw error; <<<<< ACHO QUE esse é o jeito certo de usar, porque se usar console.log ele IMPRIME uma STRING !!
    }
    
    finally { // O finally vai executar Algo INDEPENDENTE se Tiver Erros ou Não (Usar isso é OPCIONAL !!!! <<)
        console.log('Testando o finnaly');
    }
    
        console.log('\n');
    // ----------------------------------------
    
    // Pelo o que eu vi, NÃO funciona com Arrow Function !
    // const LowerNumber = message => {
    //     this.message = message;
    //     this.name = 'LowerNumber';
    // }
    
    // ----------------------------------------
        // Como criar uma Função COM Erro Personalizado !! (usar .this !!!)
        //  OBS: Também Funciona com Função Anônima !!
    function LowerNumber(message) {
        this.message = message;
        this.name = 'LowerNumber';
    }
    
    try {
        const lowerNumber = 11;
        const highNumber = 13;
    
        if (lowerNumber < 12) throw new LowerNumber('Número MENOR que 12!'); // new = Cria um NOVO Tipo de Erro !! (no caso, LowerNumber)
    
        console.log('Número MAIOR que 12!')
    }
    catch (error) {
        console.log('Tipo do Erro CRIADO:', error.name);
        console.log('Mensagem do Erro CRIADO:', error.message);
        // throw error.message; <<<<< ACHO QUE esse é o jeito certo de usar, porque se usar console.log ele IMPRIME uma STRING !!
    }
    
        console.log('\n');
    // ----------------------------------------
    
        // Também tem dessa Maneira com o new (ACHO QUE é a CORRETA para não lançar Strings) !!! <<<<<<<<<<
    
    try {
        const LowerNumber = new Error('Número MENOR que 20 !!');
        LowerNumber.name = "LowerNumber"; // Nome do Erro !!
    
        const otherLowerNumber = 15;
        const otherHighNumer = 21;
    
        if (otherLowerNumber < 20) throw LowerNumber;
    
        console.log('Número MAIOR que 20 !');
    }
        // throw error porque o Erro Personalizado foi lançado para o catch, que Armazenou em error !
    catch (error) {
        throw error; // Imprime o Erro INTEIRO (com o Nome do Erro e a Mensagem !!)
        // throw error.name // Imprime APENAS o Nome do Erro !!!
        // throw error.message // Imprime APENAS a Mensagem do Erro !!!
    }