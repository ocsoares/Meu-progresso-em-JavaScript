// Switch Case

let opcao = 2; // 2, 3;

console.log('1 - Entrar\n2 - Resetar email\n3 - Resetar Senha\n');

switch(opcao){
    case 1:
    console.log('Voce logou com sucesso!');
    break;
    
    case 2:
    console.log('Voce solicitou para resetar o email, faça os passos fornecidos.');
    break

    case 3:
    console.log('Voce solicitiou para resetar sua senha, cheque o email cadastrado e siga os passos.');
    break;

    default:
    console.log('Selecione uma opcao correta !');
}