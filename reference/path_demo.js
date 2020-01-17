// Modelo do node module wrapper function
// (function (exports, require, module, __filename, __dirname) {  

// });

const path = require('path');

// nome do arquivo base, com caminho absoluto
console.log(__filename);
// apenas nome do arquivo base
console.log(path.basename(__filename));

// nome do diretorio
console.log(path.dirname(__filename));

// extensao do arquivo
console.log(path.extname(__filename));

// cria objeto a partir do path
console.log(path.parse(__filename));

// concatena paths
// ex: ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
