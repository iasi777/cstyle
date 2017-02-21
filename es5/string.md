## 字符串

  - 对字符串使用单引号 `''`。eslint: [quotes](http://eslint.org/docs/rules/quotes)

    ```javascript
    // bad
    var name = "Bob Parr";

    // good
    var name = 'Bob Parr';

    // bad
    var fullName = "Bob " + this.lastName;

    // good
    var fullName = 'Bob ' + this.lastName;

    // bad
    var str = "a'b'c";

    // good
    var str = 'a"b"c';
    ```

  - 避免不必要的字符转码。eslint: [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)

    ```javascript
    // bad
    '\"';
    
    // good
    '\'';
    ```

  - 超过 80 个字符的字符串应该使用字符串连接换行。
  - 注: 如果过度使用，长字符串连接可能会对性能有影响。 [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40)

    ```javascript
    // bad
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    var errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    var errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

  - 编程时使用 `join` 而不是字符串连接来构建字符串，特别是IE: [jsPerf](http://jsperf.com/string-vs-array-concat/2) 。

    ```javascript
    var items;
    var messages;
    var length;
    var i;

    messages = [
      {
        state: 'success',
        message: 'This one worked.'
      }, 
      {
        state: 'success',
        message: 'This one worked as well.'
      }, 
      {
        state: 'error',
        message: 'This one did not work.'
      }
    ];

    length = messages.length;

    // bad
    function inbox(messages) {
      items = '<ul>';

      for (i = 0; i < length; i++) {
        items += '<li>' + messages[i].message + '</li>';
      }

      return items + '</ul>';
    }

    // good
    function inbox(messages) {
      items = [];

      for (i = 0; i < length; i++) {
        // use direct assignment in this case because we're micro-optimizing.
        items[i] = '<li>' + messages[i].message + '</li>';
      }

      return '<ul>' + items.join('') + '</ul>';
    }
    ```
