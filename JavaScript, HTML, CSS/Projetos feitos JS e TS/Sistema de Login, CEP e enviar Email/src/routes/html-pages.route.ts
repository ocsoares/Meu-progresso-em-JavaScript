import { Request, Response, Router } from "express";
import path from "path";
import session from 'express-session'
import bodyParser from "body-parser";
import { HTMLAccountController } from "../controllers/HTMLAccountController";

const __dirname = path.resolve() // Entra na Pasta RAÍZ do projeto !!
const registerHTML = path.join(__dirname, '/src/html/register.html'); // Caminho do Arquivo HTML usado !! << 
const loginHTML = path.join(__dirname, '/src/html/login.html');
const loggedHTML = path.join(__dirname, '/src/html/logado.html');

const htmlPageRoute = Router();

htmlPageRoute.use(session({ // Permite CRIAR uma Sessão para um Usuário !! <<
    secret: process.env.SESSION_SECRET as string,
    resave: true,
    saveUninitialized: true
}))

htmlPageRoute.use(bodyParser.urlencoded({extended: true})) // Permite pegar o req.body do Input do Usuário !! <<

htmlPageRoute.get('/register', (req: Request, res: Response) => { // ACHO que Está dando erro de CORS porque a API que estou usando (CEP) dá Er-
    res.sendFile(registerHTML);                                     // -ro quando NÃO digita os 8 Números de um CEP, caso Digite 8 Números MAS de al-
    console.log('acessado...')                                    // -gum CEP que NÃO exista, a API RETORNA um Objeto escrito erro !! <<<
})

htmlPageRoute.post('/register', new HTMLAccountController().createAccountHTML as any) //(req: Request, res: Response) => {
    // req.body + Passar o name do HTML de um determinado Input !! <<
    // Ou também pode pegar normalmente Desestruturando !! <<

//     const { username, email, cpf, cep, password } = req.body

//     console.log('Retorno desestruturado:', username, email, cpf, cep, password);

//     res.sendFile(loggedHTML)
//     res.json({
//         message:
//         username // ....
//     })
// })

export default htmlPageRoute;