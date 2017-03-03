/**
 * Created by jszhou on 2017/2/28.
 */

// 不要用 `delete` 删除变量和函数声明。[no-delete-var](http://eslint.org/docs/rules/no-delete-var)
// // bad
// var a = 1;
// function test() {
//   // stuff
// }
//
// delete a;
// delete test;
//
// // good
// var obj = {
//   a: 1,
//   test: function () {
//     // stuff
//   }
// };
//
// delete obj.a;
// delete obj.test;

// 不要在同一作用域或嵌套作用域中定义同名变量或同名函数，也不要定义与内置全局对象同名的变量或函数。eslint: [no-redeclare](http://eslint.org/docs/rules/no-redeclare), [no-shadow](http://eslint.org/docs/rules/no-shadow)
// // bad
// var outer = 0;
// var outer = 1;
// var Object = {};
//
// function test() {
//   var outer = 2;
// }
//
// // good
// var outer = 0;
// var other = 1;
// var obj = {};
//
// function test() {
//   var inner = 2;
// }


// 不要用 `NaN, Infinity, undefined, eval, arguments` 作标识符来声明变量和函数。eslint: [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)
// // bad
// function test() {
//   var NaN = 'abc';
//   var Infinity = 'abc';
//   var undefined = 'abc';
//   var eval = 'abc';
//   var arguments = 'abc';
// }
//
// // good
// function test() {
//   var notNum = 'abc';
//   var Infin = 'abc';
//   var undef = 'abc';
//   var evaluate = 'abc';
//   var args = 'abc';
// }


// 不要用没有声明的变量和函数，在 `.eslintrc` 的 `globals` 配置项中和用`/* global */` 说明的除外。eslint: [no-undef](http://eslint.org/docs/rules/no-undef)
// // bad
// console.log(foo);
//
// // good
// /* global foo */
// console.log(foo);

// 不要用 `undefined` 初始化变量，因为没有赋值的变量的默认值为 `undefined`。eslint: [no-undef-init](http://eslint.org/docs/rules/no-undef-init)
// // bad
// var name = undefined;
//
// // good
// var name;

// 删除没有用到的声明和参数。eslint: [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)
// // bad
// function test(init, plus) {
//   var add = 1;
//
//   return Number(init);
// }
//
// // good
// function test(init) {
//   return Number(init);
// }

// 变量和函数应该先定义再使用。eslint: [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)
// // bad
// test();
// function test() {
//   // stuff
// }
//
// // good
// function test() {
//   // stuff
// }
// test();

// [MDN: undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
