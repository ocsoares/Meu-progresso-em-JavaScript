import axios from "axios";

// IMPORTANTE: Coloquei o <script> no FINAL do Arquivo .html porque no Topo NÃO estava Lendo !! << 
//  OBS: OU usar no Topo e colocar defer no final do script, porque ai Espera Carregar o HTML Primeiro << !!

// IMPORTANTE: Coloquei type="button" no Botão de Enviar (html) APENAS para NÃO atualizar a Página Automaticamente, DEPOIS que Arrumar to-
// -do o Script, voltar para "submit" !! << 

// Por algum motivo, quando NÃO encontra o CEP retorna ERRO no Console !! <<

// Para acessar as Promise {<pending>}, USAR o await ou o .then(...)  !! <<

const sendInputButton = document.getElementById('send');
const getCEPID = document.getElementById('cep') as HTMLInputElement; // COLOCAR isso para Permitir o uso de .value e afins !! <<

const stringElement = document.getElementById('register') as HTMLElement;

const runAxios = () => {
    const getCEPValue = getCEPID.value
    console.log(getCEPValue);

    const url = `https://viacep.com.br/ws/${getCEPValue}/json`;
    console.log(url)

    axios.get(url)
        .then(res => {
            const { ...getAllData } = res.data // Pegando TUDO do res.data nessa ...Variável <<<
            console.log('Testando do axios:', getAllData);   
            
            const checkErrorAPI = getAllData.hasOwnProperty('erro') // NESSE CASO, se o CEP for Inválido, retorna um Objeto com Erro, então essa Função Verifica se TEM essa Propriedade !! <<
            console.log('checkErrorAPI:', checkErrorAPI);

            const { bairro, cep, ddd } = getAllData
            
            if(checkErrorAPI) return stringElement.innerHTML = '<h3>Dados incorretos !</h3>'       
            
            stringElement.innerHTML = '<h3>Registrado !</h3>'
            
            console.log('Teste LEWA:', bairro, cep, ddd);
        })
        .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
}


// DEU CERTO, MAS Arrumar esses Códigos  !!! 
const pressEnter = () =>  getCEPID?.addEventListener('keypress', anykey => {
    if(anykey.key === 'Enter'){
        runAxios()
    }
})

const clickButton = () => sendInputButton?.addEventListener('click', clicked => {
    runAxios();
})

pressEnter()
clickButton()

// const cep = 11608545;

// const url = `https://viacep.com.br/ws/${cep}/json`;

// const getCPF = () =>{
//     axios.get(url)
//         .then(res => {
//             console.log(res)
//         })
//         .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
// }

// getCPF()