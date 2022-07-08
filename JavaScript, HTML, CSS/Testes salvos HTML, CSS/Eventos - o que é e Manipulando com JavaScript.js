    // O que são Eventos e Manipulando com JavaScript

// Evento = é Qualquer tipo de Ação INTERATIVA que o Usuário faça no Site !! 

// Alguns tipos de eventos = mouseover, mouseout = Interação quando passa o Mouse em cima de algum Elemento
                           // click, dbclick = Interação com o Click
                           // change, load = Eventos de Atualização

    // Adicionando Eventos com JavaScript = .addEventListener
const anyButton = document.getElementById('my-button'); // Apenas Retornando para uma Constante

anyButton.addEventListener('Tipo do Evento', 'Função que vai fazer algo após esse Evento');