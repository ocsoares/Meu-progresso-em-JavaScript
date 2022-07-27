    // Função DENTRO de Classe = MÉTODO !!
    // Control D = Modifica ao MESMO Tempo, uma Palavra da Esquerda igual ao da Direita !!

class Product {
    constructor(name, price, discount = 20) { // Esse constructor equivale a function que RECEBE os Parâmetros e as Atribuições !! <<
        this.name = name
        this.price = price
        this.discount = discount
    }

    // Uma Função, nesse caso com class (Método), é criada Diretamente (sem function ou Arrow function) e FORA do constructor !!
    //  OBS: Pode-se usar get antes do Método para TRANSFORMAR em Atributo, ai quando for Chamar ele pode Passar SEM () !! <<

    finalPriceFunction() {
        return this.price - this.discount
    }

    get name() { // name vai RECEBER o Retorno de this._name << (CRIADO) !!
        return this._name
    }

    // Método setter (set)
    set name(newName) { // Seta o name que vai Receber um NOVO Parâmetro passado ABAIXO !! <<
        if (newName.length <= 4) return this._name = newName // Se a Palavra for MENOR que 4 de Tamanho, apenas Retorna

        this._name = newName.toUpperCase() // Se for MAIOR que 4, Transforma em MAIÚSCULA !! <<
    }
}

const returnNewProduct = new Product('Notebook', 3440);
console.log('Instancia Completa:', returnNewProduct, '\n');
console.log('Name:', returnNewProduct.name);
console.log('Price:', returnNewProduct.price);
console.log('Price com desconto de -20:', returnNewProduct.finalPriceFunction());