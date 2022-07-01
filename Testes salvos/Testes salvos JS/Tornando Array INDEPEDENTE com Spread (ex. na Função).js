function somar (number, otherNumber, againOtherNumber){
    return number + otherNumber + againOtherNumber;
}

const array = [10,29,87]; // resultado da soma = 126

    // Isso aqui NÃO dá certo, porque o Array vai Entrar APENAS no PRIMEIRO Parâmetro da Função (no caso, o Parâmetro number) !!
console.log('Função direto com Array:',somar(array));

    // Usando o Spread no Array (...array), cada Elemento do Array se torna INDEPENDENTE, logo, vão assumir os Três Parâmetros da Função !!
console.log('Spread:',...array);

console.log('Função COM Spread:', somar(...array));