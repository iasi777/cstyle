## 类型

  - **原始值**：直接存取值。

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`

    ```javascript
    var foo = 1;
    var bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **复杂类型**：存取值的引用。

    - `object`
    - `array`
    - `function`

    ```javascript
    var foo = [1, 2];
    var bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```
