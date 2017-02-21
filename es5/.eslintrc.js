module.exports = {
  'env': {
    'browser': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],

    // 字符串
    // 对字符串使用单引号 `''`
    'quotes': ['error', 'single'],
    // 避免不必要的字符转码
    'no-useless-escape': 'error',

    // 对象
    // 使用字面量创建对象
    'no-new-object': 'error',
    // 不要用 new 创建字符串，数值，布尔值的包装对象
    'no-new-wrappers': 'error',

    // 分号
    // 语句结束一定要加分号
    'semi': ['error', 'always'],
    // 避免不必要的分号，`if-else`、`while`、`for`、`for-in`、`try-catch-finally`、函数声明、等的代码块后面不需要分号
    'no-extra-semi': 'error',
    // 在分号后面加空格，行末的分号除外
    'semi-spacing': ['error', {'before': false, 'after': true}]
  }
};
