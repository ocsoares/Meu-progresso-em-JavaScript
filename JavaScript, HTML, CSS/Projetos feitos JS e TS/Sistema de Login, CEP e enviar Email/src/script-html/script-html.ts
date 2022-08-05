import axios from "axios";

// IMPORTANTE: Coloquei o <script> no FINAL do Arquivo .html porque no Topo NÃO estava Lendo !! << 
//  OBS: OU usar no Topo e colocar defer no final do script, porque ai Espera Carregar o HTML Primeiro << !!

// IMPORTANTE: Coloquei type="button" no Botão de Enviar (html) APENAS para NÃO atualizar a Página Automaticamente, DEPOIS que Arrumar to-
// -do o Script, voltar para "submit" !! << 

// Por algum motivo, quando NÃO encontra o CEP retorna ERRO no Console !! <<

// Para acessar as Promise {<pending>}, USAR o await ou o .then(...)  !! <<

// IMPORTANTE: Depois que Terminar, arrumar um jeito de Separar algumas Funções em Módulos !! <<

const sendInputButton = document.getElementById('send') as HTMLInputElement; // COLOCAR isso para Permitir o uso de .value e afins (InputElement pq é um Input, óbvio...) !! <<
const getUsername = document.getElementById('username') as HTMLInputElement;
const getEmail = document.getElementById('email') as HTMLInputElement;
const getCPF = document.getElementById('cpf') as HTMLInputElement;
const getCEP = document.getElementById('cep') as HTMLInputElement;
const getPassword = document.getElementById('password') as HTMLInputElement;
const getConfirmationPassword = document.getElementById('password-confirmation') as HTMLInputElement;
const getForm = document.getElementById('form') as HTMLInputElement;

// FAZER O BOTÃO de Send DESAPARECER quando os Input's NÃO estiverem TOTALMENTE Corretos !! <<<<

const stringElement = document.getElementById('register') as HTMLElement;

const blockSubmitAction = () => sendInputButton.addEventListener('click', clicked => {
    clicked.preventDefault();
})

const setSuccessHTML = (input: any, message?: string) => {
    const formInput = input.parentElement // Pega a Classe PAI (HTML) do Input Especificado !! <<

        // Adicionando a Classe de Success !! << 
    formInput.className = 'form-input success'
}

const setErrorHTML = (input: any, message: string) => {
    const formInput = input.parentElement
    const getSmall = formInput.querySelector('small') // Usei querySelector aqui porque o small NÃO TEM ID e porque eu quis Selecionar TODOS os small Dentro da Classe Pai !! <<

    // Adicionando a Mensagem de Erro !! <<
    getSmall.innerText = message

    formInput.className = 'form-input error'
}

// Verifica se o Email é Válido com esse Regex !! <<
    //  OBS: Se for VÁLIDO, Retorna TRUE !! <<
    const regexEmail = (email: string) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      }

