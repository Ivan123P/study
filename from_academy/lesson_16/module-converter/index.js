// v.1
// const converter = require('./converter');

// console.log(converter.convertToUAH(100));
// console.log(converter.convertToUs(100));
// ----------------------------------------------------------
// v.2
const Converter = require('./converter');
const baseCurrencyUs = 25;

const conv = new Converter(baseCurrencyUs);

console.log(conv.convertToUAH(100));
console.log(conv.convertToUs(100));