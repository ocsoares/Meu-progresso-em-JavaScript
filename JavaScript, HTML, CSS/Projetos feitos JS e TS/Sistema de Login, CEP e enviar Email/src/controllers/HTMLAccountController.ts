import bodyParser from "body-parser";

export class HTMLAccountController {
    async createAccountHTML(req: Request, res: Response){
        const teste = req.body as any

        
        console.log('Apenas um teste: fodasekkk', teste)
        console.log('Tentando pegar só o cep:', teste.cep);

        // RETORNAR A PÁGINA NA ROTA COM res.sendFile.... AQUI N DÁ !! <<
    }
}