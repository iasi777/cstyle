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


  - 不要使用保留字 [reserved words](http://es5.github.io/#x7.6.1) 作为键。 它在 IE8 下不能正常运行。 [更多信息](https://github.com/airbnb/javascript/issues/61)。

    ```javascript
    // bad
    var superman = {
      default: { clark: 'kent' },
      private: true
    };

    // good
    var superman = {
      defaults: { clark: 'kent' },
      hidden: true
    };
    ```
  
  
  - 可以用同义字替代保留字。
  
    ```javascript
    // bad
    var superman = {
      class: 'alien'
    };
  
    // bad
    var superman = {
      klass: 'alien'
    };
  
    // good
    var superman = {
      type: 'alien'
    };
    ```
