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
  - 
