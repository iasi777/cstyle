## 分号

  - 语句结束一定要加分号。eslint: [semi](http://eslint.org/docs/rules/semi)

    ```javascript
    // bad
    (function() {
      var name = 'Skywalker'
      return name
    })()

    // good
    (function() {
      var name = 'Skywalker';
      return name;
    })();
    ```

  - 避免不必要的分号，`if-else`、`while`、`for`、`for-in`、`try-catch-finally`、函数声明、等的代码块后面不需要分号。eslint: [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)
  
    ```javascript
    // bad
    var a = 5;;
    if (a) {
      // stuff
    };

    // good
    var a = 5;
    if (a) {
      // stuff
    }
    ```

  - 在分号后面加空格，行末的分号除外。eslint: [semi-spacing](http://eslint.org/docs/rules/semi-spacing)

    ```javascript
    var sum;

    // bad
    for (var i = 0;i < 5;i++) {
      sum += i;
    }

    // good
    for (var i = 0; i < 5; i++) {
      sum += i;
    }
    ```
