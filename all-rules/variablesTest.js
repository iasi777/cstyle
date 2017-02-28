/**
 * Created by jszhou on 2017/2/28.
 */
// bad
var undefined = 123;

function test() {
  var undefined = 456;

  console.log(undefined);
}

// good
var outer = 123;

function test(out) {
  var inner = 456;

  console.log(out + inner);
}
