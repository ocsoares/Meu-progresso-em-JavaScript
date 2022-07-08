const anyButton = document.getElementById('button-selector');
const h1Tag = document.getElementById('page-title');
const bodyTag = document.getElementsByTagName('body')[0]; // Índice 0 porque como Retorna um Array, e quero Selecinar o body em si, serve para isso
                                                          //  OBS: o Índice [] vai FORA dos () !!
const footerTag = document.getElementsByTagName('footer')[0];

// console.log(anyButton); Apenas para ver no console se conseguiu Selecionar

const DARK_MODE_CLASS = 'dark-mode'; // Como a classe dark-mode Aparece muitas vezes no Código, uma Boa Prática é colocá-la em uma Constante, porque
                                     // caso precise Alterar algo, basta Apenas Alterar nessa Constante !! 

const DARK_MODE_TEXT = 'Dark Mode';
const LIGHT_MODE_TEXT = 'Light Mode';

const changeMode = () => {
    changeClass();
    changeText();
};

const changeClass = () => {
    anyButton.classList.toggle(DARK_MODE_CLASS); // constante DARK_MODE_CLASS substituindo 'dark-mode' !! <<<
    h1Tag.classList.toggle(DARK_MODE_CLASS);
    bodyTag.classList.toggle(DARK_MODE_CLASS);
    footerTag.classList.toggle(DARK_MODE_CLASS);
};

const changeText = () => {
    if(anyButton.classList.contains(DARK_MODE_CLASS)){ // .contains = Verifica se dentro do Elemento especificado Existe algo !!
        h1Tag.innerHTML = DARK_MODE_TEXT + ' ON'; // .innerHTML = Permite Alterar um TEXTO DIRETO do HTML !!
        anyButton.innerHTML = LIGHT_MODE_TEXT;
        return;
    }

    h1Tag.innerText = LIGHT_MODE_TEXT + ' ON';
    anyButton.innerText = DARK_MODE_TEXT;
};

anyButton.addEventListener('click', changeMode);

console.log(bodyTag);