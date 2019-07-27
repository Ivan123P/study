// 1. Написать сервер, чтоб по запросу localhost:3000 сервер выдавал нам в response Hello World, чтоб по запросу 
// localhost:3000/about сервер выдавал нам данные о запросе в консоль, 
// а по запросу localhost:3000/contact сервер возвращал страницу index.html.

// const http = require('http');
// const fs = require('fs');
// const port = 3000;
// const indexHtmlPath = 'index.html';
// const fileEncoding = 'utf-8';

// http.createServer((req, res) => {
//   if(req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   } else if(req.url === '/about') {
//     console.log(req);
//     res.end();
//   } else if(req.url === '/contact') {
//     fs.readFile(indexHtmlPath, fileEncoding, (err, data) => {
//       res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//       res.write(data);
//       res.end();
//     });
//   }
// }).listen(port, () => {
//   console.log('Server at http://localhost:' + port);
// });

// 2. Пройти урок по JSON https://www.w3schools.com/js/js_json_intro.asp
// *3. По этой ссылке находятся курсы валют Приват Банка в виде json. Задание: попробовать с помощью Node, отобразить эти данные у себя в консоли или же вывести в ответ на запрос сервера.
// Подсказка: нужно посмотреть сторонние модули.
// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3

// const request = require('request');
// const apiDataRequest = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

// request(apiDataRequest, function(_err, _response, _body) {
//   let privatCurrencyJSON = _body;
//   let privatCurrencyData = JSON.parse(privatCurrencyJSON);

//   console.log(privatCurrencyData);
// });

// **4. Как отобразить эти данные используя только обычный html и javascript, без сервера?

// currencies + index.js