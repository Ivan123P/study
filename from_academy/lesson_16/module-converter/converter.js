// v.1
// const baseCurrencyUs = 25.25;

// function roundTwoDecimals(amount) {
//   return Math.round(amount * 100) / 100;
// }

// module.exports.convertToUAH = function(amount) {
//   return roundTwoDecimals(amount * baseCurrencyUs);
// }

// module.exports.convertToUs = function convertToUs(amount) {
//   return roundTwoDecimals(amount / baseCurrencyUs);
// }
// ----------------------------------------------------------

// v.2
// function Converter(baseCurrencyUs) {
//   this.baseCurrencyUs = baseCurrencyUs;
// }

// Converter.prototype.roundTwoDecimals = function(amount) {
//   return Math.round(amount * 100) / 100;
// }
// Converter.prototype.convertToUAH = function(amount) {
//   return this.roundTwoDecimals(amount * this.baseCurrencyUs);
// }
// Converter.prototype.convertToUs = function(amount) {
//   return this.roundTwoDecimals(amount / this.baseCurrencyUs);
// }

// module.exports = Converter;
// -----------------------------------------------------
// v.3
class Converter {
  constructor(baseCurrencyUs) {
    this.baseCurrencyUs = baseCurrencyUs;
  }

  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }

  convertToUAH(amount) {
    return this.roundTwoDecimals(amount * this.baseCurrencyUs);
  }

  convertToUs(amount) {
    return this.roundTwoDecimals(amount / this.baseCurrencyUs);
  }
}

module.exports = Converter;