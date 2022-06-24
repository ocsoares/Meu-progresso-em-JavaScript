function showAdress(adress){
    for(let key in adress){
        console.log(key, adress[key]);
    }
}

const myAdress = {
    street: 'Rua Costa e Silva',
    district: 'North',
    number: 8912,
    type: 'Home'
}

showAdress(myAdress);