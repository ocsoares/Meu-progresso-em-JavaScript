const fullDate = new Date() // Data COMPLETA !! <<
console.log(fullDate);

const dataBrasil = fullDate.toLocaleString('pt-BR'); // ('pt-BR', {opções...}) - Pode também ver também especificidade dessa Data !! <<
console.log('Data Completa no Padrão Brasileiro:', dataBrasil);
console.log('\n');

const onlyYear = fullDate.getFullYear(); // Usa a Variável com a Data INTEIRA para Acessar os Métodos !! <<
console.log('Apenas o Ano:', onlyYear);
console.log('\n');

const onlyMonth = fullDate.getMonth(); // Começa contando pelo ZERO (igual Array) !! << // OBS: Se quiser, pode usar um Array com os Nomes dos Meses !
console.log('Apenas o Mês:', onlyMonth + 1); // Somando +1 porque começa pelo Zero... 
console.log('\n');

const onlyMonthDay = fullDate.getDate();
console.log('Apenas o Dia do Mês:', onlyMonthDay);
console.log('\n');

//const onlyWeeksDay = fullDate.getDay(); // Dia da SEMANA, MAS em Números (de 0 até 6, como se fosse Array) !! <<
const arrayWeeksDay = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const convertWeeksDayToString = arrayWeeksDay[fullDate.getDay()]; // Array dos Dias da Semana (string) + [Função Data que pega os Dia das Semana] ( OBS: EM [] !! ) !! <<
console.log('Apenas o Dia da SEMANA:', convertWeeksDayToString);
console.log('\n');

const onlyHour = fullDate.getHours();
console.log('Apenas a Hora:', onlyHour);
console.log('\n');

const onlyMinutes = fullDate.getMinutes();
console.log('Apenas os Minutos:', onlyMinutes);
console.log('\n');

const onlySeconds = fullDate.getSeconds();
console.log('Apenas os Segundos:', onlySeconds);
console.log('\n');

const onlyMilliseconds = fullDate.getMilliseconds();
console.log('Apenas os milisegundos:', onlyMilliseconds);
console.log('\n');

const fullDateInMilliSeconds = fullDate.getTime();
console.log('Data Completa MAS em Milisegundos:', fullDateInMilliSeconds);
console.log('\n');

    // COMPARANDO Datas (nesse caso, usei um Exemplo de Contas para Pagar ) !! <<
const currentDay = new Date();
const expirationDate = new Date(2024, 6, 30); // Ano + Mês (número como se fosse Array) + Dia !! <<

console.log('Criando OUTRA Data Atual:', currentDay);
console.log('Data usada como Expiração:', expirationDate);

if(currentDay > expirationDate){
    console.log('Você ultrapassou a data de expiração do Cartão de Crédito !');
}
else{
    console.log('Você ainda pode pagar o seu Cartão de Crédito !');
}
console.log('\n');

    // Diferença entre uma Data e Outra (usando as Datas ACIMA) !!
    //  OBS: A maneira correta é Comparar entre MILISEGUNDOS (.getTime) e Depois Converter para Dias (usando Matemática) !! << 
const timeDifference = expirationDate.getTime() - currentDay.getTime() // Óbvio que tem que ser a Data Diferente - Atual !! <<
const convertTimeDifferenceToDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000)); // Horas * Minutos * Segundos * Milisegundos
console.log('Diferença entre Datas:', convertTimeDifferenceToDays);