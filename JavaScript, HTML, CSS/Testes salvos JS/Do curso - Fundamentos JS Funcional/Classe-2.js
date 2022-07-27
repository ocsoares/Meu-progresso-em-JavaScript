class Product{
    constructor(name, price, discount = 2){
        this.name = name
        this.price = price
        this.discount = discount
    }

    finalPriceDiscount(){
        return this.price - this.discount
    }
}

    // Adiciona uma Funcionalidade que NÃO existia antes para a Classe !! <<
    //  OBS: .teste = Nome dessa Função !! <<
Product.prototype.teste = function(){ // NÃO pode ser Arrow Function, tem que ser function Normal para ter Acesso ao .this << !!
    const number = 1, otherNumber = 2;
    console.log(`\n>> Apenas retornando o valor da minha Prototype: ${number + otherNumber} <<\n`);

    return number + otherNumber; // O retorno é Opcional, óbvio...
}

    // Acho que isso CRIA uma NOVA Propriedade dentro da Classe Especificada !! <<
                    // Classe.prototype, 'Nome da NOVA Propriedade', {Atributos dessa Propriedade}
Object.defineProperty(Product.prototype, 'newProperty', {
    get: function(){ // SEM Arrow Function, para ter Acesso ao .this !! << // OBS, assim como o get para o Retorno, TAMBÉM pode usar o set !! <<
        return `\nRetorno da minha nova Propriedade: ${this.price = 2000}` 
    }, // Colocar , se for usar Outro(s) !! << 

        // NÃO entendi isso << !!
    set: function(newDiscount){
        if(newDiscount < 0){
            this.price = newDiscount
        }
    }
})

const newProduct = new Product('Geladeira', 850);
console.log('Objeto Completo:', newProduct)

newProduct.teste(); // Chamar o prototype com o Nome da Classe Atribuída + .Nome da Função do Prototype !! <<

console.log('Name:', newProduct.name)
newProduct.price = -10; // NÃO era pra alterar...
console.log('Price:', newProduct.price)
console.log('Price com desconto de -2:', newProduct.finalPriceDiscount());

console.log(newProduct.newProperty)