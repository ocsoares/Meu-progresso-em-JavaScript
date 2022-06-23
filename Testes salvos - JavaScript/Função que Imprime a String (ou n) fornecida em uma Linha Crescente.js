let string = '*';
// let string = 10;
// let string = true;

somaCharacter(string, 5);

function somaCharacter(anyValue,maxLinhas){

    let characterPadrao = ' '; // String Vazia !
    let i;

    for(i = 0; i<maxLinhas; i++){
        characterPadrao += anyValue; // Joga o Valor fornecido para dentro da String Vazia e vai Somando de acordo com as linhas máximas !!!
                                      // Como joga o Valor fornecido para dentro de uma String Vazia, não importa o Tipo fornecido, sem-
                                      // -pre vai ser "convertido" para String !      
        console.log(characterPadrao);
    }
}