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

// 对象字面量属性的分号后面加一个空格。eslint: [key-spacing](http://eslint.org/docs/rules/key-spacing)

// // bad
// var obj = {
//   a : 1,
//   b:  2
// };
//
// // good
// var obj = {
//   a: 1,
//   b: 2
// };

// 在关键词前后加一个空格，如果以关键词开头则前面不要加空格。eslint: [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing)

// // bad
// if(obj === 1) {
//   // stuff
// }else if(obj === 2) {
//   // stuff
// }
// while(obj ===1) {
//   // stuff
// }
// var fun = function() {
//   // stuff
// };
//
// // good
// if (obj === 1) {
//   // stuff
// } else if (obj === 2) {
//   // stuff
// }
// while (obj === 1) {
//   // stuff
// }
// var fun = function () {
//   // stuff
// };


// 用 `\n` （LF）换行，不要用 `\r\n` （CRLF）换行，一般需要设置编辑器。eslint: [linebreak-style](http://eslint.org/docs/rules/linebreak-style)

// // bad
// var a = 'a';\r\n
// // good
// var a = 'a';\n

// 块注释前必须有一空行。ealint: [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment)

// // bad
// var a = 'a';
// /**
//  * 块注释
//  */
// function test() {
//   // stuff
// }
//
// // good
// var a = 'a';
//
// /**
//  * 块注释
//  */
// function test() {
//   // stuff
// }

// 函数的参数不超过 3 个。eslint: [max-params](http://eslint.org/docs/rules/max-params)

// // bad
// function test(bar, baz, qux, qxx) {
//   // stuff
// }
//
// // good
// function test(config) {
//   // config 包含 bar, baz, qux, qxx 属性
//   // stuff
// }
