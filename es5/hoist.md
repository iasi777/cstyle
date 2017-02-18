## 声明提升

  - 变量声明会被提升到作用域的顶部，此时变量未被赋值，其值为 `undefined` 。

    ```javascript
    // 下面代码不能正常运行（假设 notDefined 不是全局变量）
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // 在变量声明之前引用变量不会报错，是因为有变量提升。
    // 注意：给变量赋值为 `true` 这个操作不会被提升。
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // JavaScript 解析器会把变量声明提升到作用域的顶部，上面的代码解析完以后如下：
    function example() {
      var declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }
    ```

  - 用于变量赋值的匿名函数表达式只会提升变量名，不会提升函数体。

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function () {
        console.log('anonymous function expression');
      };
    }
    ```

  - 用于变量赋值的有名函数表达式只会提升变量名，不会提升函数名和函数体。

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // 变量名和函数命相同也一样。
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - 函数声明也会被提升到作用域的顶部，且会同时提升函数名和函数体。

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - 点击 [众成翻译：详解 JavaScript 变量提升](http://www.zcfy.cc/article/465) 了解更多信息。