// Clonando Objetos <<<<<<<<<

const objetoOriginal = {
    esporte: 'Futebol',
    objetivo: 'Gol',
    tempo: 90
}
console.log(objetoOriginal);

const objetoClonado = Object.assign({}, objetoOriginal); // Novo Objeto = Objetct.assign({}, Objeto a ser Clonado)
console.log(objetoClonado);
console.log('\n');

    // Clonando MAS Adicionando Algo no Objeto  - DENTRO dos {} !!! <<<<<<<<
const objetoClonadoAdicionado = Object.assign({
    player: 'Messi',
    player2: 'Cristiano Ronaldo'
}, objetoOriginal);

console.log(objetoClonadoAdicionado);

console.log('\n');

    // MAIS FÁCIL !! <<<<<<
    // Outro Método (Spread = {...Objeto a ser clonado} <<<<<<<<
const spreadClone = {...objetoOriginal};
console.log(spreadClone);