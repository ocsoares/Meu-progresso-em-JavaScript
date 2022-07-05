    // Comando para NÃO ter que ficar compilando de .ts para .js Manualmente = tsc nomedoArquivo.tsc -w (w = watch)
    // depois disso, Rodar o .js normalmente com o Node !!

export {} // Usar isso para não bugar as Variáveis (que estavam sendo salvas globalmente e bugando)

const toSeeNumber = (number:number) => console.log(number);

toSeeNumber(2);