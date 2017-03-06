module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    Ext: false,
    Mjx: false
  },
  rules: {
    // ========================================================================================================
    // 最佳实践
    // 在对象中 `getter/setter` 必须成对出现。eslint: [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)
    'accessor-pairs': ['error', {setWithoutGet: true, getWithoutSet: true}],

    // 数组方法 `from, every, filter, find, findIndex, map, reduce, reduceRight, some, sort` 的回调函数必须有 `return` 语句。eslint: [array-callback-return](http://eslint.org/docs/rules/array-callback-return)
    'array-callback-return': 'error',

    // hide: 假装把 `var` 声明的变量看作块级作用域。eslint: [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)
    'block-scoped-var': 'off',

    // ES6: 类的方法必需使用 `this`，否则定义为静态方法。eslint: [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this)
    'class-methods-use-this': ['error', {
      exceptMethods: []
    }],

    // hide: specify the maximum cyclomatic complexity allowed in a program。eslint: [complexity](http://eslint.org/docs/rules/complexity)
    complexity: ['off', 11],

    // hide: require return statements to either always or never specify values。eslint: [consistent-return](http://eslint.org/docs/rules/consistent-return)
    'consistent-return': 'error',

    // 总是使用大括号表示区块。eslint: [curly](http://eslint.org/docs/rules/curly)
    curly: 'error',

    // `switch` 语句中必须包含 `default` 分支，可以用注释 `no default` 替代。eslint: [default-case](http://eslint.org/docs/rules/default-case)
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 属性访问时，如果换行，点符号 `.` 与属性在同一行。eslint: [dot-location](http://eslint.org/docs/rules/dot-location)
    'dot-location': ['error', 'property'],

    // 尽量使用点符号访问属性。eslint: [dot-notation](http://eslint.org/docs/rules/dot-notation)
    'dot-notation': ['error', { allowKeywords: true }],

    // 始终使用 `===` 、 `!==` 比较符。eslint: [eqeqeq](// http://eslint.org/docs/rules/eqeqeq)
    eqeqeq: 'error',

    // 必须在 `for-in` 循环中添加 `if` 语句。[guard-for-in](http://eslint.org/docs/rules/guard-for-in)
    'guard-for-in': 'error',

    // 尽量不要用原生的 `alert`, `confirm`, and `prompt` 方法。eslint: [no-alert](http://eslint.org/docs/rules/no-alert)
    'no-alert': 'warn',

    // 不要用 `arguments.caller` or `arguments.callee`。[no-caller](http://eslint.org/docs/rules/no-caller)
    'no-caller': 'error',

    // 在 `case/default` 从句中不允许词法声明（`var`，`let`，`const`，`function`，`class`）[no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // 不允许含有 `return` 的 `if` 语句后面带 `else`。[no-else-return](http://eslint.org/docs/rules/no-else-return)
    'no-else-return': 'error',

    // disallow empty functions, except for standalone funcs/arrows。[no-empty-function](http://eslint.org/docs/rules/no-empty-function)
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'error',

    // disallow use of eval()
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // disallow adding to native types
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    // 开启了 no-labels
    'no-extra-label': 'off',

    // disallow fallthrough of case statements
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // deprecated in favor of no-global-assign
    'no-native-reassign': 'off',

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'error',

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // disallow use of eval()-like methods setTimeout() and setInterval()
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // http://eslint.org/docs/rules/on-invalid-this
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    // http://eslint.org/docs/rules/on-iterator
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // http://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // disallow use of multiline strings
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // disallow use of new operator for Function object
    // http://eslint.org/docs/rules/
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // 不要用 new 创建字符串，数值，布尔值的包装对象
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // disallow use of (old style) octal literals
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { props: false }],

    // disallow usage of __proto__ property
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // disallow declaring the same variable more than once
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ['error', {builtinGlobals: true}],

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // disallow use of assignment in return statement
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // disallow redundant `return await`
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // disallow use of `javascript:` urls.
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // disallow use of comma operator
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // disallow usage of expressions in statement position
    // http://eslint.org/docs/rules/
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    // 开启了 no-labels
    'no-unused-labels': 'off',

    // disallow unnecessary .call() and .apply()
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // 避免不必要的字符转码
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    // TODO: enable, semver-major
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],

    // require use of the second argument for parseInt()
    // http://eslint.org/docs/rules/radix
    radix: 'error',

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // requires to declare all vars on top of their containing scope
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    // http://eslint.org/docs/rules/yada
    yoda: 'error',


    // ==========================================================================================================
    // 错误
    // Disallow await inside of loops
    // http://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // disallow assignment in conditional expressions
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',

    // disallow control characters in regular expressions
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // disallow use of debugger
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // disallow duplicate keys when creating object literals
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // disallow empty statements
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],

    // disallow unnecessary semicolons
    // 避免不必要的分号，`if-else`、`while`、`for`、`for-in`、`try-catch-finally`、函数声明、等的代码块后面不需要分号
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // disallow function or variable declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // disallow the use of object properties of the global object (Math, JSON and Reflect) as functions
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    // // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // disallow comparisons with the value NaN
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],


    // ==================================================================================================
    // style
    // enforce spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'never'],

    // enforce one true brace style
    // http://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // require camel case names
    // http://eslint.org/docs/rules/camelcase
    camelcase: ['error', { properties: 'never' }],

    // enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // require trailing commas in multiline object literals
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'never'],

    // enforce spacing before and after comma
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': ['error', 'last'],

    // disallow padding inside computed properties
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    // http://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // requires function names to match the name of the variable or property to which they are assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],

    // require function expressions to have a name
    // http://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // enforces use of function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    // TODO: enable
    'func-style': ['off', 'expression'],

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths(variable names, property names etc.)
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      CallExpression: {
        arguments: 1,
      },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': ['error', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': ['error', {
      beforeBlockComment: true
    }],

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'never',
      after: 'always',
    }],

    // specify the maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 400,
      skipBlankLines: false,
      skipComments: false
    }],

    // specify the maximum depth callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    // http://eslint.org/docs/rules/max-params
    'max-params': ['error', 3],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // specify the maximum number of statement allowed in a function
    // http://eslint.org/docs/rules/max-statements
    'max-statements': ['off', 10],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    // http://eslint.org/docs/rules/new-cap
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // require an empty line before return statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'error',

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    // http://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // disallow multiple empty lines and only one newline at the end
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // 使用字面量创建对象
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'ForOfStatement',
      'WithStatement',
    ],

    // disallow tab characters entirely
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // disallow the use of ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    //http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ['error', {skipBlankLines: true}],

    // disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // require padding inside curly braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'never'],

    // enforce "same line" or "multiple line" on object properties.
    // 对象的每一个属性都在新的一行
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false,
    }],

    // allow just one var statement per function
    // http://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['off', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // enforce operators to be placed before or after line breaks
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // enforce padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    // 只给非法标识符的对象属性名称加引号
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: true }],

    // specify whether double or single quotes should be used
    // 对字符串使用单引号 `''`
    // http://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    // 语句结束一定要加分号
    // http://eslint.org/docs/rules/semi
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    // 在分号后面加空格，行末的分号除外
    // // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // requires object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // require or disallow space before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // require or disallow spaces inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: false,
      }
    }],

    // Require or disallow spacing between template tags and their literals
    // http://eslint.org/docs/rules/template-tag-spacing
    // TODO: enable, semver-major
    'template-tag-spacing': ['off', 'never'],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    // ==============================================================================================
    // 变量
    // enforce or disallow variable initializations at definition
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // In IE8 and earlier,  the catch clause parameter can leak into outer scopes
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    // 开启了 no-labels
    'no-label-var': 'off',

    // disallow specific globals
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // disallow declaration of variables already declared in the outer scope
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 'error',

    // disallow shadowing of names such as `NaN Infinity undefined eval arguments`
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    // 与 no-shadow-restricted-names 重复
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'error',

    // ==================================================================
    // node
    // enforce return after a callback
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // disallow process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'off',

    // ==============================================================================
    // es6
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],

    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // disallow modifying variables that are declared using const
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // disallow to use this/super before super() calling in constructors.
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // require let or const instead of var
    // http://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    // TODO: enable
    'prefer-destructuring': ['off', {
      array: true,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    // TODO: enable?
    'prefer-reflect': 'off',

    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // require a Symbol description
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],

    // ======================================================================
    // strict
    // babel inserts `'use strict';` for us
    // http://eslint.org/docs/rules/strict
    strict: ['error', 'never']
  }
};
