    // Exemplo de como Ficaria uma Função com Arrow Function !!
    //  OBS: Arrow Function são SEMPRE Funções Anônimas (dentro de uma Variável)
    //  OBS: Arrow Function NÃO faz Hoisting !! <<<
    //  OBS: O .this em Arrow Function funciona de Forma DIFERENTE !!

    // Normal
    const hello = function(){
        return 'Olá mundo !';
    }
    
        // Com Arrow Function, MAS COM Retorno !!  
        // () Vazio para mostrar que NÃO tem Parâmetro (nesse caso, apenas Retorna uma String) !!
    const arrowHello = () =>{
        return 'Olá mundo com Arrow Function !';
    }
    
        // Quando a Arrow Function é Muito PEQUENA e só tem UMA Linha, NÃO precisa do Return E NEM DAS CHAVES {} ! !!
        //  OBS: USAR as Chaves {} quando a Arrow Function tiver MAIS de UMA Instrução !!
        //  OBS: Ao usar as Chaves {} na Arrow Function, PRECISA usar o return !!!!
    
    const notReturnArrowHello = () => 'Olá mundo com Arrow Function SEM Retorno ! ';
    
    console.log('Sem parenteses () !! :', hello) // PASSAR os () na Função Anônima, se não Retorna outro Valor !!
    console.log('\n');
    
    console.log(hello());
    console.log(arrowHello());
    console.log(notReturnArrowHello());
    
    console.log('\n');
    // ----------------------------------------------------------
    
    // ----------------------------------------------------------
        // Arrow Function com UM Parâmetro !
        // Quando é Apenas UM Parâmetro, NÃO precisa dos (), Apenas o Parâmetro direto !!
    const returnSomething = something => something;
    console.log(returnSomething('Retornando algo COM Arrow Function com 1 Parâmetro !!'));
    
    console.log('\n');
    // ----------------------------------------------------------
    
    // ----------------------------------------------------------
        // Arrow Function com DOIS Parâmetros !   - obviamente Podia ser mais, mas Usando () !!
    const arrowMultiplication = (number, otherNumber) => number * otherNumber;
    console.log('Multiplicação COM Arrow Function:', arrowMultiplication(2,6));
    
        // A MESMA Função com DOIS Parâmetros, mas feita sem Arrow Function !
    function onlyMultiplication(number, otherNumber){
        return number * otherNumber;
    }
    console.log('Multiplicação SEM Arrow Function:', onlyMultiplication(2,6));
    
    console.log('\n');
    // ----------------------------------------------------------
    
    // ----------------------------------------------------------
        // Arrow Function COM CHAVES !!! <<
        // Para 1 Parâmetro, obviamente, passaria sem (), da Mesma forma...
    const biggerOrLess = (number, otherNumber) => {
        if(number + otherNumber > 20) return `${number + otherNumber} é MAIOR que 20 !`;
    
        return `${number + otherNumber} NÃO é maior que 20 !`;
    }; // NÃO Esquecer de Fechar com ;   !!!
    
    console.log('Arrow Function COM Chaves:', biggerOrLess(10,10));
    
    console.log('\n');
    // ----------------------------------------------------------
    
    // ----------------------------------------------------------
        // Arrow Function com Objeto !!
    const person = {
        name: 'Maria',
        age: 21,
        country: 'Brasil'
    };
    
        // Passando o Conteúdo de uma Propriedade de um Objeto JÁ CRIADO !!
    const getInfoPerson  = () => person.name;
    console.log('Conteúdo de um Objeto JÁ Criado:',getInfoPerson());
    
        // Passando um NOVO Objeto
        // Nesse caso, precisa passar o Objeto com {} DENTRO dos ()  !!!
        // Também pode, se preferir, retornar o Objeto dentro do {} COM return !!! (nesse caso, óbvio, NÃO precisaria dos () !! )
    const newInfoPerson = () => ({otherName: 'Pedro'});
    console.log('Passando um NOVO Objeto:',newInfoPerson());
    // ----------------------------------------------------------