/**
 * Created by jszhou on 2017/3/1.
 */
// `{` 、`[` 和 `(` 之后，`)`、`]` 和 `}` 之前没有空格。eslint: [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing)， [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing), [space-in-parens](http://eslint.org/docs/rules/space-in-parens)
// bad
var arr = [ 1, 2 ];
var obj = { a: 1 };

while ( obj.a ) {
  // stuff

  obj.a = 0;
}

function test(x) { return x; }

// good
var arr = [1, 2];
var obj = {a: 1};

while (obj.a) {
  // stuff

  obj.a = 0;
}
