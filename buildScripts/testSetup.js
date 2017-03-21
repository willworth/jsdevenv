//This file isn't transpiled, so must use CommonJs and ES5

//Register babel to transpile before our tests run.
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};
