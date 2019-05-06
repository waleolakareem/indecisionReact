'use strict';

//JSX - Javascript extention provided to us by react

var template = React.createElement(
  'h1',
  null,
  'Amazing'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
