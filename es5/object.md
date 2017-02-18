## 对象

  - 使用字面量创建对象

    ```javascript
    // bad
    var item = new Object();

    // good
    var item = {};
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
