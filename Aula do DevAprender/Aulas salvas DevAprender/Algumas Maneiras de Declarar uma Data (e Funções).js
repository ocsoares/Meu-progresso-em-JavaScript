// Algumas maneiras de Declarar uma Data (tem Outras também !) <<<<<

    // Usar new Date(); <<<<<<
    // Pelo o que eu vi, se a Data for Inválida ele Retorna Invalid Date !!!

// ---------------------------------
    // Mostra a Data Atual <<<<<<<
const primeiraData = new Date();
console.log(primeiraData);
// ---------------------------------

// ---------------------------------
// Define a Data a ser Mostrada (Passar em String !!) <<<<<<
const segundaData = new Date('September 10 2009 18:32') // Mês + Dia + Ano + Horário (ex. 16:40)
console.log(segundaData);
// ---------------------------------

// ---------------------------------
// Outra forma de Definir a Data a ser Mostrada (em números !!) <<<<<<<
const terceiraData = new Date(2005, 01, 23, 15, 51) // Ano + Mês + Dia + Horas + Minuto (o MÊS conta a partir do 0,  0 = Janeiro, 1 = Fevereiro, etc...)
console.log(terceiraData);

console.log('\n');
// ---------------------------------

// Funcionalidades (Métodos) para Date !! <<<<<<<< !!!

// ---------------------------------
//  Altera o ANO de uma Data (Mesmo sendo const !!!) - Variável da Data.setFullYear(ano);
terceiraData.setFullYear(2050);
console.log('Alterando:', terceiraData);
// ---------------------------------

// ---------------------------------
// Converte uma Data para String - Variável da Data.toDateString();
console.log(terceiraData.toDateString());
// ---------------------------------

// ---------------------------------
// Mostra o Padrão de Horário Atual (no caso do Brasil, Horário de Brasília) - Variável da Data.toTimeString();
console.log(terceiraData.toTimeString());
// ---------------------------------

// ---------------------------------
// Mostra como a Data é Informada no Banco de Dados - Variável da Data.toISOString();
console.log(segundaData.toISOString());
// ---------------------------------