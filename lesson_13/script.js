// 1. Установить Node.js. Ознакомится с документацией. Посмотреть что, куда и как. С помощью модуля fs научится записывать данные в файл, а также читать из файла.
// *2. Используя модуль fs, сделать так, чтоб информация в файл дописывалась с новой строки(добавлялась), а не заменялась.

const fs = require('fs');
const filePath = 'data.txt';
const fileEncoding = 'utf8';
let someInfo = 'new text';

fs.appendFile(filePath, '\n' + someInfo, function(err) {
  console.log('The data has been added');

  fs.readFile(filePath, fileEncoding, function(err, _data){
    console.log('\nFile contents:\n' + _data);
  });
});

// **3. Отправить себе на почту письмо с помощью Node.js
