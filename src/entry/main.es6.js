'use strict';

require('babel-core/lib/babel/polyfill');

let App = require('components/App');
let React = require('react');

React.render(React.createElement(App, {}), document.getElementById('main'));