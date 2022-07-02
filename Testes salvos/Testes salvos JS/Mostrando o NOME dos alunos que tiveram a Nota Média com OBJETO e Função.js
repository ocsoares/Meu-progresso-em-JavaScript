const averageSchoolStudents = (arrayGrades, finalAverage) => {
    let i;
    let arrayApprovedStudents = [];

    for(i = 0; i<arrayGrades.length; i++){
        let {nome, nota} = arrayGrades[i]; // Desestrutura do Objeto, e como está no Looping, as Variáveis Recebem, respectivamente, o retorno do Objeto na Posição i !!!

        if(nota >= finalAverage){
            arrayApprovedStudents.push(nome); // Se a Nota (Desestruturada) for >= que a Nota Especificada, armazena o NOME (Desestruturado) no Array arrayApprovedStudents !!! 
        }

    }
        return arrayApprovedStudents;
};

const grades = [ // [] porque é um ARRAY !
    {
        nome: 'Pedro',
        serie: '3º ano',
        nota: 8.7,
    },
    {
        nome: 'Maria',
        serie: '8º ano',
        nota: 3.1,
    },
    {
        nome: 'Carlos',
        serie: '9º ano',
        nota: 7.2,
    },
    {
        nome: 'Hugo',
        serie: '7º ano',
        nota: 5.9,
    },
];

console.log(averageSchoolStudents(grades, 6));
console.log('Mostrando que é Objeto:', typeof(averageSchoolStudents(grades, 6)));
console.log('\n');

    // Transformando o Retorno em Strings !
let getName = averageSchoolStudents(grades, 6);
getName = getName.toString();
getName = getName.replaceAll(',', ', '); // diferente do .replace que substitiu APENAS a PRIMEIRA Ocorrência, o .replaceAll substitui TODAS !!

console.log('Convertido em String:',getName);
console.log('Mostrando que foi convertido para String:', typeof(getName));