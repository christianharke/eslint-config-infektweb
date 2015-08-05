module.exports = {
    'rules': {
        // Ensure error callbacks are handled.
        // Error param matches any string that contains 'err' or 'Err'
        'handle-callback-err': [2, '^.*(e|E)rr' ],

        // Disallow new require
        'no-new-require': 2,

        // Disallow string concatenation when using _dirname and _filename
        'no-path-concat': 2,

        // Disallow process.exit()
        'no-process-exit': 2,

        // Disallow synchronous methods
        'no-sync': 2
    }
};
