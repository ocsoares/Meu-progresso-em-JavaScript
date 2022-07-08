    // ALGUNS Métodos em JavaScript para Manipular o HTML !! <<<<<
    //  OBS: Ficar atento ao ÍNDICE dos Elementos para Não Retornar algo não esperado !!!!

document.getElementById('ID'); // Como é id, Retorna UM ÚNICO Elemento !

document.getElementsByTagName('Tag') // Retorna TODAS as Ocorrências da Tag informada ! (Retorna em forma de Array (independente do tamanho,
                                     // Mesmo se for 1), Pode ser acessado pelo Índice)

document.getElementsByClassName('Classe') // Retorna TODAS as Ocorrências da Classe informada ! (Retorna em forma de Array, mesmo se for 1)

document.querySelectorAll('Tag, Id, classe...') // É uma Busca Personalizada, pode Combinar para mostrar, por exemplo, as Ocorrências de Duas Classes,
                                                // logo, vai Retornar Apenas o Código que contém essas DUAS Classes JUNTAS !! 

                                                // Ex: document.querySelectorAll('li .estilo') = Retorna todas as Tag's li que tenham a Classe estilo !!

document.createElement('Tag') // CRIA um NOVO Elemento HTML (ex. img, section...)

document.removeChild('...') // REMOVE o Elemento FILHO de uma Tag (ex. Dentro de section tem um <p>,  Remove o <p> !!!)

document.appendChild('...') // Adiciona um Elemento DENTRO de uma Tag PAI !! (quase a mesma coisa que removeChild, mas esse Adiciona !!)

document.replaceChild('Novo, velho') // Substitui um Elemento Informado por um Novo !! (nessa Ordem, primeiro o Novo, depois o a ser Substituido !!)

    // Alguns Métodos para Manipular Estilos !!!

const anyElement = document.getElementById('my-id') // Apenas Armazenando em uma Constante (Óbvio que NÃO precisa ser necessariamente o .getElementById)

anyElement.classList//.algum comando     // classList permite acessar, de forma Geral, as Classes que esse Elemento tiver !!

anyElement.classList.add('classe') // ADICIONA uma Nova Classe à Tag do ID Informado !!
anyElement.classList.remove('classe') // REMOVE uma Classe da Tag do ID Informado !!

anyElement.classList.toggle('classe') // ADICIONA uma Nova Classe à Tag do ID Informado CASO ELA NÃO EXISTA, e REMOVE CASO ELA EXISTA !!!

    // Acessando o CSS Diretamente através do JavaScript

document.getElementsByTagName('p').style.color = 'blue'; // NESSE Exemplo, altera a Cor de TODAS as Tag's <p> para Azul !!!
                                                             // Óbvio que podia ser outros comandos, exemplo, procurar pelo ID e mudar a Borda !!
                                                             // .style.algum comando para estilizar !!