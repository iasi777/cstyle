module.exports = {
  "env": {
    "browser": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    // 分号
    // 总是以分号结尾
    "semi": ["error", "always"],
    // 避免不必要的分号
    "no-extra-semi": "error",
    // 在分号后面加空格，行末除外
    "semi-spacing": ["error", {"before": false, "after": true}]
  }
};
