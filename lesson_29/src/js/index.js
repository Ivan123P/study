import {sum} from './helper.js';
import calculator from './helper.js';
import sendData from './const.js';

let x = 10;
let y = 3;

let res = sum(x, y);
let res2 = calculator.dif(x, y);
let res3 = calculator.mul(x, y);

console.log(res);
console.log(res2);
console.log(res3);

sendData({
  data: 'Ivan',
  path: 'http://blabla.com'
});
sendData({
  data: 'Igor',
  path: 'http://blabla.com'
});