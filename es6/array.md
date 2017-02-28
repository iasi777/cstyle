## 数组

  - 使用字面量创建数组

    ```javascript
    // bad
    var items = new Array();

    // good
    var items = [];
    ```

  - 给数组添加数据项，使用 `push`

    ```javascript
    var someStack = [];

    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  - 当你需要拷贝数组时使用 [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 。 [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7) 。

    ```javascript
    var len = items.length,
      itemsCopy = [],
      i;

    // bad
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = items.slice();
    ```
    
  - 使用 `slice` 将类数组对象转成数组
  
    ```javascript
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      // ...stuff...
    }
    ```
