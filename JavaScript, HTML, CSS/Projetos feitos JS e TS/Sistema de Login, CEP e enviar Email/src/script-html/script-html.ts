import axios from "axios";

const cep = 11608545;

const url = `https://viacep.com.br/ws/${cep}/json`;

const getCPF = () =>{
    axios.get(url)
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
}
console.log('Ultimo');
getCPF()