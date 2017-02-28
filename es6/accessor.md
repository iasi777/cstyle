## 存取器

  - 属性的存取器函数不是必需的。
  - 如果你确实有存取器函数的话使用 getVal() 和 setVal('hello') 。

    ```javascript
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

  - 如果属性是布尔值，使用 isVal() 或 hasVal() 。

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  - 可以创建 get() 和 set() 函数，但是要一起存在。

    ```javascript
    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };
    ```
