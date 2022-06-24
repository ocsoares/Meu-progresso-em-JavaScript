// Strings

    // Tipos de String <<<<<<< !!

    // Tipo Primitivo   - Mais utilizado <<<<<<<
const primitiveString = '"Tipo primitivo !"'; // Óbvio que as Aspas Duplas DENTRO da String já com ' ' Conta como caracter
console.log(primitiveString);
console.log(typeof (primitiveString));
console.log('\n');                              // OS DOIS Tipos de Strings podem ser usados como Objeto ! (objeto.AlgumaFunção)
// ------------------------------------

// Tipo Objeto <<<<<<<<<
const objectString = new String('Tipo objeto !');
console.log(objectString);
console.log(typeof (objectString));

console.log('\n');
// ------------------------------------

// Verificando a String em Determinada Posição <<<<<<<<<
console.log('O sexto caracter na string:', primitiveString, 'é:', primitiveString[6]);
// ------------------------------------

// Algumas Funções Mais utilizadas em String <<<<<<<<<<<<<<<<<
// A MAIORIA Também Pode ser usada em Números, Arrays, etc... <<

// ------------------------------------
// .lenght = Verifica o tamanho 
console.log('O tamanho da string:', primitiveString, 'é:', primitiveString.length);
// ------------------------------------

// ------------------------------------
// .includes = Verifica se Determinado Valor existe na Variável - Variável.includes(algo para Verificar);
// Retorna true ou false !!
console.log(primitiveString.includes('primitivo')); // No caso de Strings, compara Caracter com Caracter (pq se passar primi dá TRUE !!)
// ------------------------------------

// ------------------------------------
// .startsWith = Verifica se Determinado Valor COMEÇA com o Valor Especificado ! - Variável.startsWith(algo para Verificar);
// Retorna true ou false !!
console.log(primitiveString.startsWith('arroz'));
// ------------------------------------

// ------------------------------------
// .endsWith = Verifica se Determinado Valor TERMINA com o Valor Especificado ! - Variável.endsWith(algo para Verificar);
// Retorna true ou false !!
console.log(primitiveString.endsWith('primitivo !"'));
// ------------------------------------

// ------------------------------------
// .indexOf = Verifica em qual Posição (index) Determinado Valor COMEÇA no Valor Especificado - Variável.indexOf(algo para Verificar);
// Em caso de ERRO, retorna -1 (Pelo o que eu vi)
console.log(primitiveString.indexOf('Tipo')); // Nesse caso, a palavra Tipo nessa String começa A PARTIR do 1 Caracter (0, 1, 2...) !!!
// ------------------------------------

// ------------------------------------
// .replace = Troca um Determinado Valor por Outro - Variável.replace(Valor EXISTENTE, Novo Valor);
// Pelo o que eu vi, se o Valor for Repetido MAIS de uma Vez, Troca apenas a Primeira Aparição !
// Pelo o que eu vi também, quando o Valor informado NÃO Existe, ele retorna o Valor original.
console.log(primitiveString.replace('Tipo', 'teste boy'));
// ------------------------------------

// ------------------------------------
// .trim = Retira os espaços excedentes (no COMEÇO ou no FINAL) em uma String - Variável.trim();
console.log(primitiveString.trim());
// ------------------------------------

// ------------------------------------
// .split = Separa Determinado Valor quando encontra o Valor Informado - Váriavel.split(Valor Informado);
console.log(primitiveString.split('i')); // Nesse caso, Separa Sempre que encontrar o Caracter i
// ------------------------------------