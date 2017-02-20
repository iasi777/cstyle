/**
 * Created by jszhou on 2017/2/20.
 */
function fun() {};
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

for (var pro in window){
  window[pro] = 0;
};

try {
  a = 45;
} catch (e) {
  a = e;
};

