/**
 * Created by jszhou on 2017/2/28.
 */
// 不要用 `undefined` 作标识符来声明变量或函数。eslint: [no-undefined](http://eslint.org/docs/rules/no-undefined)
// bad
// var undefined = 123;
//
// function test() {
//   var undefined = 456;
//
//   console.log(undefined);
// }
//
// // good
// var outer = 123;
//
// function test(out) {
//   var inner = 456;
//
//   console.log(out + inner);
// }

//
// bad
test();
function test() {
  // stuff
}

// good
function test() {
  // stuff
}
test();

// [MDN: undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
