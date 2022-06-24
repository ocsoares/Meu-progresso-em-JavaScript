// Natureza Dinâmica de Objetos

    // Um Objeto pode ser Alterado facilmente em JavaScript, permitindo que <<<<<<<<<
    // Adicione ou Delete Propriedades de um Objeto !!! <<<<

    // Exemplo:
const food = {
    name: 'Lasanha',
    price: 24.90,
    validity: '22/07/2022'
}

console.log(food);

    //Adicionando e Deletando Objetos <<<<<<<<<<<<<
food.anyName = 'arroz'; // ADICIONADO <<
food.newFunction = function () {
    console.log('teste');
}
console.log(food);

delete food.anyName; // DELETADO <<
delete food.newFunction;
console.log(food);