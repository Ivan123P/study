// 1. Разобраться с npm. Найти на npm любые пакеты и посмотреть, что они делают.
// 2. Написать простой модуль, можно усовершенствовать модуль с занятия.

const request = require('request');
const Converter = require('./converter');
const apiDataRequest = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

dataFromRequest(function(_bodyFromRequest) {
  let _currencyObj = JSON.parse(_bodyFromRequest);

  let _currencyEUR = _currencyObj[0].sale;
  let _currencyRUR = _currencyObj[1].sale;
  let _currencyUSA = _currencyObj[2].sale;

  const converter = new Converter();

  converter.baseCurrency = _currencyEUR;

  console.log(converter.convertToUAH(100) + 'UAH');
  console.log(converter.convertFromUAH(100) + _currencyObj[0].ccy);
})

function dataFromRequest(callback) {
  request(apiDataRequest, function(_err, _response, _body) {
    return callback(_body);
  });
}

// 3. Написать простой модуль который будет зависеть от другого модуля(внешнего из npm)