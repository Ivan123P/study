const Event = require('events').EventEmitter;

let emt = new Event();

emt.on('x', () => { //may be addListener, but must be on
  setTimeout(function() {
    console.log('Listener 1');
  }, 1000);
});

emt.on('x', () => {
  console.log('Listener 2');
});

emt.on('x', () => {
  console.log('Listener 3');
});

emt.emit('x');