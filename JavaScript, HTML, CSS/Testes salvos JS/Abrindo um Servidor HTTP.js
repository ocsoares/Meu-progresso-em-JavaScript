const http = require('http'); // Biblioteca necessária <<

const host = 'http://localhost'; // Servidor aberto no localhost
const port = 3000; // Na porta 3000

    // res.write = Escreve algo, Mas no exemplo abaixo, fica Carregando a Página eternamente.
    // res.end = Executa algo E já Finaliza !
http.createServer((req, res) => { // res = resposta
    res.end('<h1>Funcionando </h1>'); // ENTRE '...'   !!
}).listen(port, () => console.log(`O servidor está funcionando! Acesse: ${host}:${port}`));