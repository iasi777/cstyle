## 对象

  - 使用字面量创建对象

    ```javascript
    // bad
    var item = new Object();

    // good
    var item = {};
    ```

  - 不要使用保留字 [reserved words](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Reserved_Words) 作为键

    ```javascript
    // bad
    var superman = {
      class: 'superhero',
      default: {clark: 'kent'},
      private: true
    };

    // good
    var superman = {
      klass: 'superhero',
      defaults: {clark: 'kent'},
      hidden: true
    };
    ```
