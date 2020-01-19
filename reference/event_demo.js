const EvetEmitter = require('events');

// cria classe
class MyEmitter extends EvetEmitter { }

// declara objeto
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('Event fired!'));

// declara evento
myEmitter.emit('event');