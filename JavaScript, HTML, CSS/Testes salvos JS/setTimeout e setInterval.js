    // setTimeout(function, seconds) - Executa uma Função APENAS UMA VEZ APÓS ESPERAR um Tempo especificado !! <<
    const stopTimeoutFunction = nameFunction => { // clearTimeout = NÃO executa o setTimeout !! <<
        clearTimeout(nameFunction);
        console.log('Não são permitidos número(s) menor que 0 !');
    }
    
    const setTimeoutFunction = (number, otherNumber, time) => {
        
        const realStopTimeout = setTimeout(() => {
            console.log('setTimeout:', number + otherNumber);
        }, time)
    
        // Passar o clearTimeout DEPOIS do setTimeout !! <<<
        if(number < 0 || otherNumber < 0){ // INTERROMPE o setTimeout se Algum dos números forem Negativos !
            return stopTimeoutFunction(realStopTimeout); // Variável que RECEBE o setTimeout !!
        }
    }
    
    setTimeoutFunction(10,40, 3000);
    
        // setInterval(function, seconds) - REPETE a MESMA Função após Tempo especificado !! <<
    const stopIntervalFunction = nameFunction => {
        clearInterval(nameFunction);
        console.log('Não são permitido número(s) maior que 100 !')
    }
    
    const setIntervalFunction = (number, otherNumber, time) => {
        const realStopInterval =  setInterval(() =>{
            console.log('setInterval:', number, otherNumber);
            number++
            otherNumber++
        }, time);
    
        if(number > 100 || otherNumber > 100){
            return stopIntervalFunction(realStopInterval);
        }
    }
    
    setIntervalFunction(20,90, 500);