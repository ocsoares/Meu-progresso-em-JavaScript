// Template Literal 
// Usado para manter as Strings Formatadas de Acordo com as LINHAS (Mantém Quebra de Linhas, Parágrafos, etc...)
// Utilizar ( `string...` ) <<<<<<<< !!!

    //Exemplo

    // Obviamente, podia ser const <<<<
let texto = `Escrevendo uma linha
        qualquer para ver
                a String funcionando
            !`

console.log(texto);

console.log('\n');
// ------------------------------------------

// Adicionando algo Dentro desse Tipo de String <<<<<<<<<
// Utilizar ${Váriavel, Operação Matemática, Função, etc...} <<<<<

const adicionandoTexto = 'Caiu na rede é peixe';
const numeroTexto = 1821;

texto = `Escrevendo uma linha >TEXTO ADICIONADO: ${adicionandoTexto}<
        qualquer para ver
            >NUMERO ADICIONADO: ${numeroTexto}<    a String funcionando
            !       ${10 + 2}`
// Permito usar Outras funcionalidades também, como por exemplo, Funções.

console.log(texto);