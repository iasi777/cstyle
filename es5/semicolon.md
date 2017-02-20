## 分号

  - 语句结束一定要加分号。eslint: [semi](http://eslint.org/docs/rules/semi.html)

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
  - 避免不必要的分号，
  
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
