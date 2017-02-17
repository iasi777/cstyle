## 模块

  - 模块应该以 `!` 开始，这保证了如果一个有问题的模块忘记包含最后的分号在合并后不会出现错误。
  - 这个文件应该以驼峰命名，并在同名文件夹下，同时导出的时候名字一致。
  - 加入一个名为 noConflict() 的方法来设置导出的模块为之前的版本并返回它。
  - 总是在模块顶部声明 `'use strict';` 。

    ```javascript
    // fancyInput/fancyInput.js

    !function(global) {
      'use strict';

      var previousFancyInput = global.FancyInput;

      function FancyInput(options) {
        this.options = options || {};
      }

      FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
      };

      global.FancyInput = FancyInput;
    }(this);
    ```
