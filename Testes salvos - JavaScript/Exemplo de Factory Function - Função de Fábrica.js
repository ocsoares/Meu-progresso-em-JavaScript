    // Retornando as Informações da Factory Function para uma Váriavel
const doneStudent = makeStudent('Bernado Silva', 21, 9346, 'História'); // Primeiro aluno feito
const otherStudent = makeStudent('Pedro Silva', 19, 6712, 'Filosofia'); // Segundo aluno feito...

console.log(doneStudent);
console.log(otherStudent);

console.log('\n');

let key;
for(key in doneStudent){ // Printando o Conteúdo do Primeiro aluno
    console.log(doneStudent[key]);
}

console.log('\n');

for(key in otherStudent){ // Printando o Conteúdo do Segundo aluno
    console.log(otherStudent[key]);
}

    // declarar o nome de uma Factory Function usando camelCase (ex. umDoisTresQuatro) !!!  
function makeStudent(name, age, id, discipline){
    const student = {
    // return {  // Também podia ser feito assim, e NÃO precisaria Retornar embaixo, porque assim ele Retorna Diretamente !!

        name, // Nesse caso, Mesma coisa que name: name, (Primeiro name da Função, Segundo name do Parâmetro !!)
        age,
        id,
        discipline

    }
    
    return student;
}