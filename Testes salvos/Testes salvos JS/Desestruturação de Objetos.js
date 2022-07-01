    // Desestruturação de Objetos 

    const user = {
        id: 312,
        nick: 'zPedrin',
        fullName: {
            firstName: 'Pedro',
            lastName: 'Carvalho'
        },
        country: 'Brasil'
    };
    
    // ----------------------------------------------------
        // Extraindo APENAS uma Propriedade
    function userCountry({country}){ // Propriedade a Pegar entre {}
        return country;
    }
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Extraindo MAIS de Uma Propriedade
    function userId({id, nick}){ // Propriedades a serem pegas entre {}
        return [id, nick]; // Retornar entre [], porque vão ser Alocadas em um Array !!
    }
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Extraindo um Objeto DENTRO de um Objeto
        //{outroObjeto: {Propriedade dele, Propriedade dele...}}
    function userFullName({fullName: {firstName,lastName}}){
        return [firstName, lastName];
    }
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Extraindo um Objeto DENTRO de um Objeto em VARIÁVEIS !!
        // {outroObjeto: {Propriedade dele: Parâmetro da Variável, Propriedade dele: Parâmetro da Variável...}}
        //  OBS: Os Parâmetros da Variável vão Receber o CONTEÚDO da Propriedade do Outro Objeto !!!
    function otherUserFullName({fullName: {firstName: primeiroNome, lastName: segundoNome}}){
        return `${primeiroNome} ${segundoNome}` // Nesse caso, como é o Nome Completo, irei Retornar as Variáveis JUNTAS !!
    }
    // ----------------------------------------------------
    
        //            ------------------      //
    
    // ----------------------------------------------------
        // Colocando na Variável e Imprimindo o Retorno APENAS de uma Propriedade !
    const getCountry = userCountry(user); // Como Parâmetro é o Nome do Objeto !
    console.log('getCountry:',getCountry);
    
    console.log('\n');
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Colocando na Variável (entre []) e Imprimindo o Retorno de MAIS de Uma Propriedade !!
        //  OBS: Colocar entre [variável...] Desestrutura o Array !!
    const [getId, getNick] = userId(user); // Cada Retorno em uma Variável, respectivamente <<
    console.log('getId:', getId);
    console.log('getNick:',getNick);
    
    console.log('\n');
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Colocando na Variável e Imprimindo o Retorno do Objeto DENTRO de um Objeto
        // Nesse caso, as Duas Strings estão SEPARADAS !
    const [getFirstName, getLastName] = userFullName(user);
    console.log('getFirtsName:', getFirstName);
    console.log('getLastName:', getLastName);
    
    console.log('\n');
    // ----------------------------------------------------
    
    // ----------------------------------------------------
        // Colocando na Variável e Imprimindo o Retorno do Objeto DENTRO de um Objeto com VARIÁVEIS !!
    const realFullName = otherUserFullName(user);
    console.log('realFullName:', realFullName);// Nesse caso, como é o Nome Completo, retornei as Variáveis JUNTAS !!