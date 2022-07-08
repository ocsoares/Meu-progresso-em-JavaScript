import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstJSX from './primeiraExportação e Anotações'; // Para IMPORTAR Arquivos, Precis Criar um NOVO Arquivo e Exportar, e Depois aqui IMPORTAR !! OBS: Letra Inicial MAIÚSCULA !!
import { AnyPrint, OtherAnyPrint } from './exportandoMaisDeUmaFunção'; // Importando um Arquivo com Mais de UMA Função !! Usar {} !!
import reportWebVitals from './reportWebVitals';

  // ACHO que NÃO precisa usar o App.js !!!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Colocar as Funções aqui !! (Se alterar a Ordem das Funções, uma Aparece Primeiro que a Outra, óbvio !)
  <React.StrictMode>
    <div>
    <h1>Hello Word</h1>
      <p>Testando...</p>
    </div>
    <FirstJSX/>
    <AnyPrint/>
    <OtherAnyPrint/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
