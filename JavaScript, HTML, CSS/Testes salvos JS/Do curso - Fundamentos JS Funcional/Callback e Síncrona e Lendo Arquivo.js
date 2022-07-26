// Callback = Passa uma Função como Parâmetro para OUTRA Função, e DEPOIS essa Função é Chamada de Volta !! <<

import fs from 'fs'
import path from 'path';

// const executar = (anyFunction, num, otherNum) => anyFunction(num, otherNum);

// const returnSum = (num, otherNum) => console.log(num + otherNum);

// executar(returnSum, 10, 20);

// const anyFunction = (num, otherNumber) => num + otherNumber;

// setInterval(() => {
//     let a = 1;
//     console.log(anyFunction(a,20));
//     a++;
// }, 900);

    // DEPOIS VOLTAR O ARQUIVO arquivo-callback.txt PARA Do curso - Fund...
    // path.join = Arruma o Caminho de um Arquivo, já colocando as / e outros Corretamente...
const __dirname = path.resolve();

const directory = path.join(__dirname, 'arquivo-callback.txt');
console.log('Diretório:', directory);

    // Quando NÃO for usar um Parâmetro, exemplo esse error abaixo, Pode Substituir por _  !!
const showsContent = (error, content) => console.log(content.toString());

    // Lendo um Arquivo
    //  OBS: Diretório, Opções no objeto, Callback
    //  OBS: Pode tirar, se quiser, o {} !!
console.log('Iniciando...');
fs.readFile(directory, {}, showsContent);
console.log('Terminando...');
console.log('\n');

    // A execução Síncrona AGUARDA ser Executado Todo um Código e DEPOIS continua...
console.log('Iniciando Sync...');
const teste =  fs.readFileSync(directory, showsContent);
console.log(teste.toString());
console.log('Terminando Sync...')
console.log('\n');