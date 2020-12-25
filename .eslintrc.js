//eslint 检查配置

/*默认eslint规则：
代码末尾不能加分号 ;
代码中不能存在多行空行；
tab键不能使用，必须换成两个空格；
代码中不能存在声明了但未使用的变量；
https://eslint.org/docs/user-guide/configuring
*/

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  
  //新增自定义规则，on:https://github.com/vuejs/eslint-config-vue
  /*"off"或者0    //关闭规则关闭
    "warn"或者1    //在打开的规则作为警告（不影响退出代码）
    "error"或者2    //把规则作为一个错误（退出代码触发时为1）
  */
  rules: {
    "vue/max-attributes-per-line": [2,{
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline":"off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': ["error", "always", {"null": "ignore"}],
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,//new时必须加小括号
    'no-array-constructor': 2,//禁止使用数组构造器
    'no-caller': 2,//禁止使用arguments.caller或arguments.calle
    'no-console': 'off',//禁止使用console
    'no-class-assign': 2,//禁止给类赋值
    'no-cond-assign': 2,//禁止在条件表达式中使用赋值语句
    'no-const-assign': 2,//禁止修改const声明的变量
    'no-control-regex': 0,//禁止在正则表达式中使用控制字符
    'no-delete-var': 2,//不能对var声明的变量使用delete操作符
    'no-dupe-args': 2,//函数参数不能重复
    'no-dupe-class-members': 2,//禁止类成员中有相同名称
    'no-dupe-keys': 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2,//switch中的case标签不能重复
    'no-empty-character-class': 2,//正则表达式中的[]内容不能为空
    'no-empty-pattern': 2,//禁止空块语句
    'no-eval': 2,//禁止使用eval
    'no-ex-assign': 2,//禁止给catch语句中的异常参数赋值
    'no-extend-native': 2,//禁止扩展native对象
    'no-extra-bind': 2,//禁止不必要的函数绑定
    'no-extra-boolean-cast': 2,//禁止不必要的bool转换
    'no-extra-parens': [2, 'functions'],//禁止非必要的括号
    'no-fallthrough': 2,//禁止switch穿透
    'no-floating-decimal': 2,//禁止省略浮点数中的0
    'no-func-assign': 2,//禁止/禁止使用隐式eval重复的函数声明
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],//禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2,//禁止无效的正则表达式
    'no-irregular-whitespace': 2,//不能有不规则的空格
    'no-iterator': 2,//禁止使用__iterator__ 属性
    'no-label-var': 2,//label名不能与var声明的变量名相同
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],//禁止标签声明
    'no-lone-blocks': 2,//禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2,//禁止混用tab和空格
    'no-multi-spaces': 2,//不能用多余的空格
    'no-multi-str': 2,//字符串不能用\换行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],//空行最多不能超过2行
    'no-native-reassign': 2,//不能重写native对象
    'no-negated-in-lhs': 2,//in 操作符的左边不能有!
    'no-new-object': 2,//禁止使用new Object()
    'no-new-require': 2,//禁止使用new require
    'no-new-symbol': 2,//禁止Symbol与new操作员的意外呼叫
    'no-new-wrappers': 2,//禁止使用new创建包装实例，new String new Boolean new Number
    'no-obj-calls': 2,//不能调用内置的全局对象，比如Math() JSON()
    'no-octal': 2,//禁止使用八进制数字
    'no-octal-escape': 2,//禁止使用八进制转义序列
    'no-path-concat': 2,//node中不能使用__dirname或__filename做路径拼接
    'no-proto': 2,//禁止使用__proto__属性
    'no-redeclare': 2,//禁止重复声明变量
    'no-regex-spaces': 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-return-assign': [2, 'except-parens'],//return 语句中不能有赋值表达式
    'no-self-assign': 2,//禁止自我分配
    'no-self-compare': 2,//不能比较自身
    'no-sequences': 2,//禁止使用逗号运算符
    'no-shadow-restricted-names': 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-spaced-func': 2,//函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2,//禁止稀疏数组， [1,,2]
    'no-this-before-super': 2,//在调用super()之前不能使用this或super
    'no-throw-literal': 2,//禁止抛出字面量错误 throw "error";
    'no-trailing-spaces': 2,//一行结束后面不要有空格
    'no-undef': 2,//不能有未定义的变量
    'no-undef-init': 2,//变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2,//避免多行表达式
    'no-unmodified-loop-condition': 2,//禁止未修改得循环条件
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2,//不能有无法执行的代码
    'no-unsafe-finally': 2,//禁止不安全得finally块
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],//不能有声明后未被使用的变量或参数
    'no-useless-call': 2,//禁止不必要的call和apply
    'no-useless-computed-key': 2,//禁止不必要地使用计算属性键
    'no-useless-constructor': 2,//禁止无用构造器
    'no-useless-escape': 0,//不改变行为的情况下安全地移除
    'no-whitespace-before-property': 2,//属性前禁止空格
    'no-with': 2,//禁用with
    'one-var': [2, {
      'initialized': 'never'
    }],//禁用var，用let和const代替
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],//换行时运算符在行尾还是行首
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],//块语句内行首行尾是否要空行
    'semi': [2, 'never'],//语句强制分号结尾
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],//分号前后空格
    'space-before-blocks': [2, 'always'],//不以新行开始的块{前面要不要有空格
    'space-before-function-paren': [2, 'never'],//函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'],//小括号里面要不要有空格
    'space-infix-ops': 2,//中缀操作符周围要不要有空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],//一元运算符的前/后要不要加空格
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],//注释风格要不要有空格什么的
    'template-curly-spacing': [2, 'never'],//不允许大括号内的空格
    'use-isnan': 2,//禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2,//必须使用合法的typeof的值
    'wrap-iife': [2, 'any'],//立即执行函数表达式的小括号风格
    'yield-star-spacing': [2, 'both'],//此规则强制执行*周围 yield*表达式的间距。要使用这个规则，你要么需要使用es6环境或在parserOptions设置ecmaVersion为6。
    'yoda': [2, 'never'],//禁止尤达条件
    'prefer-const': 2,//禁止你申明后变量未赋值
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,//禁止debugger调试
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],//要求以大括号开头和/或以数组元素结尾的间距
    'array-bracket-spacing': [2, 'never']//是否允许非空数组里面有多余的空格
  }
}
