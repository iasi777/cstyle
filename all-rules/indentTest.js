/**
 * Created by jszhou on 2017/3/3.
 */
// 代码以两个空格为一个单元进行缩进。[indent](http://eslint.org/docs/rules/indent)

// // bad
// function test(x) {
//     return x;
// }
//
// // good
// function test(x) {
//   return x;
// }

// `switch` 中 `case` 语句缩进一个单元，`case` 后面的逻辑代码缩进两个单元。

// // bad
// switch (foo) {
// case 1:
//   break;
// case 1:
//   break;
// default:
//   break;
// }
//
// // good
// switch (foo) {
//   case 1:
//     break;
//   case 2:
//     break;
//   default:
//     break;
// }

// 函数体中的代码缩进一个单元。

// // bad
// function test() {
// console.log('abc');
// }
//
// // good
// function test() {
//   console.log('abc');
// }

// 函数参数如果换行也缩进一个单元。

// // bad
// function test(
// a,
// b
// ) {
//   // stuff
// }
//
// // good
// function test(
//   a,
//   b
// ) {
//   // stuff
// }
