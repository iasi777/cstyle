/**
 * Created by jszhou on 2017/2/20.
 */
function fun() { };
var a = 1;
console.log(a);

// 分号

var a = 1;
console.log(a);

if (a) {

};
while (a) {

};

with (a) {

};

do {
  a = 4;
} while (a);

for (var i = 0; i < 10; i++) {
  window.a = a;
};

for (var pro in window) {
  window[pro] = 0;
};

try {
  a = 45;
} catch (e) {
  a = e;
};


// 字符串

var str = 'str';
str = 'a"c"';
str = "a'c'";
str = '\abc';
str = '\"';
str = '\'';

// 对象
var obj = new Object();
var str = new String('abc');
var num = new Number(123);
var bool = new Boolean(true);
var str = new String;
var str = String(123);
var str = '123';
obj = {
  'a': 0,
  while: 123,
  'a-b': 123,
  '123': 'abc'
};

obj = {
  name: 'Eddy',
  while: 123,
  '123': true,
  'a-b': 'ab'
};

console.log(obj[123]);

var object = {};
// bad
object.
  property();

// good
object
  .property();

// bad
obj = {name: 'jszhou', style: 'newline'};

// good
obj = {
  name: 'jszhou', 
  style: 'newline'
};
// ========================================================================================================
// 最佳实践
// 在对象中 `geter/setter` 必须成对出现。eslint: [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)

// bad
obj = {
  set a(val) {
    this.name = 'jszhou';
  }
};

obj = {
  get b() {
    return this.name;
  }
};

// good
obj = {
  set a(val) {
    this.name = 'jszhou';
  },
  get a() {
    return this.name;
  }
};

obj = {
  get b() {
    return this.name;
  },
  set b(val) {
    this.name = 'jszhou';
  }
};

// 数组方法 `from, every, filter, find, findIndex, map, reduce, reduceRight, some, sort` 的回调函数必须有 `return` 语句。eslint: [array-callback-return](http://eslint.org/docs/rules/array-callback-return)

// bad
[1,2,3].map(function (item) {
  item * item;
});

// good
[1,2,3].map(function (item) {
  return item * item;
});

// hide: 假装把 `var` 声明的变量看作块级作用域。eslint: [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)

// bad
function doIf(name) {
  if (name) {
    var build = true;
  }

  return build;
}

// good
function doIf(name) {
  if (name) {
    var build = true;
    return build;
  }
}

// ES6: 类的方法必需使用 `this`，否则定义为静态方法。eslint: [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this)

// bad
class A {
  fun() {
    console.log('abc');
  }
}

// good
class A {
  static fun() {
    console.log('abc');
  }
}


// 总是使用大括号表示区块。eslint: [curly](http://eslint.org/docs/rules/curly)

// bad
if (!name) name = 'jszhou';

while (name)
  name = '';

// good
if (!name) {
  name = 'jszhou';
}

while (name) {
  name = '';
}

// `switch` 语句中必须包含 `default` 分支，如果实在没有就用注释 `no default` 替代。eslint: [default-case](http://eslint.org/docs/rules/default-case)

// bad
switch (name) {
  case 1:
    name = 'z';
    break;
  case 2:
    name = 'h';
    break;
}

// good
switch (name) {
  case 1:
    name = 'z';
    break;
  case 2:
    name = 'h';
    break;
  default:
    name = 'o';
}

// good
switch (name) {
  case 1:
    name = 'z';
    break;
  case 2:
    name = 'h';
    break;
  // no default
}

// 属性访问时，如果换行，点符号 `.` 与属性在同一行。eslint: [dot-location](http://eslint.org/docs/rules/dot-location)

// bad
object.
  property();

// good
object
  .property();

// 尽量使用点符号 `.` 访问属性。eslint: [dot-notation](http://eslint.org/docs/rules/dot-notation)

// bad
var x = object['bar'];

// good
var x = object.bar;

// 始终使用 `===` 、 `!==` 比较符。eslint: [eqeqeq](// http://eslint.org/docs/rules/eqeqeq)

// bad
if (object == 'abc') {
  // stuff
}
if (object != 'abc') {
  // stuff
}

// good
if (object === 'abc') {
  // stuff
}
if (object !== 'abc') {
  // stuff
}
if (object != null) {
  // stuff
}

// 必须在 `for-in` 循环中添加 `if` 语句。[guard-for-in](http://eslint.org/docs/rules/guard-for-in)

var key;

// bad
for (key in foo) {
    doSomething(key);
}

// good
for (key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}

// good
for (key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}

// 尽量不要用原生的 `alert`, `confirm`, and `prompt` 方法。eslint: [no-alert](http://eslint.org/docs/rules/no-alert)

// bad
alert('hello');

// good
customAlert('hello');

// 不要用 `arguments.caller` or `arguments.callee`。[no-caller](http://eslint.org/docs/rules/no-caller)

// bad
function foo() {
  arguments.callee();
}

// good
function foo() {
  foo();
}

// 在 `case/default` 从句中不允许词法声明（`var`，`let`，`const`，`function`，`class`）[no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)

// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}

// good
var f;
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3:
    f = function () {};
    break;
  default: {
    class C {}
  }
}

// 不允许含有 `return` 的 `if` 语句后面带 `else`。[no-else-return](http://eslint.org/docs/rules/no-else-return)

// bad
function foo(num) {
  if (num === 1) {
    return 1;
  } else {
    return 2;
  }
}

// good
function foo(num) {
  if (num === 1) {
    return 1;
  }

  return 2;
}
