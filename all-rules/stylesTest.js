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

// 调用构造函数时，不要省略括号。eslint: [new-parens](http://eslint.org/docs/rules/new-parens)

// // bad
// var person = new Person;
//
// // good
// var person = new Person();

// 使用字面量创建数组。eslint: [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor)

// // bad
// var items = new Array();
//
// // good
// var items = [];

// 不要使用位运算，位运算会增加项目维护难度。eslint: [no-bitwise](http://eslint.org/docs/rules/no-bitwise)

// // bad
// var x = y | z;
// var s = y & z;
//
// // good
// var x = y || z;
// var s = y && z;

// 不要使用 `continue` 语句。eslint: [no-continue](http://eslint.org/docs/rules/no-continue)

// var sum = 0;
// var i;
//
// // bad
// for (i = 0; i < 10; i++) {
//   if (i >= 5) {
//     continue;
//   }
//
//   sum += i;
// }
// // good
// for (i = 0; i < 10; i++) {
//   if (i < 5) {
//     sum += i;
//   }
// }

// 不要出现行内注释。eslint: [no-inline-comments](http://eslint.org/docs/rules/no-inline-comments)

// // bad
// var a = 1; // declaring a to 1
//
// // good
// // declaring a to 1
// var a = 1;

// 不要在 `else` 语句中出现单独的 `if` 语句。eslint: [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if)

// // bad
// if (foo) {
//   // ...
// } else {
//   if (bar) {
//     // ...
//   }
// }
//
// // good
// if (foo) {
//   // ...
// } else if (bar) {
//   // ...
// }

// 不要链式赋值。eslint: [no-multi-assign](http://eslint.org/docs/rules/no-multi-assign)

// // bad
// var b = a = 1;
//
// // good
// var a = 1;
// var b = a;

// 代码之间最多有两个空行，文件末尾最多有两个空行。eslint: [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines)

// // bad
// var a = 1;
//
//
//
// var b = 1;
//
// // good
// var a = 1;
//
// var b = 1;

// 不要有嵌套的三元运算符。eslint: [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)

// // bad
// var thing = foo ? bar : baz === qux ? quxx : foobar;
//
// // good
// var other = baz === qux ? quxx : foobar;
// var thing = foo ? bar : other;

// 使用字面量创建对象。eslint: [no-new-object](http://eslint.org/docs/rules/no-new-object)

// // bad
// var item = new Object();
//
// // good
// var item = {};

// 不要用多余的三元运算符。eslint: [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary)

// // bad
// var isYes = answer === 1 ? true : false;
// var isNo = answer === 1 ? false : true;
// var b = a ? a : 1;
//
// // good
// var isYes = answer === 1;
// var isNo = answer !== 1;
// var b = a || 1;

// 对象的左花括号右边和右花括号左边不要出现空格。eslint: [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)

// //bad
// var obj = { a: 1 };
//
// // good
// var obj = {a: 1};

// 对象的每一个属性都在新的一行。eslint: [object-property-newline](http://eslint.org/docs/rules/object-property-newline)

// // bad
// var obj = {type: 'object', style: 'newline'};
//
// // good
// var obj = {
//   name: 'object',
//   style: 'newline'
// };

// 每个变量声明前都加 `var`，`let` 或 `const` 。eslint: [one-var](http://eslint.org/docs/rules/one-var)

// // bad
// var a = 1,
//   b = 1,
//   c = 1;
//
// // good
// var a = 1;
// var b = 1;
// var c = 1;

// 尽量使用简短的赋值运算符。eslint: [operator-assignment](http://eslint.org/docs/rules/operator-assignment)

// // bad
// x = x + y;
// x = x * y;
//
// // good
// x += y;
// x *= y;

// 只给非法标识符的对象属性名称加引号。eslint: [quote-props](http://eslint.org/docs/rules/quote-props)

// // bad
// obj = {
//   'a': 1,
//   'while': 1,
//   '123': 1,
//   'a-b': 1
// };
//
// // good
// obj = {
//   a: 1,
//   while: 1,
//   '123': 1,
//   'a-b': 1
// };

// 对字符串使用单引号 `''`。eslint: [quotes](http://eslint.org/docs/rules/quotes)

// // bad
// var str = "str";
//
// // good
// var str = 'str';

// 语句结束一定要加分号。eslint: [semi](http://eslint.org/docs/rules/semi)

// // bad
// var name = "ESLint"
//
// object.method = function () {
//   // ...
// }
//
// // good
// var name = "ESLint";
//
// object.method = function () {
//   // ...
// };

// 在分号后面加空格，行末的分号除外。[semi-spacing](http://eslint.org/docs/rules/semi-spacing)

// // bad
// for (var i = 0;i < 5;i++) {
//   // stuff
// }
//
// // good
// for (var i = 0; i < 5; i++) {
//   // stuff
// }

// 在不换行的左花括号之前加一个空格。eslint: [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks)

// // bad
// if (a){
//   b();
// }
//
// function a(){}
//
// for (; ; ){
//   b();
// }
//
// try {} catch (a){}
//
// class Foo{
//   constructor(){}
// }
//
// // good
// if (a) {
//   b();
// }
//
// function a() {}
//
// for (; ; ) {
//   b();
// }
//
// try {} catch (a) {}
//
// class Foo {
//   constructor() {}
// }

// 匿名函数的左括号之前加一个空格，有名函数的左括号之前不加空格，异步箭头函数的左括号之前加一个空格。eslint: [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren)

// // bad
// function foo () {
//   // ...
// }
//
// var bar = function() {
//   // ...
// };
//
// class Foo {
//   constructor () {
//     // ...
//   }
// }
//
// var foo = {
//   bar () {
//     // ...
//   }
// };
//
// var foo = async(a) => await a;
//
// // good
// function foo() {
//   // ...
// }
//
// var bar = function () {
//   // ...
// };
//
// class Foo {
//   constructor() {
//     // ...
//   }
// }
//
// var foo = {
//   bar() {
//     // ...
//   }
// };
//
// var foo = async (a) => await a;


// 不要在左括号右边和右括号左边加空格。eslint: [space-in-parens](http://eslint.org/docs/rules/space-in-parens)

// // bad
// foo( 'bar');
// foo('bar' );
// foo( 'bar' );
//
// var foo = ( 1 + 2 ) * 3;
// ( function () {
//   return 'bar';
// } )();
//
// // good
// foo();
//
// foo('bar');
//
// var foo = (1 + 2) * 3;
// (function () {
//   return 'bar';
// })();

//
