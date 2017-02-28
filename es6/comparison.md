## 比较运算符和相等

  - 用 `===` 和 `!==` 替代 `==` 和 `!=`.
  - 条件表达式的强制类型转换遵循以下规则：

    - **对象** 被计算为 **true**
    - **Undefined** 被计算为 **false**
    - **Null** 被计算为 **false**
    - **布尔值** 被计算为 **布尔的值**
    - **数字** 如果是 **+0, -0, or NaN** 被计算为 **false** , 否则为 **true**
    - **字符串** 如果是空字符串 `''` 则被计算为 **false**, 否则为 **true**

    ```javascript
    if ([0]) {
      // true
      // An array is an object, objects evaluate to true
    }
    ```

  - 使用快捷方式.

    ```javascript
    // bad
    if (name !== '') {
      // ...stuff...
    }

    // good
    if (name) {
      // ...stuff...
    }

    // bad
    if (collection.length > 0) {
      // ...stuff...
    }

    // good
    if (collection.length) {
      // ...stuff...
    }
    ```

  - 阅读 `Truth Equality and JavaScript` [中文版](http://xiaoyuze88.github.io/blog/2013/04/13/JS中的判断为真与相等-Truth,-Equalit-and-JavaScript) - [英文版](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) 了解更多
