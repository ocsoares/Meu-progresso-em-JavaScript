    // Função Construtora - Constrói/Cria OBJETOS !! <<

    // IMPORTANTE: Pelo o que eu vi, NÃO pode usar Arrow Function !! <<
    // IMPORTANTE: TAMBÉM pode usar Classes !! <<

    function Product (name, price, discount = 10){ // O discount NÃO precisa passar no Parâmetro quando for Chamar, PORQUE foi Pré-Definido e Atribuído no .this (FIXO) !! <<
        this.name = name // this = Coloca um Atributo DENTRO da Instancia Gerada !! << // OBS: this torna os Atributos PÚBLICOS (Torna Visível FORA desse Escopo) !! <<
        this.price = price
    
        this.discount = discount
    
        this.finalPriceFunction = () =>{ // CRIANDO uma Função com this !! <<
            return this.price - this.discount;
        }
    }
    const firstNewProduct = new Product('Car', 50.684) // new = Instancia algo, CRIA um Objeto !! <<
    console.log('Instancia Completa:', firstNewProduct,'\n');
    console.log('Name:', firstNewProduct.name);
    console.log('Price:', firstNewProduct.price)
    console.log('Price com desconto de -10:', firstNewProduct.finalPriceFunction()) // NÃO esquecer do () na Função !! <<
    console.log('\n');
    
        //Retornando SEM .this (retorna um Objeto) !! <<
    // const OtherProduct = (name, price) => {
    //     return {name: name, price: price}
    // }
    
    // const secondNewProduct = OtherProduct('Pencil', 1.99);
    // console.log('<--- SEM .this: --->');
    // console.log(secondNewProduct.name);
    // console.log(secondNewProduct.price);