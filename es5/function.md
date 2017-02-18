## 函数

  - 函数表达式:

    ```javascript
    // 匿名函数表达式
    var anonymous = function () {
      return true;
    };

    // 有名函数表达式
    var named = function named() {
      return true;
    };

    // 立即调用函数表达式
    (function () {
      console.log('Welcome to the Internet. Please follow me.');
    })();
    ```

  - 不要在一个非函数块（if，while，等）里声明一个函数，浏览器允许你这么做，但是它们解析不同。在非函数块里，可以把函数赋值给一个变量。
  - **注:** ECMA-262 定义把`块`定义为一组语句，函数声明不是一个语句。[阅读ECMA-262对这个问题的说明](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97) 。

    ```javascript
    // bad
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // good
    if (currentUser) {
      var test = function test() {
        console.log('Yup.');
      };
    }
    ```

  - 不要把参数命名为 `arguments`, 这将会覆盖函数作用域内的 [arguments 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments) 。

    ```javascript
    // bad
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // good
    function yup(name, options, args) {
      // ...stuff...
    }
    ```
