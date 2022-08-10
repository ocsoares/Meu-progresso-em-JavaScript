import { request, Request, response, Response, Router } from "express";
import path from "path";
import session from 'express-session'
import bodyParser from "body-parser";
import { HTMLAccountController } from "../controllers/HTMLAccountController";
import { runAxios } from "../scripts/axios-script";

const __dirname = path.resolve() // Entra na Pasta RAÍZ do projeto !!
const registerHTML = path.join(__dirname, '/src/html/register.html'); // Caminho do Arquivo HTML usado !! << 
const registerSuccessufullHTML = path.join(__dirname, '/src/html/registerSuccessufull.html'); 
const loginHTML = path.join(__dirname, '/src/html/login.html');
const loggedHTML = path.join(__dirname, '/src/html/loginSuccessufull.html');
const homeHTML = path.join(__dirname, '/src/html/home.html');
const logoutHTML = path.join(__dirname, 'src/html/logout.html');

const htmlPageRoute = Router();

    // >>>> Pesquisar e Implementar JWT na Sessão/Cookie !!!! <<<

htmlPageRoute.use(session({ // Permite CRIAR uma Sessão para um Usuário !! <<
    secret: process.env.SESSION_SECRET as string, // Chave para Autenticar a session !! <<
    resave: true, // Coloquei assim para Evitar um Erro << 
    saveUninitialized: true // Coloquei assim para Evitar um Erro << 
}))

// IMPORTANTE: Para Autenticação, usar POST ao invés de GET por + Segurança, um desses Motivos são que com GET os Dados do Input ficam ex-
// -postos na URL !! <<

htmlPageRoute.use(bodyParser.urlencoded({extended: true})) // Permite pegar o req.body do Input do Usuário !! <<

htmlPageRoute.get('/', (req: Request, res: Response) => {
    res.sendFile(homeHTML);
})

htmlPageRoute.get('/register', (req: Request, res: Response) => { // ACHO que Está dando erro de CORS porque a API que estou usando (CEP) dá Er-
    res.sendFile(registerHTML);                                   // -ro quando NÃO digita os 8 Números de um CEP, caso Digite 8 Números MAS de al-                                   
                                                                  // -gum CEP que NÃO exista, a API RETORNA um Objeto escrito erro !! <<<
})

htmlPageRoute.post('/register', new HTMLAccountController().createAccountHTML as any, (req: Request, res: Response) => {
    res.sendFile(registerSuccessufullHTML);
})

htmlPageRoute.get('/login', (req: Request, res: Response) => {
    if(req.session.login){
        res.redirect('/')
    }
    else{
        res.sendFile(loginHTML);
    }
})
        // >> IMPORTANTE: Mesmo que NÃO utilize o req e o res, TEM que colocar SENÃO (ao menos no .post) DÁ ERRO !! <<
htmlPageRoute.post('/login', new HTMLAccountController().loginAccountHTML as any, (req: Request, res: Response) => { // Usar POST para Login por Segurança (pesquisar sobre...) !! <<
})

    // Realmente destrói a Sessão, MAS a Primeira vez nessa Rota dá o erro Internal Server Erro (mas Destrói), a partir da Segunda vai Normalmente !! <<
htmlPageRoute.get('/logout', (req: Request, res: Response) => {
    if(req.session.login){
        req.session.destroy(req.session.login);
        res.sendFile(logoutHTML);
    }

    else{
        res.redirect('/');
    }

})

htmlPageRoute.get('/email', (req: Request, res: Response) => {
    console.log('Acima:', req.session.login);
    if(req.session.login){
        res.json({message: 'EXISTE !', session: req.session.login});
    }
    else{
        res.redirect('/login');
    }

})

htmlPageRoute.get('/cep', runAxios(), (req: Request, res: Response) => {
})

htmlPageRoute.get('/token', (req: Request, res: Response) => {
    console.log('JWT:', req.jwt); // Por algum motivo, FORA do HTMLAccountController (login) ESTÁ dando undefined !! <<
    if(req.session.login){
        res.json({Token: `Seu token é: ${req.jwt}`});
    }

    else{
        res.redirect('/login');
    }
})

export default htmlPageRoute;