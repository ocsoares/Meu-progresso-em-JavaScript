const anyObject = [
    { instrument: 'Cafeteira', quant: 7 , price: 65.90 },
    { instrument: 'Geladeira', quant: 3, price: 900  },
    { instrument: 'Tênis', quant: 12 , price: 104  },
    { instrument: 'Ventilador', quant: 5, price: 43 }
]

const getQuantBiggerThanSix = prop => prop.quant >= 6;

const arrayQuantBiggerThanSix = anyObject.filter(getQuantBiggerThanSix);
console.log(arrayQuantBiggerThanSix);
console.log('\n');

const getNamesQuantBiggerThanSix = prop => prop.instrument

    // Mesma coisa que acima, só que Retornando APENAS os Nomes, com o .map no final !! <<
const arrayQuantBiggerThanSixNames = anyObject.filter(getQuantBiggerThanSix).map(getNamesQuantBiggerThanSix);
console.log(arrayQuantBiggerThanSixNames);