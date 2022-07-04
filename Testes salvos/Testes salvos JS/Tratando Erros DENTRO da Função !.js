/*
function blabla*(numero, tamanho){
    if(!numero && !tamanho) = ISSO SERVE para Ver SE os Parâmetros Existem !! (nesse caso, o if serve Se NÃO Existirem (por causa do !) )
}
*/

    // Try e Catch DENTRO da Função, porque, óbvio, vai Validar Dentro dela !!
    const arrayTreatment = (array, sizeArray) => {
        try {
            if (!array && !sizeArray) throw new ReferenceError('Parâmetros incorretos !');
            else if (!array || !sizeArray) throw new ReferenceError('Parâmetros incorretos!');
    
            if (typeof (array) !== 'object') throw new TypeError('Array inválido!');
            if (typeof (sizeArray) !== 'number') throw new TypeError('Tamanho inválido!');
    
            if (array.length !== sizeArray || sizeArray !== array.length) throw new RangeError('Array imcompatível com o tamanho !');
    
            return array; // Caso o Array seja válido (NÃO entre em Nenhum desses Erros), retorna o array !!
        }
        catch (error) {
            if (error instanceof ReferenceError) { // instanceof = Confere se o Retorno veio do Local Determinado !!
                console.log('Erro do tipo ReferenceError !');
                throw error; // NÃO Esquecer de Mostrar o Erro !!!
            }
    
            else if (error instanceof TypeError) {
                console.log('Erro do tipo TypeError !');
                throw error;
            }
    
            else if (error instanceof RangeError) {
                console.log('Erro do tipo RangeError !');
                throw error;
            }
    
            else {
                console.log('Erro inesperado !');
                throw error;
            }
        }
    };
    
    const newArray = [2, 10, 8, 54, 29];
    
    console.log(arrayTreatment(newArray, 5));