/**
 * Created by jszhou on 2017/3/1.
 */
// `{` 、`[` 和 `(` 之后，`)`、`]` 和 `}` 之前没有空格。eslint: [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)， [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing), [space-in-parens](http://eslint.org/docs/rules/space-in-parens)
// // bad
// var arr = [ 1, 2 ];
// var obj = { a: 1 };
//
// while ( obj.a ) {
//   // stuff
//
//   obj.a = 0;
// }
//
// function test(x) { return x; }
//
// // good
// var arr = [1, 2];
// var obj = {a: 1};
//
// while (obj.a) {
//   // stuff
//
//   obj.a = 0;
// }

// 代码块的左括号始终和声明关键词在同一行，右括号也与相关关键词在同一行。eslint: [brace-style](http://eslint.org/docs/rules/brace-style)
// // bad
// function test()
// {
//   // stuff
// }
//
// if (window.a)
// {
//   // stuff
// } else
// {
//   // stuff
// }
//
// // good
// function test() {
//    // stuff
// }
//
// if (window.a) {
//   // stuff
// } else {
//   // stuff
// }

// 始终使用驼峰法命名标识符，对象属性可以例外但也尽量遵守。[camelcase](http://eslint.org/docs/rules/camelcase)
// // bad
// var a_and_b = 1;
//
// function test_fun() {
//   // stuff
// }
//
// // good
// var aAndB = 1;
//
// function testFun() {
//   // stuff
// }
//
// var obj = {
//   name_prop: 'zhou'
// };

// 不要出现尾逗号。eslint: [comma-dangle](http://eslint.org/docs/rules/comma-dangle)
// // bad
// var arr = [1, 2, 3,];
// var obj = {
//   a: 1,
//   b: 2,
// };
//
// function test(a,) {
//   // stuff
// }
//
//
// // good
// var arr = [1, 2, 3];
// var obj = {
//   a: 1,
//   b: 2
// };
//
// function test(a) {
//   // stuff
// }

// 在逗号后面加一个空格。eslint: [comma-spacing](http://eslint.org/docs/rules/comma-spacing)

// // bad
// var arr = [1,2,3];
//
// function test(a,b) {
//   return a + b;
// }
//
// // good
// var arr = [1, 2, 3];
//
// function test(a, b) {
//   return a + b;
// }

// 逗号只出现在行尾。[comma-style](http://eslint.org/docs/rules/comma-style)

// // bad
// var arr = [
//   1
//   , 2
//   , 3
// ];
// var obj = {
//   a: 1
//   , b: 2
//   , c: 3
// };
//
// // good
// var arr = [
//   1,
//   2,
//   3
// ];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// 计算属性的前后不要出现空格。eslint: [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing)

// // bad
// obj[ foo ] = 1;
// obj[ bar ] = 1;
//
// // good
// obj[foo] = 1;
// obj[bar] = 1;

// 在文件的末尾保留一空行。eslint: [eol-last](http://eslint.org/docs/rules/eol-last)

// // bad
// function test() {
//   // stuff
// }
//
// // good
// function test() {
//   // stuff
// }
// // 在这里留一空行

// 函数调用时，函数名与括号之间不要出现空格或换行。eslint: [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing)

// // bad
// test ();
// test
// ();
//
// // good
// test();
