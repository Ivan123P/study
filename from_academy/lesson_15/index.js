// callback
function coffeeMachine(_coffee, _callback) {
  setTimeout(function() {
    let __coffee = _coffee + ' is done!';
    setTimeout(function() {
      return _callback( __coffee + ' With milk' );
    }, 1000);
  }, 1000);
}

let coffee = 'Jacobs';

let cofe coffeeMachine(coffee, function(_data) {
  return _data;
});

console.log(cofe);
// promise(es6)
// async/await(es7)