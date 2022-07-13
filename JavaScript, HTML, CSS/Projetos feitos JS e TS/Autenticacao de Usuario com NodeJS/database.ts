    // Existe várias Maneiras de Conectar com o PostgreSQL, mas irei fazer com Pool e usando o ElephantSQL (Web) !!
    //  OBS: Esse ElephantSQL suporte APENAS 1 Conexão por vez, usar ele APENAS em Desenvolvimento e Testes !!

import { Pool } from "pg";

    // USAR esse Nome na Variável !!
    // Esse URL é fornecido no ElephantSQL !
const connectionString = 'postgres://ylziwrko:ceQYBtUBj25We6Zrg7VXdJK-cdntExnI@motty.db.elephantsql.com/ylziwrko';

const firstDatabase =  new Pool({ connectionString }); // Isso vai ser Exportado !

export default firstDatabase;