## 对象

  - 使用字面量创建对象。eslint: [no-new-object](http://eslint.org/docs/rules/no-new-object)

    ```javascript
    // bad
    var item = new Object();

    // good
    var item = {};
    ```
    
  - 不要用 new 创建字符串，数值，布尔值的包装对象。eslint: [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)

    ```javascript
    // bad
    var str = new String(123);
    var str = new String;

    // good
    var str = '123';

    // good
    var str = String(123);
    ```
  
  - 只给非法[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)的对象属性名称加引号。eslint: [quote-props](http://eslint.org/docs/rules/quote-props)

    ```javascript
    // bad
    var obj = {
      'name': 'Eddy',
      'while': 123,
      123: true,
      a-b: 'ab'
    };

    // good
    var obj = {
      name: 'Eddy',
      while: 123,
      '123': true,
      'a-b': 'ab'
    };
    ```

  - 属性访问时，如果换行，点符号 `.` 与属性在同一行。eslint: [dot-location](http://eslint.org/docs/rules/dot-location)

    ```javascript
    // bad
    object.
      property();

    // good
    object
      .property();
    ```

## 参考资料

  - [Unquoted property names / object keys in JavaScript](https://mathiasbynens.be/notes/javascript-properties)
