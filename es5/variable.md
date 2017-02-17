## 变量

  - 总是使用 `var` 来声明变量，如果不这么做将导致产生全局变量，我们要避免污染全局命名空间。

    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    var superPower = new SuperPower();
    ```

  - 使用一个 `var` 以及新行声明多个变量，缩进 2 个空格。

    ```javascript
    // bad
    var items = getItems();
    var goSportsTeam = true;
    var dragonball = 'z';

    // good
    var items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';
    ```

  - 最后再声明未赋值的变量，当你想引用之前已赋值变量的时候很有用。

    ```javascript
    // bad
    var i, len, dragonball,
      items = getItems(),
      goSportsTeam = true;

    // bad
    var i, items = getItems(),
      dragonball,
      goSportsTeam = true,
      len;

    // good
    var items = getItems(),
      goSportsTeam = true,
      dragonball,
      length,
      i;
    ```

  - 在作用域顶部声明变量，避免变量声明和赋值引起的相关问题。

    ```javascript
    // bad
    function() {
      test();
      console.log('doing stuff..');

      //..other stuff..

      var name = getName();

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // good
    function() {
      var name = getName();

      test();
      console.log('doing stuff..');

      //..other stuff..

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // bad
    function() {
      var name = getName();

      if (!arguments.length) {
        return false;
      }

      return true;
    }

    // good
    function() {
      if (!arguments.length) {
        return false;
      }

      var name = getName();

      return true;
    }
    ```
