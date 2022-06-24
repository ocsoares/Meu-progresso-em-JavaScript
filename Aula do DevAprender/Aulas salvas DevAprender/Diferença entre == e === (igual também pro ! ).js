// Diferença entre == e === 

    // Em JavaScript sempre usar TRÊS Iguais para Comparar ! ( === ) (isso também se aplica pro DIFERENTE ( !== ) ) <<<<<
let num = 5, numDois = '5';

    // Nesse caso retorna TRUE !!!  <<<<<<<
console.log(num, 'é igual ( == ) a', numDois, '?', num == numDois); // Apenas Dois Iguais compara o Valor independente do Tipo da Variavel (se é int, string...), se o re-
                             // -sultado for Igual, mas em Outro Tipo, ele CONVERTE para esse Tipo e Compara !!!

    // Nesse caso, óbvio, retorna FALSE ! (nesse caso, se fosse Apenas 5 (em número) iria Retornar True !) <<<<<<<<
console.log(num, 'é igual ( === ) a', numDois,'?', num === numDois); // Três Iguais compara o Valor DO MESMO Tipo !

console.log(num, 'é diferente ( != ) de', numDois, '?', num != numDois); // Retorna True, óbvio, porque é o MESMO caso do == 
console.log(num, 'é diferente ( !== ) de', numDois, '?', num !== numDois); // MAIS Utilizado também !!

console.log('\n');
// -------------------------