const os = require('os');

// sistema oepracional
console.log(os.platform()); // retorna win32

// arquitetura da cpu
console.log(os.arch()); // retorna x64

// informacoes sobre os cores da cpu
console.log(os.cpus()); // retorna objeto sobre o estado das cpus

// memoria livre
console.log(os.freemem());

// memoria total
console.log(os.totalmem());

// diretorio home
console.log(os.homedir());

// tempo de funcionamento da sessao ativa da maquina, em segundos
console.log(os.uptime());
