module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'es6': true
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'plugins': [
        'classes'
    ],
    'rules': {
        // Require let or const instead of var
        'no-var': 2,

        // Suggest to use const declaration for variables
        // that are never modified after declared.
        'prefer-const': 2,

        // space between method name and parens
        'classes/space': 2,

        // Class name should start with upper case.
        // Method name should start with lower case.
        'classes/name': [2, 'class', 'method']
    }
};
