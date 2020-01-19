const EventEmitter = require('events');
// requisita gerador de ids
const uuid = require('uuid');

// delcara classe
class Logger extends EventEmitter {
    log(msg){
        // declara evento, extendido de EventEmitter
        this.emit('message', {id: uuid.v4(), msg:msg});
    }
}

// declara classe
const Logger = require('./logger');

// declara objeto
const logger = new Logger();

// registra listener para evento 'message'
logger.on('message', (data) => console.log('Called Listener', data));

// executa funcao log, que dispara o evento 'message', e por sua vez executa a funcao anonima do listener acima
logger.log('Hello world');

// module.exports = Logger;