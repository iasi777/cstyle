## 类型

  - **原始值**: 相当于传值

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`

    ```javascript
    var foo = 1,
      bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **复杂类型**: 相当于传引用

    - `object`
    - `array`
    - `function`

    ```javascript
    var foo = [1, 2],
      bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```
