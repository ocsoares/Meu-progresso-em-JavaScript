// Constructor Functions - Funções de Construtor

    // Ao contrário do Factory Function, o Constructor Function NÃO Retorna nada, o Objeto tem que ser Criado !! <<<<<<<<<
    // Declarar o nome de uma Constructor Function usando PascalCase (ex. CincoSeisSeteOito) !!!  <<<

function MakeOtherStudent(otherName, otherAge, otherId, otherDiscipline) { // também podia ser o Mesmo Nome das Váriaveis 
    this.name = otherName; // this = Usado para indicar que está USANDO o Objeto Referenciado (nesse caso, está usando o name)
    this.age = otherAge;
    this.id = otherId;
    this.discipline = otherDiscipline;

    // SEM RETORNO !!
}

// Criando um Novo Objeto a partir das Informações da Constructor Function <<<<<<<<<
const otherStudent = new MakeOtherStudent('Gabriel Feitosa', 28, 5481, 'Geografia'); // new = Cria o Objeto de acordo com os Parâmetros

console.log(otherStudent); // Printando o Objeto <<<<

console.log('\n');

for (key in otherStudent) {
    console.log(otherStudent[key]);
}