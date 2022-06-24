// For In (ESSE EH NOVO PRA MIM !!)
// Busca Informações Dentro de um Objeto !
// NÃO Altera !!

const footballPlayer = {
    fName: 'Lewandowski',
    fAge: 34,
    fHeight: 1.82
};

    // Variavel key usada como Índice !   // Nesse caso, ele vai imprimir TODOS as Propriedades (Variáveis) dentro do Objeto ! <<<<<<<<<
for (let key in footballPlayer) { // for(Variável do índice in Objeto)
    console.log(key); // Imprimindo as Propriedades
}
// -------------------------------------------

console.log('\n');

    // Quando NÃO Sabe o Nome da Propriedade ! (ex. Arrays !!) <<<<<<<
for (let key in footballPlayer) {
    console.log(key, footballPlayer['fAge']); // Nesse caso, ele vai mostrar o conteúdo da Propriedade Fornecida em TODAS as Outras !!
    // em caso de + de Uma Propriedade passada, vai retornar a ÚLTIMA ! (ex. ['fAge', 'fName']  , Retona fName !!!)  
}
// -------------------------------------------

console.log('\n');

    // Quando SABE o Nome da Propriedade !    <<<<<<<
for (let key in footballPlayer) {
    console.log(key, footballPlayer.fName); // Mesma coisa que o de cima, MAS usando . depois do Nome do Objeto !
}
// -------------------------------------------

console.log('\n');

    // Provando que NÃO Altera !! <<<<<<<
console.log(footballPlayer.fName)
console.log(footballPlayer.fAge);
console.log(footballPlayer.fHeight);

console.log('\n');

for (let key in footballPlayer) {
    console.log(key, footballPlayer[key]); // (Índice, Nome do Objeto[Índice])  // Dessa Maneira, mostra as Propriedades Seguidas do Conteú-
    // -do Respectivo de cada uma !!
}