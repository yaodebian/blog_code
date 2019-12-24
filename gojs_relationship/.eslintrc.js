var rules = require('./eslint_rules')
module.exports = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint", // 解析器，这里我们使用babel-eslint
    "ecmaVersion": 6,
    "sourceType": "module", // 类型为module，因为代码使用了ECMAScript模块
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "env": {
    "browser": true, // 预定义的全局变量，这里是浏览器环境
    "node": true, // 预定义的全局变量，这里是node环境
    "es6": true // 预定义的全局变量，这里是ES6环境
  },
  "plugins": [
    "import",
    "vue"
  ],
  "extends": ['plugin:vue/base'],
  "rules": rules
}