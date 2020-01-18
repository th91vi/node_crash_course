// modulo fyle system
const fs = require('fs');
// modulo path
const path = require('path');

// // cria pasta/diretorio de teste
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Diretorio criado...');
// });

// // cria e encoda o arquivo, se existir o diretorio; reescreve o arquivo se usado duas vezes
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', (err) => {
//     if (err) throw err;
//     console.log('Arquivo criado e escrito...');

//     // acrescenta a arquivo ja existente
//     // aqui eh chamado como callback, porque writeFile eh assincrono
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' hELLO wORLD!', (err) => {
//         if (err) throw err;
//         console.log('Arquivo reescrito...');
//     });
// });

// // ler arquivo
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // renomeia arquivo
// // fs.rename(oldPath, newPath, callback)
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), (__dirname, '/test', 'helloworld.txt'), (err) => {
//     if (err) throw err;
//     console.log('Arquivo renomeado...');
// });