/**
 * Created by jszhou on 2017/2/20.
 */
function fun() { };
var a = 1;
console.log(a);

// 分号

var a = 1;
console.log(a);

if (a) {

};
while (a) {

};

with (a) {

};

do {
  a = 4;
} while (a);

for (var i = 0; i < 10; i++) {
  window.a = a;
};

for (var pro in window) {
  window[pro] = 0;
};

try {
  a = 45;
} catch (e) {
  a = e;
};


// 字符串

var str = 'str';
str = 'a"c"';
str = "a'c'";
str = '\abc';
str = '\"';
str = '\'';

// 对象
var obj = new Object();
var str = new String('abc');
var num = new Number(123);
var bool = new Boolean(true);
var str = new String;
var str = String(123);
var str = '123';
obj = {
  'a': 0,
  while: 123,
  'a-b': 123,
  '123': 'abc'
};

obj = {
  name: 'Eddy',
  while: 123,
  '123': true,
  'a-b': 'ab'
};

console.log(obj[123]);

var object = {};
// bad
object.
  property();

// good
object
  .property();