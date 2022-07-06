        // No React, para adicionar uma classe do CSS o Comando é className !!
    import './index.css'; // Importando o Arquivo que se Encontra o .css que Usei !!
    
    // Para Retornar uma Função Dentro da Função a ser Exportada, colocar entre {} !!! - ACHO que Precisa ter Parâmetro !!
    const Somando = (number, otherNumber) => number + otherNumber;

    const FirstJSX = () => { // Letra INICIAL MAÍSCULA !!! <<<
        return (
            <div>
                <p className='change_p'>Minha primeira Exportação !! {Somando('a','LEWANDOWSKI!!')} </p> 
            </div>
        );
    };
    
    export default FirstJSX;  // Letra INICIAL MAÍSCULA !!! <<< (NÃO esquecer do default depois do export !!)