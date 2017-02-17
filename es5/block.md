## 块

  - 代码块始终使用大括号

    ```javascript
    // bad
    if (test)
      return false;

    // bad
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    function() { return false; }

    // good
    function() {
      return false;
    }
    ```