const checkInputs = () => {
    const usernameValue = getUsername.value
    const emailValue = getEmail.value
    const CPFValue = getCPF.value
    const CEPValue = getCEP.value
    const passwordValue = getPassword.value
    const confirmationPasswordValue = getConfirmationPassword.value

    
    getUsername.addEventListener('keypress', anykey => {
        // O usernameValue.lenght NÃO FUNCIONA porque ele é const, ÓBVIO !!!! <<

        console.log('Não funciona:', usernameValue.length);

        let teste = getUsername.value.length;
        console.log('Provando que funciona:', teste);
        
        
    })

    console.log('TAMANHO EMAIL:', emailValue.length);
    console.log('email:', emailValue);

    if(!regexEmail(emailValue)){
        setErrorHTML(getEmail, 'Inválido !');
        console.log(usernameValue);
    }
    else{
        setSuccessHTML(getEmail);
    }

    // if(emailValue === ''){
    //     setErrorHTML(getEmail, 'Não é permitido um email vazio !');
    // }
    // else if(!regexEmail(emailValue)){
    //     setErrorHTML(getEmail, 'Email inválido !');
    // }
    // else{
    //     setSuccessHTML(emailValue);
    // }

    // if(!emailValue){
    //     setSuccessHTML(getEmail);
    // }

    // if(!CEPValue){
    //     setSuccessHTML(getCEP);
    // }

    // if(!passwordValue){
    //     setSuccessHTML(getPassword);
    // }

    // if(!confirmationPasswordValue){
    //     setSuccessHTML(getConfirmationPassword);
    // }
}
        // Isso aqui faz alguma coisa Quando TODOS as Classes estiverem em uma Condição especificada, MAS por algum Motivo NÃO DEU CERTO !!
        // O getAllFormInput Funciona, como pode ver no console.log, mas o Resto NÃO !! <<

    // const getAllFormInput: any = getForm.querySelectorAll('.form-input');    
    // console.log('Testando getall:', getAllFormInput);

    // const checkForm = [...getAllFormInput].every((formInput) => {
    //     return (formInput.className === 'form-input success');
    // })

    // console.log('Teste checkForm:', checkForm);

    // if(checkForm){
    //     console.log('teste...');
    // }
    


    checkInputs();

    // Fiz outra Função porque na do CPF Principal estava OUTRO evento, que se fosse utilizado ESSE, bugaria TUDO !! <<
const backspaceGetCPF = () => getCPF.addEventListener('keyup', anykey => {
    const keyValue = anykey.key
    let lengthCPF = getCPF.value.length;

    if(lengthCPF >= 0 && keyValue === 'Backspace'){
        setErrorHTML(getCPF, 'CPF inválido !');
    }
})

    // Verificando CPF !! << 
getCPF.addEventListener('keypress', anykey => {
    
    let lengthCPF = getCPF.value.length + 1

    const keyValue = anykey.key as string | number;

    // const patternLetters = '[a-zA-Z]';   <-- APENAS Letras !!!
    
    const patternLetters = '[0-9]'; // APENAS Números !! <<
    
    if(!keyValue.toString().match(patternLetters)){ // Se NÃO for Números, ELE IMPEDE de Digitar no Input !! <<
        anykey.preventDefault();
        lengthCPF -= 1; // Pelo o que eu percebi, o preventDefault() nesse caso, deixa o Char Inválido Passar UMA VEZ, então Aumenta a lenght do 
                        // CPF +1 UMA VEZ, então com esse -1 ele também DIMINUI UMA VEZ !! <<  
    }
    
    backspaceGetCPF();

    if(lengthCPF === 4 || lengthCPF === 8){
         getCPF.value += '.'
        }

    else if(lengthCPF === 12){
        getCPF.value += '-'
    }

    else if(lengthCPF === 14 || lengthCPF === 15){
        setSuccessHTML(getCPF);
    }

    else{
        setErrorHTML(getCPF, 'CPF inválido !');
    }
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
                        
            console.log('Retorno SEM Objeto:', bairro, cep, ddd);
        })
        .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
}

const pressEnter = () =>  getCEP?.addEventListener('keypress', anykey => {
    if(anykey.key === 'Enter'){
        anykey.preventDefault(); // Adicionei isso porque um Input Focado quando RECEBE Enter ou Espaço ACIONA um Clique AUTOMATICAMENTE, e Com essa Função isso é Impedido !! <<

        checkInputs();
        runAxios();
    }
})

const pressEnterSubmit = () => sendInputButton.addEventListener('keypress', anykey => {
    if(anykey.key === 'Enter'){
        anykey.preventDefault();

        checkInputs();
        runAxios();

    }
})

const clickSubmitButton = () => sendInputButton?.addEventListener('submit', clicked => {
    clicked.preventDefault();

    checkInputs();
    runAxios();
})

    // DE VERDADE desativa o Submit !! <<
// getForm.addEventListener('submit', anyCommand =>{
//     anyCommand.preventDefault();
// })

    // Chamando essas Funções
// clickSubmitButton();