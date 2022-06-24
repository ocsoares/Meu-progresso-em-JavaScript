// forEach em Arrays <<<<<< 

// Pode ser usado no lugar do for of << !!
// Fácil para Mostrar o Conteúdo da Array + o Índice de Cada Um <<<<< !!!!!!

const forEachArray = ['macarrão', 12, 'Gustavo', 1.82, 137];
console.log('Array:',forEachArray);
console.log('\n');

    // Mostrando o Conteúdo da Array + Índice da Cada Um (com Arrow Function)
forEachArray.forEach((array, index) => console.log(array, index));