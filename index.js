// // requisita objeto person, de person.js
// const Person = require('./person');

// const person1 = new Person('Thiago', 999);

// person1.greeting();

// requisita modulos
const http = require('http');
const path = require('path');
const fs = require('fs');

// declara servidor
const server = http.createServer((req, res) => {
    // // console.log(req.url) // retorna a url solicitada pelo cliente
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' }) // define corpo da resposta como HTML e codifica como utf-8
    //         // res.end('<h1>Bem vindo!</h1>'); // escreve html na pagina inicial
    //         // res.end('<h1>Bem vindo a nossa nova página inicial!</h1>'); // escreve html na pagina inicial, agora com mudancas monitoradas por nodemon; com codificacao quebrada
    //         res.end(content); // retorna pagina especificada em readFile, sendo passada como parametro da funcao
    //     });
    // }

    // // resposta para a pagina about
    // if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' }) // define corpo da resposta como HTML e codifica como utf-8
    //         res.end(content); // retorna pagina especificada em readFile, sendo passada como parametro da funcao
    //     });
    // }

    // // exemplo de resposta para api rest
    // if(req.url === '/api/users'){
    //     const users = [
    //         {nome: 'Mario', idade: '40'},
    //         {nome: 'Luigi', idade: '42'}
    //     ]

    //     // retorna objeto no corpo de res
    //     res.writeHead(200, { 'Content-type': 'application/json' });
    //     // transforma o objeto em JSON
    //     res.end(JSON.stringify(users));
    // }

    // cria path dinamico de arquivos, usando operador ternario
    let filePath = path.join(__dirname, 'public', req.url=== '/' ? 'index.html' : req.url);

    // define extensao do arquivo
    let extName = path.extname(filePath);

    // define Content-type
    let contentType = 'text/html';

    // verifica extensao e difine Content-type
    switch (extName) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    
        default:
            contentType;
            break;
    }

    // requisita aqruivo
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // pagina nao encontrada
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // erro de servidor aleatorio
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }    
        } else {
            // resposta sem erro
            res.writeHead(200, { 'Content-type': contentType });
            res.end(content, 'utf8');
        }
    })
});

// variavel de port do servidor, onde primeiro busca pela porta configurada no ambiente de deploy, senao define o port como 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});