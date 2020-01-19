  const http = require('http');

  // cria objeto de servidor
  http
    .createServer((req, res) => {
        // escreve resposta
        res.write('Hello world');
        res.end();
    })
    .listen(5000, () => {
        console.log('Server running...');
    })