    // Aqui NÃO pega porque NÃO tem nenhum Módulo instalado, quando for rodar, Colocar no Usar para memorizar !! <<<

    import fs from 'fs';
    import path from 'path';
    
    const __dirname = path.resolve()
    
    const directoryFile = path.join(__dirname, 'arquivo-callback.txt');
    
    const showsContent = (_, content) => console.log(content.toString());
    
    const returnContentFile = (directory) => new Promise(resolve => {
        const contentFile = fs.readFile(directory, showsContent);
        console.log('Buscando o arquivo no servidor...');
        resolve(contentFile);
    })
    
    returnContentFile(directoryFile).then()