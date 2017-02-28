## 命名约定

  - 避免单个字符名，让你的变量名有描述意义。

    ```javascript
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```

  - 当命名对象、函数和实例时使用驼峰命名规则。

    ```javascript
    // bad
    var OBJEcttsssss = {};
    var this_is_my_object = {};
    var o = {};
    function c() {}

    // good
    var thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  - 当命名构造函数或类时使用驼峰式大写。

    ```javascript
    // bad
    function user(options) {
      this.name = options.name;
    }

    var bad = new user({
      name: 'nope'
    });

    // good
    function User(options) {
      this.name = options.name;
    }

    var good = new User({
      name: 'yup'
    });
    ```

  - 不要在名称开头或结尾加下划线，很容易让人误以为是私有属性。更不要试图用名称格式来表示私有属性。
  
    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';
    this._firstName = 'Panda';

    // good
    this.firstName = 'Panda';
    ```

  - 不要保存 `this` 的引用。可以用 [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 绑定 `this`。

    ```javascript
    // bad
    function () {
      var self = this;
      return function () {
        console.log(self);
      };
    }

    // bad
    function () {
      var that = this;
      return function () {
        console.log(that);
      };
    }

    // bad
    function () {
      var _this = this;
      return function () {
        console.log(_this);
      };
    }

    // good
    function () {
      return function () {
        console.log(this);
      }.bind(this);
    }
    ```
