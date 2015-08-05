module.exports = {
    'plugins': [
        'bdd'
    ],
    'rules': {
        // Use the 'true bracy style'
        'brace-style': [2, '1tbs'],

        // allow brace-less single-line if, else, etc.
        curly: [2, 'multi-line'],

        // Enforce newline before a dot in a member expression
        'dot-location': [2, 'property'],

        // Enforce quote style
        'quotes': [2, 'single'],

        // Limit Cyclomatic Complexity
        'complexity': [1, 5],

        // Maximum depth blocks can be nested
        'max-depth': [1, 3],

        // Limit maximum number of statements
        'max-statements':[2, 15],

        // Enforce function declarations instead of expressions
        'func-style': [2, 'declaration'],

        // Disallow early use of variables but allow function declarations
        'no-use-before-define': [2, 'nofunc'],

        // Disallow use of console
        'no-console': 2,

        // Disallow null comparisons
        // e.g. if (foo == null) ...
        'no-eq-null': 2,

        // Disallow floating decimals
        // e.g. var num = .5;
        'no-floating-decimal': 2,

        // Disallows multiple blank lines
        'no-multiple-empty-lines': [2, {'max': 1}],

        // Nesting ternary expressions makes code unclear
        'no-nested-ternary': 2,

        // Disallow use of reserved words as object property names
        'no-reserved-keys': 2,

        // Disallow boolean literals in conditional expressions
        // e.g. bad: var a = x ? true : false;
        'no-unneeded-ternary': 2,

        // Comparing a variable against itself is usually an error,
        // either an typo or refactoring error
        'no-self-compare': 2,

        // It is considered good practice to only throw the Errorobject itself
        // or an object using the Error object as base objects for user-defined exceptions
        'no-throw-literal': 2,

        // Disallow use of void operator
        'no-void': 2,

        // Often code is marked during development process for later work on it or with additional thoughts.
        // These comments are a warning signal, that there is something not production ready in your code.
        'no-warning-comments': [2, { 'terms': ['todo', 'fixme'], 'location': 'start' }],

        // Enforces a space inside of curly braces in objects
        'object-curly-spacing': [2, 'always'],

        // Exactly one declarator per declaration per function (var) or block (let or const)
        'one-var': [2, 'never'],

        // placing operators at the beginning of the line makes the code more readable
        'operator-linebreak': [2, 'before'],

        // Never write padded blocks (start and end with blank lines)
        'padded-blocks': [2, 'never'],

        // Use literals for object property names (strings only as needed)
        'quote-props': [2, 'as-needed'],

        // Require spaces following keywords (e.g. if, else, for, ...)
        'space-after-keywords': 2,

        // Require space before the opening brace of blocks
        'space-before-blocks': 2,

        // Disallow spaces before function parenthesis
        'space-before-function-paren': [2, 'never'],

        // Disallow spaces inside of parentheses
        'space-in-parens': [2, 'never'],

        // Require a whitespace at the beginning of a commment
        'spaced-comment': [2, 'always'],

        // Validates JSDoc comments are syntactically correct
        'valid-jsdoc': [2, {
            'requireParamDescription': false,
            'requireReturnDescription': false
        }],

        // Catch focus tests
        // e.g. ddescribe, iit
        'bdd/focus': 2,

        // Catch excluded tests
        // e.g. xdescribe, xit
        'bdd/exclude': 2
    }
};
