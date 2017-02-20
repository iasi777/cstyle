module.exports = {
  'env': {
    'browser': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    // 分号
    // 语句结束一定要加分号
    'semi': ['error', 'always'],
    // 避免不必要的分号
    'no-extra-semi': 'error',
    // 在分号后面加空格，行末的分号除外
    'semi-spacing': ['error', {'before': false, 'after': true}]
  }
};
