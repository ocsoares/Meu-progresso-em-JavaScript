const os = require('os'); // Importando Biblioteca necessária <<

const { arch, platform, totalmem, freemem, hostname, cpus } = os; // Desestruturando funções da Biblioteca 'os' !!

const [{ model: myModel }] = cpus(); // Desestruturei Apenas o meu Sistema do Retorno (Objeto) da Função cpus() !!

setInterval(() => { // Repete todo esse código a cada, nesse caso, 1000 Segundos !!
    console.clear();

    const trataTotalRAM = totalmem() / 1024 / 1024; // Transformando de Bytes para Megabytes
    const trataFreeRAM = freemem() / 1024 / 1024;
    const usedRAM = (trataFreeRAM / trataTotalRAM) * 100;

    const infoOS = {
        My_Model: myModel,
        Host: hostname(),
        OS: platform(),
        Arch: arch(),
        Total_RAM: `${parseInt(trataTotalRAM)} MB`, // Transforma um Número em um INTEIRO (usei Math.floor e também deu certo !)
        Free_RAM: `${parseInt(trataFreeRAM)} MB`,
        Used_RAM: `${usedRAM} %`
    };
    console.table(infoOS); // console.table = Imprime em TABELA !
}, 1000); // Tempo especificado para Repetir o código (no caso, 1000) !!!