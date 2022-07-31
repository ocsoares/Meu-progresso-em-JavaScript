import axios from "axios";

// IMPORTANTE: Coloquei o <script> no FINAL do Arquivo .html porque no Topo NÃO estava Lendo !! << 
//  OBS: OU usar no Topo e colocar defer no final do script, porque ai Espera Carregar o HTML Primeiro << !!

// IMPORTANTE: Coloquei type="button" no Botão de Enviar (html) APENAS para NÃO atualizar a Página Automaticamente, DEPOIS que Arrumar to-
// -do o Script, voltar para "submit" !! << 

const searchCEP = () => {
    return console.log('teste...')
}

const sendInputButton = document.getElementById('send');
const getCEPID = document.getElementById('cep') as HTMLInputElement; // COLOCAR isso para Permitir o uso de .value e afins !! <<

sendInputButton?.addEventListener('click', clicked => {
    const getCEPValue = getCEPID.value
    console.log(getCEPValue);
})

document.getElementById('cep')?.addEventListener('keypress', anykey => {
    if(anykey.key === 'Enter'){
        searchCEP()
    }
})

const cep = 11608545;

const url = `https://viacep.com.br/ws/${cep}/json`;

const getCPF = () =>{
    axios.get(url)
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
}
console.log('Ultimo');
getCPF()