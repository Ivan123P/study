// 2. На основе событий создать свой логер(logger). Который будет регистрировать пользователя со временем посещения и выводит эти данные в консоль. 
// Также можно добавить информацию типа (такой то пользователь вошёл и вышел), набросать событий типа logIn, logout, someAction…. 
// Код произвольный(абстрактный), главное использовать события класса EventEmitter.

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('logIn', (_user) => {
  let _loginTime = getEventDate().toTimeString();
  
  console.log(`Пользователь ${_user} залогинился в ${_loginTime}.`);
});

myEmitter.on('someAction', (_user) => {
  let _actionTime = getEventDate().toTimeString();

  console.log(`Пользователь ${_user} совершил "какое-то действие" в ${_actionTime}.`);
});

myEmitter.on('logOut', (_user) => {
  let _logoutTime = getEventDate().toTimeString();

  console.log(`Пользователь ${_user} вышел в ${_logoutTime}.`);
});

setTimeout(() => {
  myEmitter.emit('logIn', 'Alex');
}, 500);

setTimeout(() => {
  myEmitter.emit('someAction', 'Alex');
}, 1000);

setTimeout(() => {
  myEmitter.emit('someAction', 'Alex');
}, 2000);

setTimeout(() => {
  myEmitter.emit('logOut', 'Alex');
}, 3500);

setTimeout(() => {
  myEmitter.emit('logIn', 'Alex123');
}, 1200);

setTimeout(() => {
  myEmitter.emit('someAction', 'Alex123');
}, 2000);

setTimeout(() => {
  myEmitter.emit('logOut', 'Alex123');
}, 3000);

let getEventDate = () => {
  return new Date();
}

// *3. При каждом изменении в коде нам приходится делать рестарт сервера! Как решить эту задачу? (Подсказка - посмотреть сторонний модуль). 
// При старте сервера ми не можем закрыть терминал - иначе сервер остановится! Как справится с этой проблемой?

// использовал модуль nodemon

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