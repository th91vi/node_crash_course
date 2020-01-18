const url = require('url');

// declara novo objeto
// Constructor: new URL(input[, base])
const myUrl = new URL('http://meuwebsite.com.br:8000/hello.html?id=101&status=active');

// URL serializada
// O processo pelo qual um objeto ou estrutura de dados é traduzido para um formato adequado para transferência através de uma rede ou armazenamento (por exemplo, em um buffer de matriz ou formato de arquivo). Seu principal objetivo é salvar o estado de um objeto para poder recriá-lo quando necessário. O processo inverso é chamado desserialização.
console.log(myUrl.href);
// o valor eh similar ao dos metodos abaixo
console.log(myUrl.toString());
console.log(myUrl.toJSON());

// host (dominio raiz)
console.log(myUrl.host); // retorna 'meuwebsite.com.br:8000'

// hostname (nao inclui portas)
console.log(myUrl.hostname); // retorna 'meuwebsite.com.br'

// caminho do arquivo
console.log('Caminho do arquivo: ' + myUrl.pathname); // retorna 'Caminho do arquivo: /hello.html'

// query serializada
console.log('Query serializada: ' + myUrl.search); // retorna 'Query serializada: ?id=101&status=active'

// parametros de busca
console.log('Parametros de busca: ' + myUrl.searchParams); // retorna string 'Parametros de busca: id=101&status=active'
console.log(myUrl.searchParams); // retorna objeto 'URLSearchParams { 'id' => '101', 'status' => 'active' }'

// adiciona parametros na url
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); // retorna objeto 'URLSearchParams { 'id' => '101', 'status' => 'active', 'abc' => '123' }'

// avalia params atraves de um laco
myUrl.searchParams.forEach(
    (value, name) => console.log(`${name}: ${value}`)
    // // retorna como abaixo:
    // id: 101
    // status: active
    // abc: 123
);