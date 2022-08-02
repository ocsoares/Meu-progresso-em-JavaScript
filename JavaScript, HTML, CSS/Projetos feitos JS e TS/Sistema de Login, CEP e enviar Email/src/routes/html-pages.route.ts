import { Request, Response, Router } from "express";
import path from "path";

const __dirname = path.resolve() // Entra na Pasta RAÍZ do projeto !!
const searchFile = path.join(__dirname, '/src/html/register.html'); // Caminho do Arquivo HTML usado !! << 

const htmlPageRoute = Router();

htmlPageRoute.get('/register', (req: Request, res: Response) => { // ACHO que Está dando erro de CORS porque a API que estou usando (CEP) dá Er-
    res.sendFile(searchFile);                                     // -ro quando NÃO digita os 8 Números de um CEP, caso Digite 8 Números MAS de al-
    console.log('acessado...')                                    // -gum CEP que NÃO exista, a API RETORNA um Objeto escrito erro !! <<<
})

export default htmlPageRoute;