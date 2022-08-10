import axios from "axios";
import { NextFunction, Request, Response } from "express";

// Axios
export const runAxios = () => (req: Request, res: Response, next: NextFunction) => { // DEPOIS ATIVAR e USAR isso <<<
    if(req.session.login){
                                                // Tirando o -   !! <<
        const getCEPValue = req.session.login.cep.replace('-', ''); // Acho que NÃO precisava, Porque MESMO com - FUNCIONA !! (só por precaução...);
        console.log(getCEPValue);
        console.log('Typeof CEP:', typeof(getCEPValue));
    
        const url = `https://viacep.com.br/ws/${getCEPValue}/json`;
        console.log(url)
    
        axios.get(url)
            .then(resAxios => { // o resAxios estava com o MESMO nome do res (Response - Express), POR ISSO NÃO estava permitindo usar as propriedades do Response Express !! <<
                const { ...getAllData } = resAxios.data // Pegando TUDO do res.data nessa ...Variável <<<   
                
                const checkErrorAPI = getAllData.hasOwnProperty('erro') // NESSE CASO, se o CEP for Inválido, retorna um Objeto com Erro, então essa Função Verifica se TEM essa Propriedade !! <<

                // console.log('HEADERS:', req.headers); <-- Configurar depois com o JWT !! <<

                if (!checkErrorAPI) {
                    const { bairro, cep, ddd } = getAllData
                    console.log('Retorno SEM Objeto:', bairro, cep, ddd);

                    return res.json(resAxios.data);
                }

                else{
                   console.log('NÃO EXISTE !');
                   return res.json({message: 'CEP inválido !'});
                }
            })
            .catch(error => console.log(`Erro na aplicaçãooo: ${error}`));
        
        next();
    }

    else{
        
        res.redirect('/login');
    }
}