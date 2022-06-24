// Factory Functions = Funções de Fábrica 

    // Usado para Criar uma Função do Mesmo Tipo sempre que Precisar e <<<<<<<
    // evitar repetição !! <
    // declarar o nome de uma Factory Function usando camelCase (ex. umDoisTresQuatro) !!! <

function makeStudent(name, age, id, discipline) {
    const student = {
        // return {   // Também pode ser feito assim porque já retorna o Objeto sem precisar Retornar na Última Linha da Função

        name: name,
        age: age,
        id: id,
        discipline: discipline

        // Quando a Variavel no Objeto da Função Recebe o Conteúdo de uma Variável com o MESMO Nome, pode se colocar Apenas uma vez
        // o nome dessa Variavel (ex. Variável name do Objeto Recebe name, que tem o Mesmo Nome mas é PARÂMETRO da Função !)

        // EXEMPLO:

        // name,
        // age,
        // id,
        // discipline

    }

    return student; // Se fosse feito igual Comentado na Segunda Linha da Função, NÃO precisaria desse return !!
}

// Retornando as Informações da Factory Function para uma Váriavel <<<<<<<
const doneStudent = makeStudent('Henrique Silva', 23, 9458, 'Matemática');
// outra variável.. outra variável... etc...

console.log(doneStudent);

for (let key in doneStudent) { // Printando o Conteúdo da Váriavel <<<<<<
    console.log(doneStudent[key]);
}