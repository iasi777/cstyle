## 数组中的对象

  - `[`, `]`, `{`, `}` 都单独占一行
    
    ```javascript
    // bad
    var messages = [{
      state: 'success',
      message: 'This one worked.'
    },{
      state: 'success',
      message: 'This one worked as well.'
    },{
      state: 'error',
      message: 'This one did not work.'
    }];
    
    // good
    var messages = [
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
    ```
