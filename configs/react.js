module.exports = {
    'ecmaFeatures': {
        'jsx': true
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Enforce boolean attributes notation in JSX
        // e.g. <Icon spin />
        'react/jsx-boolean-value': [2, 'never'],

        // Enforce quote style for JSX attributes
        'react/jsx-quotes': [2, 'double'],

        // Prevent multiple component definition per file
        'react/no-multi-comp': 2,

        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,

        // Prevent missing props validation in a React component definition
        'react/prop-types': 2,

        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 2,

        // Prevent missing parentheses around multilines JSX
        'react/wrap-multilines': 2,

        // Enforce component methods order
        'react/sort-comp': [2, {
            order: [
                'displayName',
                'propTypes',
                'defaultProps',
                'contextTypes',
                'statics',
                'constructor',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'render',
                '/^render.+$/',
                '/^handle.+$/',
                'everything-else'
            ]
        }]
    }
};
