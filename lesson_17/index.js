// 1. Доделать дз. установить Postman. Разобраться
// 2. Установить express с помощью генератора.
// 3. Ознакомиться с https://expressjs.com/ru/guide/routing.html
// 4. Усложнить модуль Конвертер, добавить к нему получение базовой валют из ПриватБанка, а также в ответ на запрос клиента отдать валюты с помощью express.
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
// 5. Посмотреть, что такое шаблонизаторы pug(jade), ejs, hbs и как с ними работать.