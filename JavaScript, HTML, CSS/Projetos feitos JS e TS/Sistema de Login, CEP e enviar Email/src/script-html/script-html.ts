import axios from "axios";

// IMPORTANTE: Coloquei o <script> no FINAL do Arquivo .html porque no Topo NÃO estava Lendo !! << 
//  OBS: OU usar no Topo e colocar defer no final do script, porque ai Espera Carregar o HTML Primeiro << !!

// IMPORTANTE: Coloquei type="button" no Botão de Enviar (html) APENAS para NÃO atualizar a Página Automaticamente, DEPOIS que Arrumar to-
// -do o Script, voltar para "submit" !! << 

// Por algum motivo, quando NÃO encontra o CEP retorna ERRO no Console !! <<

// Para acessar as Promise {<pending>}, USAR o await ou o .then(...)  !! <<

const sendInputButton = document.getElementById('send');
const getCEP = document.getElementById('cep') as HTMLInputElement; // COLOCAR isso para Permitir o uso de .value e afins (InputElement pq é um Input, óbvio...) !! <<
const stringElement = document.getElementById('register') as HTMLElement;
const getCPF = document.getElementById('cpf') as HTMLInputElement;

const verificationsCPF = getCPF.addEventListener('keypress', () => {
    const lengthCPF = getCPF.value.length + 1
    console.log(lengthCPF);

    if(lengthCPF === 4 || lengthCPF === 8){
         getCPF.value += '.'
    }

    else if(lengthCPF === 12){
        getCPF.value += '-'
    }

    console.log(getCPF.value)
    console.log(typeof(getCPF));
})

    // Axios
const runAxios = () => {
    const getCEPValue = getCEP.value
    console.log(getCEPValue);

    const url = `https://viacep.com.br/ws/${getCEPValue}/json`;
    console.log(url)

    axios.get(url)
        .then(res => {
            const { ...getAllData } = res.data // Pegando TUDO do res.data nessa ...Variável <<<
            console.log('Testando do axios:', getAllData);   
            
            const checkErrorAPI = getAllData.hasOwnProperty('erro') // NESSE CASO, se o CEP for Inválido, retorna um Objeto com Erro, então essa Função Verifica se TEM essa Propriedade !! <<

            const { bairro, cep, ddd } = getAllData
            
            if(checkErrorAPI) return stringElement.innerHTML = '<h3>Dados incorretos !</h3>' // ACHO que NÃO precisa disso, por vou Manipular o HTML !! <<  
            
            stringElement.innerHTML = '<h3>Registrado !</h3>' // ACHO que NÃO precisa disso, por vou Manipular o HTML !! <<
            
            console.log('Retorno SEM Objeto:', bairro, cep, ddd);
        })
        .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
}

const pressEnter = () =>  getCEP?.addEventListener('keypress', anykey => {
    if(anykey.key === 'Enter'){
        anykey.preventDefault(); // Adicionei isso porque um Input Focado quando RECEBE Enter ou Espaço ACIONA um Clique AUTOMATICAMENTE, e Com essa Função isso é Impedido !! <<
        runAxios();
    }
})

const clickButton = () => sendInputButton?.addEventListener('click', clicked => {
    runAxios();
})

    // Chamando essas Funções
pressEnter()
clickButton()