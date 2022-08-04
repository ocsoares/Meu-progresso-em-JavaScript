import { Application, Request, Response, Router } from "express";
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
    secret: process.env.SESSION_SECRET as string, // Chave para Autenticar a session !! <<
    resave: true, // Coloquei assim para Evitar um Erro << 
    saveUninitialized: true // Coloquei assim para Evitar um Erro << 
}))

// IMPORTANTE: Para Autenticação, usar POST ao invés de GET por + Segurança, um desses Motivos são que com GET os Dados do Input ficam ex-
// -postos na URL !! <<

htmlPageRoute.use(bodyParser.urlencoded({extended: true})) // Permite pegar o req.body do Input do Usuário !! <<

htmlPageRoute.get('/register', (req: Request, res: Response) => { // ACHO que Está dando erro de CORS porque a API que estou usando (CEP) dá Er-
    res.sendFile(registerHTML);                                   // -ro quando NÃO digita os 8 Números de um CEP, caso Digite 8 Números MAS de al-                                   
                                                                  // -gum CEP que NÃO exista, a API RETORNA um Objeto escrito erro !! <<<
})

htmlPageRoute.post('/register', new HTMLAccountController().createAccountHTML as any, (req: Request, res: Response) => {
    res.sendFile(loggedHTML);
})

htmlPageRoute.get('/login', (req: Request, res: Response) => {
    res.sendFile(loginHTML);
})

htmlPageRoute.post('/login', (req: Request, res: Response) => { // Usar POST para Login por Segurança (pesquisar sobre...) !! <<
    res.send({message: 'teste...'}) // Criar uma Página HTML para quando Logar com Sucesso !! << 
})

export default htmlPageRoute;