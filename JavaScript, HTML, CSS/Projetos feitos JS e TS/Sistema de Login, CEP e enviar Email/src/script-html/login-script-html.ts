const loginEmail = document.getElementById('login-email') as HTMLInputElement;
const loginPassword = document.getElementById('login-password') as HTMLInputElement;

console.log('TESTE loginEmail:', loginEmail);

loginEmail.addEventListener('keypress', anykey => {
    console.log('Imprimindo o EMAIL !!');
})

loginPassword.addEventListener('keypress', anykey => {
    console.log('Imprimindo a SENHA !!');
})