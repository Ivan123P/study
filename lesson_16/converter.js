class Converter {
  constructor(baseCurrency) {
    this.baseCurrency = baseCurrency;
  }

  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }

  convertToUAH(amount) {
    return this.roundTwoDecimals(amount * this.baseCurrency);
  }

  convertFromUAH(amount) {
    return this.roundTwoDecimals(amount / this.baseCurrency);
  }
}

module.exports = Converter;