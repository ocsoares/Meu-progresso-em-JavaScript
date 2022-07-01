    //Função com Vários Parâmetros = Rest
    function parameterRest(...rest) {
        let result = 0;
    
        for (i = 0; i < rest.length; i++) {
            result += rest[i];
        }
    
        return result;
    }
    
    console.log('Resultado do parameterRest:', parameterRest(10, 2, 2)); // Passando vários Números...
    
    console.log('\n');
    // ------------------------------------------
        
        // TRANSFORMANDO em Array !!
    function transformArray(...any){
        return any;
    }
    
    const newArray = transformArray(10,23,12,'arroz',84,102); // Passando vários Elementos...
    console.log('Resultado do transformArray:', newArray);
    console.log(typeof(newArray));
    console.log('Tamanho:', newArray.length,'\n');
    
    console.log('\n');
    // --------------------------------------------
    
    function manyArraysToString(...any){
        return any.join(', '); // Sem o .join (que Separa o Array com o Elemento informado), as Strings iriam Retornar em um ARRAY !!
    }
    
    const newStrings = manyArraysToString('feijao', 'mandioca', 'carne assada'); // Podia ser mais, vários...
    console.log('Resultado do manyArraysToString:', newStrings);
    console.log(typeof(newStrings)); // Provando que é do tipo String !!